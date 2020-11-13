import React from "react";
import "../layout/Login.css";
import { Toast, Container, Form, InputGroup, FormControl, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <div className="login">
            <Toast>
                <Toast.Header className="toaster-header" closeButton={false}>
                    <h4 className="mr-auto mx-2">Login</h4>
                </Toast.Header>
                <Toast.Body>
                    <Container>
                        <Form.Group className="mt-2">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                Email
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                            <Row>
                                <Col sm={12} md={6}>
                                    <p className="text-md-left text-sm-center font-weight-bold text-primary mt-3">Forget Password ?</p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <p className="text-md-right text-sm-center font-weight-bold mt-3">Remember Me</p>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Container>
                </Toast.Body>
                <Toast.Header className="toaster-tail py-2" closeButton={false}>
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>

                                <Link to="/register"><Button variant="light" className="register-btn px-4">Register</Button></Link>
                            </Col>
                            <Col sm={12} md={6}>
                                <Link to="/dashboard"><Button variant="primary" className="px-4 login-btn">Log in</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </Toast.Header>
            </Toast>
        </div>
    )
}

export default Login
