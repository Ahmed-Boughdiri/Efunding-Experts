import React from "react";
import { Card, Container, Form, Col, Row, Button } from "react-bootstrap";

const RefferalPersonalInfo = () => {
  return (
    <Card className="rounded-0 rounded-bottom card-container2">
      <Card.Body className="pt-4">
        <Container>
          <h5 className="text-left">
            Please provide Name, Adress, and DOB for soft credit pull OR attach
            a credit report below.
          </h5>
          <Form className="mt-5">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">First Name *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Last Name *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Adress</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">City</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">State</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Zip</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">DOB (mm-dd-yyy)</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <hr />

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Phone</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Email (DON'T USE YOUR E-MAIL)</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Income</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">
                  Upload file:(upload multiple files on next page)
                </h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Group>
                  <Form.File
                    className="position-relative"
                    required
                    name="file"
                    id="validationFormik107"
                    feedbackTooltip
                  />
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Notes</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="float-right">
          Submit
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default RefferalPersonalInfo;
