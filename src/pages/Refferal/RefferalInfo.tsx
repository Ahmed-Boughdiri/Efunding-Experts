import React from "react";
import { Card, Row, Col, Form, Container } from "react-bootstrap";
import "../../layout/Refferal.css";

const RefferalInfo = () => {
  return (
    <div>
      <Card.Header>
        <h5 className="text-left mt-2">Info</h5>
      </Card.Header>
      <Card.Body>
        <Container>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">Desired amount of funding? *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option value="0">Please select an option</option>
                  <option value="1">Less than $15000</option>
                  <option value="2">$25000 - $49999</option>
                  <option value="3">$50000 - $99999</option>
                  <option value="4">$100000 - $149000</option>
                  <option value="5">$150000 - $199999</option>
                  <option value="6">$200000 - $299999</option>
                  <option value="7">$300000 - $599999</option>
                  <option value="8">$600000 - $1MM</option>
                  <option value="9">$1MM - $5MM</option>
                  <option value="10">$5MM or more</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={4}>
                <h6 className="text-left">What's main purpose of fund? *</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option value="0">Please select an option</option>
                  <option value="1">Start up funding</option>
                  <option value="2">
                    Working Capital/Business Expansion (with real estate)
                  </option>
                  <option value="3">
                    Working Capital/Business Expansion (withOUT real estate)
                  </option>
                  <option value="4">
                    Purchasing Existing Business (with real estate)
                  </option>
                  <option value="5">
                    Purchasing Existing Business (withOUT real estate)
                  </option>
                  <option value="6">Equipement</option>
                  <option value="7">Debt consolidation </option>
                  <option value="8">$600000 - $1MM</option>
                  <option value="9">Real Estate Purchasing</option>
                  <option value="10">Real Estate Flipping</option>
                  <option value="11">Personal Loan Request</option>
                  <option value="12">Other</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={4}>
                <h6 className="text-left">
                  Do they already have a business? *
                </h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option value="0">Please select an option</option>
                  <option value="1">No</option>
                  <option value="2">Yes - it's 0-6 months old</option>
                  <option value="3">Yes - it's 12-24 month old</option>
                  <option value="3">Yes - it's 2-4 years old</option>
                  <option value="3">Yes - it's 4-10 years old</option>
                  <option value="3">Yes - it's 10+ years old</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                <h6 className="text-left">If so, name of the business?</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </Card.Body>
    </div>
  );
};

export default RefferalInfo;
