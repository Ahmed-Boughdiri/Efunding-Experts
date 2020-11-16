import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Card } from "react-bootstrap";
import "../../layout/Refferal.css";
import RefferalInfo from "./RefferalInfo";
import RefferalPersonalInfo from "./RefferalPersonalInfo";

const pageInfo = state.pages.find((page) => page.name === "Refferal");

const Refferal = () => (
  <div className="refferal pr-4">
    <h3 className="pt-4 text-left pl-3">New Refferal</h3>
    <Card className="mt-5 card-container">
      <RefferalInfo />
      <RefferalPersonalInfo />
    </Card>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <div>
      <Page
        section={<Refferal />}
        activeTab={pageInfo?.name}
        linksData={pageInfo?.path}
        history={history}
      />
    </div>
  );
};

export default RootComponent;
