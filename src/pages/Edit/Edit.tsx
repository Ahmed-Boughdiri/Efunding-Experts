import React,{ useState, useEffect } from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Row, Col } from "react-bootstrap";
import "../../layout/Edit.css";
import EditInfo from "./EditInfo";
import Featured from "./Featured";
import { connect } from "react-redux";
import editInfo from "../../global/EditInfo";
import { localStoreEditData, getEditData } from "../../util/LocalStoreEditData";
import { EditInfoDataProps } from "../../@types/others/edit-info";
import Loader from "../../components/Loading";
import Error from "../../components/Error";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";
import NotesHistory from "../../components/NotesHistory";

const pageInfo = state.pages.find((page) => page.name === "Edit");

interface EditProps {
  quoteID: String,
  editInfoData: EditInfoDataProps,
  editData: any,
  storeEditData: (data: unknown) => void,
  history: History
}

const Edit: React.FC<EditProps> = ({ 
  quoteID, 
  editInfoData, 
  editData, 
  storeEditData,
  history
}) => {
  const [firstName, setFirstName] = useState(editData.FirstName);
  const [lastName, setLastName] = useState(editData.LastName)
  const [phone, setPhone] = useState<Number|null>(null)
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")
  const [file, setFile] = useState<Blob | null>(null);
  const controllers = {
    firstName,
    lastName,
    email,
    phone,
    note
  }
  const actions = {
    updateFirstName: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setFirstName(e.target.value),
    updateLastName: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setLastName(e.target.value),
    updatePhone: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setPhone(+e.target.value),
    updateEmail: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setEmail(e.target.value),
    updateNote: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setNote(e.target.value),
    updateCreditReport: (e:React.ChangeEvent<HTMLInputElement>) => 
                          setFile(e.target.files && e.target.files[0])
  }
  const handleEditData = () =>{
    if(Object.keys(editData).length === 0) {
      const data = getEditData();
      storeEditData(data)
    } else {
      localStoreEditData(editData)
    }
  }
  const handleInfo = () =>{
    const result = getEditData();
    setFirstName(result.FirstName);
    setLastName(result.LastName);
    setEmail(result.Email as string);
    setPhone(result.Phone && +result.Phone);
  }
  useEffect(() =>{
    handleEditData();
    handleInfo()
  },[])
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const handleEditInfo = async() =>{
    setShowLoader(true)
    let identifier = "";
    if(editInfoData.infoType === "refferal") 
      identifier = (editInfoData.quoteID as string)
    else if(editInfoData.infoType === "client") 
      identifier = (editInfoData.clientEmail as string)
    else if(editInfoData.infoType === "approved-quote") 
      identifier = (editInfoData.quoteID as string)
    const res = await editInfo(
      controllers, 
      editInfoData.infoType, 
      identifier,  
      editInfoData.ownerID, 
      file
    );
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
      setShowLoader(false)
    } else {
      setShowLoader(false)
        history.push(`${(editInfoData.infoType === "client") ? "/clients" : "/quotes"}`)
      setShowError(false)
    }
    setShowLoader(false);
  }
  const [showNotesHistory, setShowNotesHistroy] = useState(false)
  return (
    <div>
      {
        showLoader && <Loader />
      }
      {
        showError && <Error error={error} />
      }
      {
        !showError && (
          <>
            <h3 
              className="pt-4 text-left pl-3"
            >
              Edit: 
              {`
                ${editData.FirstName} 
                ${editData.LastName}
              `}
            </h3>
            <Row 
              className="mt-5" 
              style={{ 
                width: "99%" 
              }}
            >
              <Col 
                sm={12} 
                md={12} 
                className="mb-5"
              >
                <EditInfo 
                  actions={actions} 
                  controllers={controllers} 
                  onClick={handleEditInfo} 
                  editData={editInfoData} 
                  showNotesHistory={() =>setShowNotesHistroy(true)}
                />
              </Col>

              <Col sm={12} md={12} className="mb-5">
                <Featured editData={editData} />
              </Col>
            </Row>   
          </>
        )
      }
      {
        showNotesHistory && <NotesHistory 
                              closeFunc={() =>setShowNotesHistroy(false)} 
                              notes={editData.Note}
                            />
      }
    </div>
  );
}

interface RootComponentProps extends RouteComponentProps {
  quoteID: String,
  editInfoData: any,
  editData: any,
  storeEditData: any
}

const RootComponent: React.FC<RootComponentProps> = ({ history, quoteID, editInfoData, editData, storeEditData }) => {
  return (
    <Page
      section={
        <Edit 
          quoteID={quoteID} 
          editInfoData={editInfoData} 
          editData={editData} 
          storeEditData={storeEditData} 
          history={history}
        />
      }
      history={history}
      linksData={pageInfo?.path}
      activeTab={pageInfo?.name}
    />
  );
};

function mapStateToProps(state:any) {
  return {
    quoteID: state.quoteIDReducer,
    editInfoData: state.EditInfoReducer,
    editData: state.EditDataReducer
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    storeEditData: (data:any) =>dispatch({ type: "STORE_EDIT_DATA", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
