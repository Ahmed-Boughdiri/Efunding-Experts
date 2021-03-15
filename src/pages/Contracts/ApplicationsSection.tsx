import React,{ useState } from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Alert } from "react-bootstrap";
import "../../layout/Contracts.css";
import { ContractsProps } from "../../@types/others/contract";

const ApplicationsSection: React.FC<{ applications:ContractsProps[] }> = ({ applications }) => {
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [unavailableMsg, setUnavailableMsg] = useState("");
  const handleDownloadPDF = async(e:React.MouseEvent<HTMLAnchorElement>, fileName:String) =>{
    if(fileName){
      setShowUnavailable(false)
      setUnavailableMsg("")
      setShowUnavailableOnlineVersion(false)
      setUnavailableOnlineVersionMsg("")
      window.open(`http://efundingexperts.herokuapp.com/download/${fileName}`)
    }
    else {
      setUnavailableMsg("Download Link Unavailable")
      setShowUnavailable(true)
    }
  }
  const [showUnavailableOnlineVersion, setShowUnavailableOnlineVersion] = useState(false);
  const [unavailableOnlineVersionMsg, setUnavailableOnlineVersionMsg] = useState("");
  const handleOnlineVersion = async(e:React.MouseEvent<HTMLAnchorElement>,previewLink: String) =>{
    if(previewLink) {
      setShowUnavailableOnlineVersion(false)
      setUnavailableOnlineVersionMsg("")
      setShowUnavailable(false)
      setUnavailableMsg("")
      if(previewLink.includes("http://") || previewLink.includes("https://")) 
        window.open(previewLink as string)
      else window.open("https://" + previewLink as string)
    } else {
      setUnavailableOnlineVersionMsg("Online Version Link Unavailable")
      setShowUnavailableOnlineVersion(true)
    }
  }
  return (
    <div>
      {
        showUnavailable && <Alert variant="danger">
                              { unavailableMsg }
                            </Alert>
      }
      {
        showUnavailableOnlineVersion && <Alert variant="danger">
                                          { unavailableOnlineVersionMsg }
                                        </Alert>
      }
      {
        applications && applications.map(app => (
          <Row style={{ marginBottom: 15 }}>
            <Col md={4}>
              <h6 className="mt-1">{app.title}</h6>
            </Col>
            <Col md={5}>
              <a
                href={"#!"}
                rel="noreferrer"
                target="_blank"
                className="remove-underline"
                onClick={
                  (e:React.MouseEvent<HTMLAnchorElement>) =>
                    handleOnlineVersion(e, app.previewLink)
                }
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
                    onClick={
                      (e:React.MouseEvent<HTMLAnchorElement>) =>
                        handleDownloadPDF(e, app.contract)
                    }
                  >
                    <h6 className="text-dark mt-1">Download PDF</h6>
                  </a>
                </Col>
                <Col className="pdf-icon">
                  <a
                    href={"#!"}
                    className="remove-underline"
                    onClick={
                      (e:React.MouseEvent<HTMLAnchorElement>) =>
                        handleDownloadPDF(e, app.contract)
                    }
                  >
                    <FontAwesomeIcon 
                      icon={faFilePdf} 
                      size={"lg"} 
                      color="#000" 
                    />
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

export default ApplicationsSection;
