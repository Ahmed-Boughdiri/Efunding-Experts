import React,{ useEffect } from "react";
import "../layout/Error.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { History } from "history";

interface ErrorProps {
    error: String;
    loginRedirect: Boolean,
    history: History
}

const Error:React.FC<ErrorProps> = ({ 
    error,
    loginRedirect,
    history
}) =>{
    const handleLoginRedirect = () =>{
        if(!history)
            return null;
        history.push("/login")
    }
    useEffect(() =>{
        console.log("Redirect: ", loginRedirect)
    }, [])
    return (
        <div className="error">
            <FontAwesomeIcon 
                icon={faExclamationCircle} 
                size="7x" 
            />
            <h3 className="error-text mt-4">{error}</h3>
            <Button
                variant="primary"
                className="mt-2"
                onClick={handleLoginRedirect}
            >
                Go To Login Page
            </Button>
            
        </div>
    )
}

export default Error;
