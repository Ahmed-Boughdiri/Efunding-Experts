import React,{ useEffect, useState } from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import "../../layout/dashboard.css";
import { Card, Row, Col } from "react-bootstrap";
import RecentActivities from "./RecentActivities";
import RecentClients from "./RecentClients";
import { getID } from "../../util/ManageID";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import getRecentActivities from "../../global/GetRecentActivities";
import getRecentClients from "../../global/GetRecentClients";
import Refferals from "./Refferals";
import getRecentRefferals from "../../global/GetRecentRefferals";
import getCommision from "../../global/GetCommsion";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

const pageInfo = state.pages.find((page) => page.name === "Dashboard");

interface DashboardPage {
  history: History
}

const Dashboard:React.FC<DashboardPage> = ({ history }) => {
  const [recentActivities, setRecentActivities] = useState([]);
  const [recentClients, setRecentClients] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false);
  const handleRecentActivities = async() =>{
    setShowLoader(true)
    const res = await getRecentActivities(getID() || "");
    if(!res.success) {
      setError(res.error as string)
      setShowError(true);
    } else {
      setShowError(false);
      setRecentActivities(res.data)
    }
    setShowLoader(false)
  }
  const handleRecentClients = async() =>{
    setShowLoader(true);
    const res = await getRecentClients(getID() || "")
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false)
      setRecentClients(res.data)
    }
    setShowLoader(false)
  }
  const [recentRefferals, setRecentRefferals] = useState([])
  const handleRecentRefferals = async() =>{
    setShowLoader(true)
    const res = await getRecentRefferals(getID() || "");
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false);
      setRecentRefferals(res.data)
    }
    setShowLoader(false);
  }
  const [commision, setCommision] = useState(0);
  const handleCommision = async() =>{
    setShowLoader(true)
    const res = await getCommision(getID() || "")
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false)
      setCommision(res.data)
    }
    setShowError(false)
  }
  useEffect(() =>{
    handleCommision()
  },[])
  return(
    <div className="dashboard pr-4">
      {
        showLoader && <Loading />
      }
      {
        showError && (
          <Error 
            error={error} 
            history={history}
            loginRedirect
          />
        )
      }
      {
        !showError && (
          <>
            <h3 className="pt-4 text-left pl-3">Dashboard</h3>
            <Row>
              <Col md={6}>
                <RecentActivities 
                  handleRecentActivities={handleRecentActivities} 
                  recentActivities={recentActivities} 
                />
              </Col>
              <Col md={6}>
                <Card className="mt-4 mb-3">
                  <Card.Header>
                    <h6>COMMISION WE OWE YOU</h6>
                  </Card.Header>
                  <Card.Body>
                    <h2 className="text-right">
                      ${(commision === 0) ? "000.00" : commision + ""}
                    </h2>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mt-3 recent-clients">
                <RecentClients 
                  handleRecentClients={handleRecentClients} 
                  recentClients={recentClients} 
                />
              </Col>
              <Col md={6} className="commision-container">
                <Refferals 
                  handleRecentRefferals={handleRecentRefferals} 
                  recentRefferals={recentRefferals} 
                />
              </Col>
            </Row>      
          </>
        )
      }
    </div>
  );
}

const RootComponent: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() =>{
    console.log("Page History: ", history)
  }, [])
  return (
    <Page
      section={<Dashboard history={history} />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
