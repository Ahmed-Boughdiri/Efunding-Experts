import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const Featured: React.FC<{ editData:any }> = ({ editData }) => {
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6>Funding Amount Requested</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue={editData.ApproxQuoteAmount || ""}
                />
              </fieldset>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6>Funding Amount So Far</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue=""
                />
              </fieldset>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6># Of Apps Pending</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue=""
                />
              </fieldset>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6># Of Apps Approved</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue=""
                />
              </fieldset>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6>Total Commissions</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue={editData.TotalCommissions || ""}
                />
              </fieldset>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="7">
              <h6>Commissions Collected</h6>
            </Form.Label>
            <Col sm="5">
              <fieldset disabled>
                <Form.Control
                  id="disabledTextInput"
                  placeholder=""
                  defaultValue={editData.CommissionsCollected || ""}
                />
              </fieldset>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer className="py-4"></Card.Footer>
    </Card>
  );
};

export default Featured;
