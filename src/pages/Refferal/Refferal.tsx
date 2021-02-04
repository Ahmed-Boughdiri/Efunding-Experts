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

const pageInfo = state.pages.find((page) => page.name === "Refferal");

const Refferal:React.FC<any> = ({ history }) => {
  const [DesiredAmountOfFunding, setDesiredAmountOfFunding] = useState<undefined | String>(undefined);
  const [WhatsMainPurposeOfFund, setWhatsMainPurposeOfFund] = useState<undefined | String>(undefined);
  const [DoTheyAlreadyHaveABusiness, setDoTheyAlreadyHaveABusiness] = useState<undefined | String>(undefined);
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
  const [creditFile, setCreditFile] = useState<any>(null)

  const [showLoader, setShowLoader] = useState(false);

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false)

  const controllers = {
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
  const actions = {
    setDesiredAmountOfFunding: (e:any) =>setDesiredAmountOfFunding(e.target.value),
    setWhatsMainPurposeOfFund: (e:any) =>setWhatsMainPurposeOfFund(e.target.value),
    setDoTheyAlreadyHaveABusiness: (e:any) =>setDoTheyAlreadyHaveABusiness(e.target.value),
    setNameOfTheBusiness: (e:any) =>setNameOfTheBusiness(e.target.value),
    setFirstName: (e:any) =>setFirstName(e.target.value),
    setLastName: (e:any) =>setLastName(e.target.value),
    setAdress: (e:any) =>setAdress(e.target.value),
    setCity: (e:any) =>setCity(e.target.value),
    setState: (e:any) =>setState(e.target.value),
    setZip: (e:any) =>{
      const re = /^[0-9]+$/;
      if(e.target.value === "" || re.test(e.target.value)) {
        setZip(e.target.value)
      }
    },
    setDOB: (e:any) =>setDOB(e.target.value),
    setPhone: (e:any) =>{
      const re = /^[0-9]+$/;
      if(e.target.value === "" || re.test(e.target.value) || e.target.value[e.target.value.length - 1] === "-") {
        setPhone(e.target.value)
      }
    },
    setEmail: (e:any) =>setEmail(e.target.value),
    setIncome: (e:any) =>{
      const re = /^[0-9]+$/
      if(e.target.value === "" || re.test(e.target.value)) {
        setIncome(e.target.value)
      }
    },
    setNotes: (e:any) =>setNotes(e.target.value),
    setFile: (e:any) =>setCreditFile(e.target.files[0])
  }

  const handleSubmit = async(e:any) =>{
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
    if (nameOfTheBusiness) refferalData.nameOfTheBusiness = nameOfTheBusiness;
    if (Adress) refferalData.Adress = Adress;
    if (City) refferalData.City = City;
    if (State) refferalData.State = State;
    if (Zip) refferalData.Zip = Zip;
    if (DOB) refferalData.DOB = DOB;
    if (Phone) refferalData.Phone = Phone
    if (Email) refferalData.Email = Email
    if (Income) refferalData.Income = Income
    if (Notes) refferalData.Notes = Notes
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
          <RefferalInfo controllers={controllers} actions={actions} />
          <RefferalPersonalInfo controllers={controllers} actions={actions} handleSubmit={handleSubmit} />
        </Form>
      </Card>
      {
        showError && (
          <Alert variant="danger" className="mt-3" dismissible onClose={() =>setShowError(false)}>
            {error}
          </Alert>
        )
      }
    </div>
  );
}

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <div>
      <Page
        section={<Refferal history={history} />}
        activeTab={pageInfo?.name}
        linksData={pageInfo?.path}
        history={history}
      />
    </div>
  );
};

export default RootComponent;
