import React,{ useState } from "react";
import "../../layout/ResetPassword.css";
import { 
    Card, 
    Form, 
    FormControl,
    Button,
    Alert
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import handleResetPassword from "../../global/HandleResetPassword";
import Loader from "../../components/Loading";

interface MatchedParamsProps {
    id?: string;
}

const ResetPassword:React.FC<RouteComponentProps<MatchedParamsProps>> = ({ history, match }) =>{
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const resetPasswordHandler = async() =>{
        setLoading(true)
        if(newPassword !== confirmNewPassword) {
            setError("Password Does Not Match")
            setShowError(true);
            setLoading(false);
            return;
        }
        const res = await handleResetPassword(newPassword, match.params.id || "");
        if(!res.success) {
            setError(res.error as string)
            setShowError(true)
            setLoading(false)
            return;
        }
        setShowError(false)
        setError("")
        setLoading(false)
        history.push("/login");
    }
    return (
        <div className="reset-password-container">
            {
                showError && (
                    <Alert
                        variant="danger"
                        className="reset-password-error"
                    >
                        { error }
                    </Alert>
                )
            }
            <Card className="reset-password-wrapper">
                <Card.Header>
                    <h6 className="font-weight-bold mt-2">Reset Password: </h6>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="reset-password-input-group">
                            <Form.Label>
                                <h6>New Password: </h6>
                            </Form.Label>
                            <FormControl 
                                type="text"
                                placeholder="New Password"
                                className="reset-password-input"
                                value={newPassword as string}
                                onChange={
                                    (e:React.ChangeEvent<HTMLInputElement>) =>
                                        setNewPassword(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <h6>New Password: </h6>
                            </Form.Label>
                            <FormControl 
                                type="text"
                                placeholder="New Password"
                                className="reset-password-input"
                                value={confirmNewPassword as string}
                                onChange={
                                    (e:React.ChangeEvent<HTMLInputElement>) =>
                                        setConfirmNewPassword(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="success"
                        onClick={resetPasswordHandler}
                    >
                        Reset Password
                    </Button>
                    <Button
                        variant="primary"
                        className="ml-2"
                        onClick={() => history.push("/login")}
                    >
                        Go To Login
                    </Button>
                </Card.Footer>
            </Card>
            {
                loading && <Loader />
            }
        </div>
    )
}

export default ResetPassword;

