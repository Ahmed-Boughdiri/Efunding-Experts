import React from "react";
import { Card, Row, Col, Form, Container } from "react-bootstrap";
import "../../layout/Refferal.css";
import { ControllersProps, ActionsProps } from "./types";

interface RefferalInfoProps {
  controllers: ControllersProps;
  actions: ActionsProps
}

const RefferalInfo:React.FC<RefferalInfoProps> = ({ 
  controllers, 
  actions 
}) => {
  return (
    <div>
      <Card.Header>
        <h5 className="text-left mt-2">Info</h5>
      </Card.Header>
      <Card.Body>
        <Container>
          <div>
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
                  onChange={actions.setDesiredAmountOfFunding}
                >
                  <option value={undefined}>Please select an option</option>
                  <option value="Less than $15000">Less than $15000</option>
                  <option value="$25000 - $49999">$25000 - $49999</option>
                  <option value="$50000 - $99999">$50000 - $99999</option>
                  <option value="$100000 - $149000">$100000 - $149000</option>
                  <option value="$150000 - $199999">$150000 - $199999</option>
                  <option value="$200000 - $299999">$200000 - $299999</option>
                  <option value="$300000 - $599999">$300000 - $599999</option>
                  <option value="$600000 - $1MM">$600000 - $1MM</option>
                  <option value="$1MM - $5MM">$1MM - $5MM</option>
                  <option value="$5MM or more">$5MM or more</option>
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
                  onChange={actions.setWhatsMainPurposeOfFund}
                >
                  <option value={undefined}>Please select an option</option>
                  <option value="Start up funding">Start up funding</option>
                  <option value="Working Capital/Business Expansion (with real estate)">
                    Working Capital/Business Expansion (with real estate)
                  </option>
                  <option value="Working Capital/Business Expansion (withOUT real estate)">
                    Working Capital/Business Expansion (withOUT real estate)
                  </option>
                  <option value="Purchasing Existing Business (with real estate)">
                    Purchasing Existing Business (with real estate)
                  </option>
                  <option value="Purchasing Existing Business (withOUT real estate)">
                    Purchasing Existing Business (withOUT real estate)
                  </option>
                  <option value="Equipement">Equipement</option>
                  <option value="Debt consolidation">Debt consolidation</option>
                  <option value="$600000 - $1MM">$600000 - $1MM</option>
                  <option value="Real Estate Purchasing">Real Estate Purchasing</option>
                  <option value="Real Estate Flipping">Real Estate Flipping</option>
                  <option value="Personal Loan Request">Personal Loan Request</option>
                  <option value="Other">Other</option>
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
                  onChange={actions.setDoTheyAlreadyHaveABusiness}
                >
                  <option value={undefined}>Please select an option</option>
                  <option value="No">No</option>
                  <option value="Yes - it's 0-6 months old">
                    Yes - it's 0-6 months old
                  </option>
                  <option value="Yes - it's 12-24 month old">
                    Yes - it's 12-24 month old
                  </option>
                  <option value="Yes - it's 2-4 years old">
                    Yes - it's 2-4 years old
                  </option>
                  <option value="Yes - it's 4-10 years old">
                    Yes - it's 4-10 years old
                  </option>
                  <option value="Yes - it's 10+ years old">
                    Yes - it's 10+ years old
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group 
              as={Row} 
              controlId="formHorizontalEmail"
            >
              <Form.Label 
                column 
                sm={4}
              >
                <h6 className="text-left">If so, name of the business?</h6>
              </Form.Label>
              <Col sm={8}>
                <Form.Control 
                  type="text" 
                  placeholder="" 
                  value={controllers.nameOfTheBusiness as string} 
                  onChange={actions.setNameOfTheBusiness} 
                />
              </Col>
            </Form.Group>
          </div>
        </Container>
      </Card.Body>
    </div>
  );
};

export default RefferalInfo;
