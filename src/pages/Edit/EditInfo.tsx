import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

const EditInfo: React.FC<{}> = () => {
  return (
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
            <Form.File.Label>
              <h6>Upload File</h6>
            </Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="float-right">
          SAVE
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default EditInfo;
