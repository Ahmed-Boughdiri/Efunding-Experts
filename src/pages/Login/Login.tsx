import React, { useState } from "react";
import "../../layout/Login.css";
import { 
    Toast, 
    Container, 
    Form, 
    InputGroup, 
    FormControl, 
    Row, 
    Col, 
    Button, 
    Alert,
    Image
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import login from "../../global/Login";
import { connect } from "react-redux";
import { storeID } from "../../util/ManageID";
import { RouteComponentProps } from "react-router-dom";

import logo from "../../assets/logo.png";

interface LoginProps extends RouteComponentProps {
    id: String
}
const Login:React.FC<LoginProps> = ({ history, id }) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const handleLogin = async(email: String, password:String) =>{
        const res = await login(email, password);
        if(res.success) {
            storeID(res._id as string || "")
            history.push("/dashboard")
        } else {
            setError(res.error as string || "");
            setShowError(true)
        }
    }
    return (
        <div className="login">
            <div>
                {
                    showError && (
                        <Alert 
                            variant={
                                (error === "Your Account Still Didn't Approved Yet") ? 
                                "success" : "danger"
                            } 
                            style={{
                                width: 350, 
                                textAlign: "center"
                            }}
                        >
                            {error}
                        </Alert>
                    )
                }
                <Toast className="toaster-container">
                    <Toast.Header 
                        className="toaster-header" 
                        closeButton={false}
                    >
                        <h4 className="mr-auto mx-2">Login</h4>
                    </Toast.Header>
                    <Toast.Body>
                        <Container>
                            <Form.Group className="mt-2">
                                <Form.Label 
                                    htmlFor="inlineFormInputGroup" 
                                    srOnly
                                >
                                    Email
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUser} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        id="inlineFormInputGroup" 
                                        placeholder="Email" 
                                        value={email} 
                                        onChange={(e) =>setEmail(e.target.value)} 
                                    />
                                </InputGroup>
                                <Form.Label 
                                    htmlFor="inlineFormInputGroup" 
                                    srOnly
                                >
                                    Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faKey} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        id="inlineFormInputGroup" 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={(e) =>setPassword(e.target.value)} 
                                    />
                                </InputGroup>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <p 
                                            className="text-md-left text-sm-center font-weight-bold text-primary mt-3"
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            onClick={() =>history.push("/password/forget")}
                                        >
                                            Forget Password ?
                                        </p>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <p 
                                            className="text-md-right text-sm-center font-weight-bold mt-3"
                                        >
                                            Remember Me
                                        </p>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Container>
                    </Toast.Body>
                    <Toast.Header 
                        className="toaster-tail py-2" 
                        closeButton={false}
                    >
                        <Container>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Link to="/register">
                                        <Button 
                                            variant="light" 
                                            className="register-btn px-4"
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button 
                                        variant="primary" 
                                        className="px-4 login-btn" 
                                        onClick={async() =>await handleLogin(email,password)}
                                    >
                                        Log in
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Toast.Header>
                </Toast>
            </div>
            <div className="login-logo">
                <Image 
                    src={logo}
                />
            </div>
        </div>
    )
}

function mapStateToProps(state:any) {
    return {
        id: state.idReducer
    }
}

export default connect(mapStateToProps)(Login)
