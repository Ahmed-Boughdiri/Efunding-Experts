import React,{ useState, useEffect } from "react";
import "../../layout/ForgetPassword.css";
import { 
    Card, 
    Button,
    Form,
    FormControl,
    Alert
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import SuccessMsg from "./SuccessMsg";
import handleForgetPassword from "../../global/HandleForgetPassword";
import Loader from "../../components/Loading";

interface EmailFormProps {
    email: String,
    onChangeEmail: (e:React.ChangeEvent<HTMLInputElement>) => void,
    onConfirm: () => void
}

const EmailForm:React.FC<EmailFormProps> = ({ 
    email, 
    onChangeEmail,
    onConfirm
}) =>{
    return (
        <Card className="email-form-container">
            <Card.Header>
                <h6 className="font-weight-bold mt-2">Verification Email: </h6>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            <h6>Enter Your Verification Email: </h6>
                        </Form.Label>
                        <FormControl 
                            className="email-form-input"
                            placeholder="Verification Email"
                            type="email"
                            value={email as string}
                            onChange={onChangeEmail}
                        />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="success"
                    className="px-4"
                    onClick={onConfirm}
                >
                    Send
                </Button>
            </Card.Footer>
        </Card>
    )
}

const ForgetPassword:React.FC<RouteComponentProps> = ({ history }) =>{
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const forgetPasswordHandler = async() =>{
        setLoading(true);
        const res = await handleForgetPassword(email);
        if(!res.success) {
            setError(res.error as string);
            setShowError(true)
            setLoading(false)
            return;
        }
        setShowError(false);
        setError("")
        setShowSuccessMsg(true);
        setLoading(false);
    }
    return (
        <div className="forget-password-container">
            {
                showError && (
                    <Alert 
                        variant="danger"
                        className="forget-message-error"
                    >
                        { error }
                    </Alert>
                )
            }
            {
                showSuccessMsg ? (
                    <SuccessMsg 
                        history={history} 
                    />
                ) : (
                    <EmailForm 
                        email={email} 
                        onChangeEmail={
                            (e:React.ChangeEvent<HTMLInputElement>) => 
                                setEmail(e.target.value)
                        } 
                        onConfirm={forgetPasswordHandler}
                    />
                )
            }
            {
                loading && <Loader />
            }
        </div>
    )
}

export default ForgetPassword;
