import React,{ useState, useEffect } from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Card } from "react-bootstrap";
import "../../layout/Contracts.css";
import ContractsSection from "./ContractsSection";
import ApplicationsSection from "./ApplicationsSection";
import FormsSection from "./FormsSection";
import { 
  getUserContracts, 
  getContractsAndApplications, 
  getOtherApplications, 
  getOtherForms 
} from "../../global/GetUserContracts";
import { getID } from "../../util/ManageID";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

const pageInfo = state.pages.find((page) => page.name === "Contracts");

const id = getID();

interface ContractsProps {
  history: History
}

const Contracts:React.FC<ContractsProps> = ({ history }) => {
  const [contractsData, setContrcatsData] = useState<any[]>([]);
  const [applicationsData, setApplicationsData] = useState<any[]>([]);
  const [formsData, setFormsData] = useState<any[]>([]);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false);
  const loadContracts = async() =>{
    setShowLoader(true)
    const res = await getUserContracts(id as string);
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false)
      const contracts = getContractsAndApplications(res.data);
      const applications = getOtherApplications(res.data);
      const forms = getOtherForms(res.data);
      setContrcatsData(contracts);
      setApplicationsData(applications);
      setFormsData(forms)
    }
    setShowLoader(false);
  }
  useEffect(() =>{
    loadContracts();
  },[])
  return(
    <div className="contracts">
      {
        showLoader && <Loading />
      }
      {
        showError && (
          <Error 
            error={error} 
            history={history}
            loginRedirect={false}
          />
        )
      }
      {
        !showError && (
          <>
            <h3 className="pt-4 text-left pl-3">Contracts</h3>
            <Card className="mt-5 card" style={{ width: "98%" }}>
              <Card.Header as="h5">Contracts and Applications</Card.Header>
              <Card.Body>
                {
                  !contractsData.length && <h6>There is No Contract Send To You Yet</h6>
                }
                {
                  (contractsData.length !== 0) && <ContractsSection 
                                                    contracts={contractsData} 
                                                  />
                }
              </Card.Body>
            </Card>

            <Card 
              className="mt-5 card" 
              style={{ 
                width: "98%" 
              }}
            >
              <Card.Header as="h5">Other Applications</Card.Header>
              <Card.Body>
                {
                  !applicationsData.length && 
                      <h6>There is No Application Contract Send To You Yet</h6>
                }
                {
                  (applicationsData.length !== 0) && <ApplicationsSection 
                                                        applications={applicationsData} 
                                                      />
                }
              </Card.Body>
            </Card>

            <Card className="mt-5 card" style={{ width: "98%" }}>
              <Card.Header as="h5">Other Forms</Card.Header>
              <Card.Body>
                {
                  !formsData.length && 
                    <h6>There is No Form Contract Send To You Yet</h6>
                }
                {
                  (formsData.length !== 0) && <FormsSection forms={formsData} />
                }
              </Card.Body>
            </Card>   
          </>
        )
      }
    </div>
  );
}

const RootComponent: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Page
      section={<Contracts history={history} />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
