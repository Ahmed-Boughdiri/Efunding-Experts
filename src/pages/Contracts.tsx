import React from "react";
import Page from "../components/Page";
import { state } from "../global/Global";
import { Card, Row, Col } from "react-bootstrap";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contracts, applications, forms } from "../global/Contracts";
import "../layout/Contracts.css";

const pageInfo = state.pages.find((page) => page.name === "Contracts");

const Contracts = () => (
  <div className="contracts">
    <h3 className="pt-4 text-left pl-3">Contracts</h3>
    <Card className="mt-5 card" style={{width: "98%"}}>
        <Card.Header as="h5">Contracts and Applications</Card.Header>
        <Card.Body>
            {
                contracts.map(contract =>(
                    <div>
                        <Row style={{marginBottom: 15}}>
                            <Col md={4}>
                                <h6 className="mt-1">{contract.backendFee}% Backend fee client</h6>
                            </Col>
                            <Col md={5}>
                                <a href={contract.onlineVersionLink} className="remove-underline">
                                    <h6 className="text-primary mt-1">Click here for an online version (preffered)</h6>
                                </a>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col md={7} sm={3}>
                                        <a href={contract.downloadLink} className="remove-underline">
                                            <h6 className="text-dark mt-1">Download PDF</h6>
                                        </a>
                                    </Col>
                                    <Col className="pdf-icon">
                                        <a href={contract.downloadLink} className="remove-underline">
                                            <FontAwesomeIcon icon={faFilePdf} size={"lg"} color="#000" />
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="breakpoint" />
                    </div>
                ))
            }
        </Card.Body>
    </Card>


    <Card className="mt-5 card" style={{width: "98%"}}>
        <Card.Header as="h5">Other Applications</Card.Header>
        <Card.Body>
            {
                applications.map(app =>(
                    <Row style={{marginBottom: 15}}>
                        <Col md={4}>
                            <h6 className="mt-1">{app.name}</h6>
                        </Col>
                        <Col md={5}>
                            <a href={app.onlineVersionLink} className="remove-underline">
                                <h6 className="text-primary mt-1">Click here for an online version (preffered)</h6>
                            </a>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <Col sm={7}>
                                    <a href={app.downloadLink} className="remove-underline">
                                        <h6 className="text-dark mt-1">Download PDF</h6>
                                    </a>
                                </Col>
                                <Col className="pdf-icon">
                                    <a href={app.downloadLink} className="remove-underline">
                                        <FontAwesomeIcon icon={faFilePdf} size={"lg"} color="#000" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))
            }
        </Card.Body>
    </Card>
    

    <Card className="mt-5 card" style={{width: "98%"}}>
        <Card.Header as="h5">Other Forms</Card.Header>
        <Card.Body>
            {
                forms.map(form =>(
                    <Row style={{marginBottom: 15}}>
                        <Col md={4}>
                            <h6 className="mt-1">{form.name}</h6>
                        </Col>
                        <Col md={5}>
                            <a href={form.onlineVersionLink} className="remove-underline">
                                <h6 className="text-primary mt-1">Click here for an online version (preffered)</h6>
                            </a>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <Col sm={7}>
                                    <a href={form.downloadLink} className="remove-underline">
                                        <h6 className="text-dark mt-1">Download PDF</h6>
                                    </a>
                                </Col>
                                <Col className="pdf-icon">
                                    <a href={form.downloadLink} className="remove-underline">
                                        <FontAwesomeIcon icon={faFilePdf} size={"lg"} color="#000" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))
            }
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
