import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Card } from "react-bootstrap";
import "../../layout/Contracts.css";
import ContractsSection from "./ContractsSection";
import ApplicationsSection from "./ApplicationsSection";
import FormsSection from "./FormsSection";

const pageInfo = state.pages.find((page) => page.name === "Contracts");

const Contracts = () => (
  <div className="contracts">
    <h3 className="pt-4 text-left pl-3">Contracts</h3>
    <Card className="mt-5 card" style={{ width: "98%" }}>
      <Card.Header as="h5">Contracts and Applications</Card.Header>
      <Card.Body>
        <ContractsSection />
      </Card.Body>
    </Card>

    <Card className="mt-5 card" style={{ width: "98%" }}>
      <Card.Header as="h5">Other Applications</Card.Header>
      <Card.Body>
        <ApplicationsSection />
      </Card.Body>
    </Card>

    <Card className="mt-5 card" style={{ width: "98%" }}>
      <Card.Header as="h5">Other Forms</Card.Header>
      <Card.Body>
        <FormsSection />
      </Card.Body>
    </Card>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <Page
      section={<Contracts />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
