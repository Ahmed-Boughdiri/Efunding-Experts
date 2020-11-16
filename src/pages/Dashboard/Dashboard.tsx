import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import "../../layout/dashboard.css";
import { Card, Row, Col } from "react-bootstrap";
import Statistics from "./Statistics";
import RecentActivities from "./RecentActivities";
import RecentClients from "./RecentClients";
import Commision from "./Commision";

const pageInfo = state.pages.find((page) => page.name === "Dashboard");

const Dashboard = () => (
  <div className="dashboard pr-4">
    <h3 className="pt-4 text-left pl-3">Dashboard</h3>
    <Statistics />
    <Row>
      <Col md={6}>
        <RecentActivities />
      </Col>
      <Col md={6}>
        <Card className="mt-4 mb-3">
          <Card.Header>
            <h6>COMMISION WE OWE YOU</h6>
          </Card.Header>
          <Card.Body>
            <h2 className="text-right">$651.38</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="mt-3 recent-clients">
        <RecentClients />
      </Col>
      <Col md={6} className="commision-container">
        <Commision />
      </Col>
    </Row>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <Page
      section={<Dashboard />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
