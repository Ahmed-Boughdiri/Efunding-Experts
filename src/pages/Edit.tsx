import React from "react";
import Page from "../components/Page";
import { state } from "../global/Global";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import "../layout/Edit.css";

import like from "../assets/like-mini.jpg";
import chat from "../assets/chat-mini.jpg";

const pageInfo = state.pages.find((page) => page.name === "Edit");

const Edit = () => (
  <div>
    <h3 className="pt-4 text-left pl-3">Edit: Marcia Jones</h3>
    <Row className="mt-5" style={{width: "99%"}}>
        <Col sm={12} md={12} className="mb-5">
            <Card>
                <Card.Header as="h5">BASIC INFO</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                <h6>First Name: *</h6>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="First Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                <h6>Last Name: *</h6>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Last Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                <h6>Phone: </h6>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" placeholder="Phone" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                <h6>Email: </h6>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                <h6>Notes: </h6>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control as="textarea" aria-label="With textarea" />
                            </Col>
                        </Form.Group>

                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label><h6>Upload File</h6></Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" className="float-right">SAVE</Button>
                </Card.Footer>
            </Card>
        </Col>

        <Col sm={12} md={12} className="mb-5">
            <Card>
                <Card.Header as="h5">RECENT ACTIVITIES</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={6} md={1}>
                            <Image src={chat} roundedCircle />
                        </Col>
                        <Col md={11}>
                            <Row  className="note">
                                <Col md={6}>
                                    <h5>Notes From Broker</h5>
                                    <p className="text-muted" style={{marginTop: -7}}>Thank you</p>
                                </Col>
                                <Col md={6}>
                                    <strong className="text-muted float-right">2020/11/10</strong>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col xs={6} md={1}>
                            <Image src={like} roundedCircle />
                        </Col>
                        <Col md={11}>
                            <Row  className="note">
                                <Col md={6}>
                                    <h5>Update</h5>
                                    <p className="text-muted" style={{marginTop: -7}}>We can got money ...3500... Notes. If they have </p>
                                </Col>
                                <Col md={6}>
                                    <strong className="text-muted float-right">2020/11/10</strong>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

        <Col sm={12} md={12} className="mb-5">
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6>Approx Quote Amount</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="3500" />
                            </fieldset>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6>Funding Amount So Far</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="" />
                            </fieldset>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6># Of Apps Pending</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="" />
                            </fieldset>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6># Of Apps Approved</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="" />
                            </fieldset>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6>Total Commissions</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="0" />
                            </fieldset>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="7">
                            <h6>Commissions Collected</h6>
                        </Form.Label>
                        <Col sm="5">
                            <fieldset disabled>
                                <Form.Control id="disabledTextInput" placeholder="" defaultValue="0" />
                            </fieldset>
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className="py-4">

            </Card.Footer>
        </Card>
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
