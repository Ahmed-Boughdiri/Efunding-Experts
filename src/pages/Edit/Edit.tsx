import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Row, Col } from "react-bootstrap";
import "../../layout/Edit.css";
import EditInfo from "./EditInfo";
import EditRecentActivities from "./EditRecentActivities";
import Featured from "./Featured";

const pageInfo = state.pages.find((page) => page.name === "Edit");

const Edit: React.FC<{}> = () => (
  <div>
    <h3 className="pt-4 text-left pl-3">Edit: Marcia Jones</h3>
    <Row className="mt-5" style={{ width: "99%" }}>
      <Col sm={12} md={12} className="mb-5">
        <EditInfo />
      </Col>

      <Col sm={12} md={12} className="mb-5">
        <EditRecentActivities />
      </Col>

      <Col sm={12} md={12} className="mb-5">
        <Featured />
      </Col>
    </Row>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <Page
      section={<Edit />}
      history={history}
      linksData={pageInfo?.path}
      activeTab={pageInfo?.name}
    />
  );
};

export default RootComponent;
