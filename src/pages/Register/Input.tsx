import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Input:React.FC<any> = ({ label, type, required, placeholder, states, controllers, index }) =>{
    return (
        <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
                <h6>{label} { required && "*" }</h6>
            </Form.Label>
            <Col sm="8">
                {
                    type === "radio" && (
                        <>
                            <Form.Check inline label="Yes" type="radio" id={`1`} onClick={controllers[index]} /><br />
                            <Form.Check inline label="No" type="radio" id={`2`} onClick={controllers[index]} />
                        </>
                    )
                }
                {
                    type !== "radio" && <Form.Control type={type} placeholder={placeholder} required={required} value={states[index]} onChange={controllers[index]} />
                }
            </Col>
        </Form.Group>
    )
}

export default Input;
