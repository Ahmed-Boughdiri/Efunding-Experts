import React from "react";
import "../layout/Register.css";
import { Jumbotron, Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Register = () =>{
    return (
        <div className="register">
            <Jumbotron className="register-form">
                <Container>
                    <div>
                        {/* Logo */}
                    </div>
                    <h1 className="text-left register-title">Partners</h1>
                    <h4 className="register-desc">
                        Our Partner program is flexible to fit your needs.
                        Contact us today to discuss how to put us to work for your clients.
                    </h4>
                    <h5 className="mt-5 highlights">
                        Highlights of our ISO program are as follows:
                    </h5>
                    <ul>
                        <li><h5 className="char">Highest payout in the industry</h5></li>
                        <li><h5 className="char">Funding in form of installments loans. Linesof credit and credit cards. Monthly payment with longer terms.</h5></li>
                        <li><h5 className="char">Funding quotes returned in 2 hours.(if submitted by 1pm EST,back to you by 3pm)</h5></li>
                        <li><h5 className="char">Commisions paid every Friday</h5></li>
                        <li><h5 className="char">Experienced processors with over 8 years experience doing 1,000 of apps per month.</h5></li>
                        <li><h5 className="char">White label options and volume discounts.</h5></li>
                    </ul>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail" className="mt-5">
                            <Form.Label column sm="4">
                                <h6>First Name*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="First Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Last Name*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Last Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Phone Number*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Email*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Password*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Confirm*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" placeholder="Confirm" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Street Adress*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Street Adress" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>City*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="City" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>State*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="State" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Postal*</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Postal" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>What is your occupation?</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>How did you hear about us?</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Are you currently helping clients with 700+ scores obtain funding?</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Check inline label="Yes" type="radio" id={`1`} /><br />
                                <Form.Check inline label="No" type="radio" id={`1`} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>How much funding can you laverage per month? *</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Have you excellent (+700) clients to refer now ?</h6>
                            </Form.Label>
                            <Col sm="8">
                                <Form.Check inline label="Yes" type="radio" id={`1`} /><br />
                                <Form.Check inline label="No" type="radio" id={`1`} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                <h6>Have you excellent (+700) clients to refer now ?</h6>
                            </Form.Label>
                            <Col sm="8">
                                Captcha
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
                {/* Register & Login Buttons */}
                <Card className="register-form-tail">
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col md={6} sm={12}>
                                    <Link to="/">
                                        <Button variant="light" className="login-button">
                                            <h6>Already Register? Login</h6>
                                        </Button>
                                    </Link>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Button variant="primary" className="float-right register-button">
                                        <h6>Register</h6>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                </Card>
            </Jumbotron>
        </div>
    )
}

export default Register;
