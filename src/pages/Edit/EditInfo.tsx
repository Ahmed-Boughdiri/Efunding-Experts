import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

interface EditInfoProps {
  controllers: {
    firstName: String,
    lastName: String,
    phone: Number | null,
    email: String,
    note: String,
    editInfoData?: any
  },
  actions: {
    updateFirstName: (e:React.ChangeEvent<HTMLInputElement>) => void,
    updateLastName: (e:React.ChangeEvent<HTMLInputElement>) => void,
    updatePhone: (e:React.ChangeEvent<HTMLInputElement>) => void,
    updateEmail: (e:React.ChangeEvent<HTMLInputElement>) => void,
    updateNote: (e:React.ChangeEvent<HTMLInputElement>) => void,
    updateCreditReport: (e:React.ChangeEvent<HTMLInputElement>) => void
  },
  onClick: () => Promise<void>,
  editData: any,
  showNotesHistory: () => void
}

const EditInfo: React.FC<EditInfoProps> = ({ 
  actions, 
  controllers, 
  onClick, 
  editData,
  showNotesHistory
}) => {
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
              <Form.Control 
                type="text" 
                placeholder="First Name" 
                value={controllers.firstName as string} 
                onChange={actions.updateFirstName} 
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              <h6>Last Name: *</h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                type="text" 
                placeholder="Last Name" 
                value={controllers.lastName as string} 
                onChange={actions.updateLastName} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              <h6>Phone: </h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                type="number" 
                placeholder="Phone" 
                value={controllers.phone + ""} 
                onChange={actions.updatePhone} 
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              <h6>Email: </h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                type="email" 
                placeholder="Email" 
                value={controllers.email as string} 
                onChange={actions.updateEmail} 
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              <h6>Notes: </h6>
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                as="textarea" 
                aria-label="With textarea" 
                value={controllers.note as string} 
                onChange={actions.updateNote} 
              />
            </Col>
          </Form.Group>

          <Form.File id="formcheck-api-regular">
            <Form.File.Label>
              <h6>Upload File</h6>
            </Form.File.Label>
            <Form.File.Input 
              onChange={actions.updateCreditReport} 
              multiple
            />
          </Form.File>
          
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button 
          variant="primary" 
          className="float-right" 
          onClick={onClick}
        >
          SAVE
        </Button>
        <Button
          variant="success"
          className="float-right mr-2"
          onClick={showNotesHistory}
        >
          See Notes History
        </Button>
      </Card.Footer>
    </Card>
  );
};


export default EditInfo;
