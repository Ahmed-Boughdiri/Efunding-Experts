import React from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { forms, FormProps } from "../../global/Contracts";
import "../../layout/Contracts.css";

const FormsSection: React.FC<{}> = () => {
  return (
    <div>
      {forms.map((form: FormProps) => (
        <Row style={{ marginBottom: 15 }}>
          <Col md={4}>
            <h6 className="mt-1">{form.name}</h6>
          </Col>
          <Col md={5}>
            <a
              href={form.onlineVersionLink as string}
              className="remove-underline"
            >
              <h6 className="text-primary mt-1">
                Click here for an online version (preffered)
              </h6>
            </a>
          </Col>
          <Col md={3}>
            <Row>
              <Col sm={7}>
                <a
                  href={form.downloadLink as string}
                  className="remove-underline"
                >
                  <h6 className="text-dark mt-1">Download PDF</h6>
                </a>
              </Col>
              <Col className="pdf-icon">
                <a
                  href={form.downloadLink as string}
                  className="remove-underline"
                >
                  <FontAwesomeIcon icon={faFilePdf} size={"lg"} color="#000" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FormsSection;
