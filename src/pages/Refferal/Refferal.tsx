import React, { useState } from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Card, Alert, Form } from "react-bootstrap";
import "../../layout/Refferal.css";
import RefferalInfo from "./RefferalInfo";
import RefferalPersonalInfo from "./RefferalPersonalInfo";
import { validateRefferalData, submitRefferal } from "../../global/Refferal";
import { getID } from "../../util/ManageID";
import Loading from "../../components/Loading";
import { ControllersProps, ActionsProps } from "./types";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";
import { FileProps } from "../../@types/others/file";

const pageInfo = state.pages.find((page) => page.name === "Refferal");

const Refferal:React.FC<{history: History}> = ({ history }) => {
  const [DesiredAmountOfFunding, setDesiredAmountOfFunding] = 
                            useState<undefined | String>(undefined);
  const [WhatsMainPurposeOfFund, setWhatsMainPurposeOfFund] = 
                            useState<undefined | String>(undefined);
  const [DoTheyAlreadyHaveABusiness, setDoTheyAlreadyHaveABusiness] = 
                            useState<undefined | String>(undefined);
  const [nameOfTheBusiness, setNameOfTheBusiness] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Adress, setAdress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState<undefined | Number>(undefined);
  const [DOB, setDOB] = useState("");
  const [Phone, setPhone] = useState<undefined | Number>(undefined);
  const [Email, setEmail] = useState("");
  const [Income, setIncome] = useState("");
  const [Notes, setNotes] = useState("");
  const [creditFile, setCreditFile] = useState<any>(null);
  const [uploadedFilesPath, setUploadedFilesPath] = useState<String[]>([])

  const [showLoader, setShowLoader] = useState(false);

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false)

  const controllers:ControllersProps = {
    DesiredAmountOfFunding,
    WhatsMainPurposeOfFund,
    DoTheyAlreadyHaveABusiness,
    nameOfTheBusiness,
    FirstName,
    LastName,
    Adress,
    City,
    State,
    Zip,
    DOB,
    Phone,
    Email,
    Income,
    Notes,
  }
  const actions:ActionsProps = {
    setDesiredAmountOfFunding: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setDesiredAmountOfFunding(e.target?.value),
    setWhatsMainPurposeOfFund: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setWhatsMainPurposeOfFund(e.target.value),
    setDoTheyAlreadyHaveABusiness: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setDoTheyAlreadyHaveABusiness(e.target.value),
    setNameOfTheBusiness: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setNameOfTheBusiness(e.target.value),
    setFirstName: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value),
    setLastName: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value),
    setAdress: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setAdress(e.target.value),
    setCity: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value),
    setState: 
      (e:React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value),
    setZip: 
      (e:React.ChangeEvent<HTMLInputElement>) =>{
      const re = /^[0-9]+$/;
      if(e.target.value === "" || re.test(e.target.value)) {
        setZip(+e.target.value)
      }
    },
    setDOB: (e:React.ChangeEvent<HTMLInputElement>) =>
                    setDOB(e.target.value),
    setPhone: (e:React.ChangeEvent<HTMLInputElement>) =>{
      const re = /^[0-9]+$/;
      if(
        e.target.value === "" || 
        re.test(e.target.value) || 
        e.target.value[e.target.value.length - 1] === "-"
      ) {
        setPhone(+e.target.value)
      }
    },
    setEmail: 
      (e:React.ChangeEvent<HTMLInputElement>) =>setEmail(e.target.value),
    setIncome: 
      (e:React.ChangeEvent<HTMLInputElement>) =>{
        const re = /^[0-9]+$/
        if(e.target.value === "" || re.test(e.target.value)) {
          setIncome(e.target.value)
        }
      },
    setNotes: 
      (e:React.ChangeEvent<HTMLInputElement>) =>setNotes(e.target.value),
    setFile: 
      (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files) {
          // if(e.target.files?.length > 1) {
          //   const uploadedFiles = [ ...e.target.files ];
          //   setCreditFile(uploadedFiles)
          //   const uploadedFilesData = []
          //   for(let i=0; i<uploadedFiles.length; i++) {
          //     uploadedFilesData.push(uploadedFiles[i].name);
          //   }
          //   setUploadedFilesPath(uploadedFilesData);
          // } else {
          //   setCreditFile(e.target.files[0])
          // }
          console.log("Files", e.target.files)
          const fileUploadedList = [];
          for(let i=0; i<e.target.files.length; i++) {
            fileUploadedList.push(e.target.files[i])
          }
          console.log("File Uploaded List: ", fileUploadedList)
          setCreditFile(e.target.files)
        }
      }
  }

  const handleSubmit = async(e:React.MouseEvent<HTMLFormElement>) =>{
    setShowLoader(true)
    e.preventDefault()
    const refferalData:any = {
      DesiredAmountOfFunding,
      WhatsMainPurposeOfFund,
      DoTheyAlreadyHaveABusiness,
      FirstName,
      LastName,
      ownerID: getID(),
      creditReport: creditFile
    }
    console.log("Refferal Data Credit Report: ", refferalData.creditReport)
    if (nameOfTheBusiness) 
      refferalData.nameOfTheBusiness = nameOfTheBusiness;
    if (Adress) refferalData.Adress = Adress;
    if (City) refferalData.City = City;
    if (State) refferalData.State = State;
    if (Zip) refferalData.Zip = Zip;
    if (DOB) refferalData.DOB = DOB;
    if (Phone) refferalData.Phone = Phone
    if (Email) refferalData.Email = Email
    if (Income) refferalData.Income = Income
    if (Notes) refferalData.Notes = Notes
    if(uploadedFilesPath.length) 
        refferalData.uploadedFilesPath = uploadedFilesPath;
    const refferalDataError = validateRefferalData(refferalData)
    if(refferalDataError.error) {
      setError(refferalDataError.error as string)
      setShowError(true)
    } else {
      const res = await submitRefferal(refferalData);
      if(!res.success) {
        setError(res?.error as string)
        setShowError(true)
        const scroll = window.pageYOffset;
        window.scrollTo(0,scroll+100)
      } else {
        history.push("/quotes")
      }
    }
    setShowLoader(false)
  }

  return (
    <div className="refferal pr-4">
      {
        showLoader && <Loading />
      }
      <h3 className="pt-3 text-left pl-3">New Refferal</h3>
      <Card className="mt-5 card-container">
        <Form onSubmit={handleSubmit}>
          <RefferalInfo 
            controllers={controllers} 
            actions={actions} 
          />
          <RefferalPersonalInfo 
            controllers={controllers} 
            actions={actions} 
          />
        </Form>
      </Card>
      {
        showError && (
          <Alert 
            variant="danger" 
            className="mt-3" 
            dismissible 
            onClose={() =>setShowError(false)}
          >
            {error}
          </Alert>
        )
      }
    </div>
  );
}

const RootComponent: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div>
      <Page
        section={
          <Refferal history={history} />
        }
        activeTab={pageInfo?.name}
        linksData={pageInfo?.path}
        history={history}
      />
    </div>
  );
};

export default RootComponent;
