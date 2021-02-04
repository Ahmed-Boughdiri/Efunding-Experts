import React from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "../../layout/Contracts.css";
import { ContractsProps } from "../../@types/others/contract";

const FormsSection: React.FC<{ forms:ContractsProps[] }> = ({ forms }) => {
  return (
    <div>
      {
        forms && forms.map(form => (
          <Row style={{ marginBottom: 15 }}>
            <Col md={4}>
              <h6 className="mt-1">{form.title}</h6>
            </Col>
            <Col md={5}>
              <a
                href={form.previewLink as string}
                target="_blank"
                rel="noreferrer"
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
                    href={"#!"}
                    className="remove-underline"
                  >
                    <h6 className="text-dark mt-1">Download PDF</h6>
                  </a>
                </Col>
                <Col className="pdf-icon">
                  <a
                    href={"#!"}
                    className="remove-underline"
                  >
                    <FontAwesomeIcon icon={faFilePdf} size={"lg"} color="#000" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        ))
      }
    </div>
  );
};

export default FormsSection;
