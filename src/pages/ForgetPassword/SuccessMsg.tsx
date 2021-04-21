import React from "react";
import { History } from "history";
import { Card, Button } from "react-bootstrap";

interface SuccessMsgProps {
    history: History
}

const SuccessMsg:React.FC<SuccessMsgProps> = ({ history }) => (
    <Card className="forget-password-wrapper">
        <Card.Body className="forget-password-content">
            <h4 className="forget-password-title text-center font-weight-bold mb-2">
                A Reset Password Link Has Been Send To Your Email Successfully
            </h4>
            <Button
                variant="success"
                className="px-5 mb-2"
                onClick={() => history.push("/login")}
            >
                Done
            </Button>
        </Card.Body>
    </Card>
);

export default SuccessMsg;
