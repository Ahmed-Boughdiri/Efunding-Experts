import React from "react";
import { Card, Container, Form, Col, Row, Button } from "react-bootstrap";

const RefferalPersonalInfo:React.FC<any> = ({ controllers, actions, handleSubmit }) => {
  return (
    <Card className="rounded-0 rounded-bottom card-container2">
      <Card.Body className="pt-4">
        <Container>
          <h5 className="text-left">
            Please provide Name, Adress, and DOB for soft credit pull OR attach
            a credit report below.
          </h5>
          <div className="mt-5">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">First Name *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.FirstName} onChange={actions.setFirstName} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Last Name *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.LastName} onChange={actions.setLastName} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Adress</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.Adress} onChange={actions.setAdress} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">City</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.City} onChange={actions.setCity} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">State</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.State} onChange={actions.setState} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Zip</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.Zip} onChange={actions.setZip} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">DOB (mm-dd-yyy)</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.DOB} onChange={actions.setDOB} />
              </Col>
            </Form.Group>

            <hr />

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Phone</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.Phone} onChange={actions.setPhone} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Email (DON'T USE YOUR E-MAIL)*</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.Email} onChange={actions.setEmail} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Income</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" value={controllers.Income} onChange={actions.setIncome} />
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
                    name="file"
                    id="validationFormik107"
                    onChange={actions.setFile}
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
                <Form.Control type="text" placeholder="" value={controllers.Notes} onChange={actions.setNotes} />
              </Col>
            </Form.Group>
          </div>
        </Container>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="float-right" type="submit">
          Submit
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default RefferalPersonalInfo;
