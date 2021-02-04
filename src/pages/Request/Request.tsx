import React from "react";
import "../../layout/Request.css";
import { Card, Button } from "react-bootstrap";

const Request:React.FC<any> = ({ history }) =>{
    return (
        <div className="request">
            <Card className="success-card text-center shadow">
                <Card.Header>
                    <h4>Successfully Register</h4>
                </Card.Header>
                <Card.Body>
                    <p className="success-text">
                        Your Application Has Successfully Send To Our Support Team, We Will Notify You Via Email When Your Application Got Either Accepted Or Denied
                    </p>
                    <Button variant="success" className="success-button mt-2" onClick={() =>history.push("/")}>GOT IT</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Request;