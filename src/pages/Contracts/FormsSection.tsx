import React,{ useState } from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Alert } from "react-bootstrap";
import "../../layout/Contracts.css";
import { ContractsProps } from "../../@types/others/contract";

const FormsSection: React.FC<{ forms:ContractsProps[] }> = ({ forms }) => {
  const [showUnavailableDownloadLink, setShowUnavailableDownloadLink] = useState(false);
  const [unavailableDownloadLinkMsg, setUnavailableDownloadLinkMsg] = useState("");
  const handleDownloadPDF = async(e:React.MouseEvent<HTMLAnchorElement> ,contract: String) =>{
    e.preventDefault()
    if(contract) {
      setShowUnavailableDownloadLink(false)
      setUnavailableDownloadLinkMsg("")
      setShowUnavailableOnlineVersion(false)
      setUnavailableOnlineVersionMsg("")
      window.open(`https://efundingexpertapi.herokuapp.com/report/download/${contract}`)
    } else {
      setUnavailableDownloadLinkMsg("Download Link Unavailable")
      setShowUnavailableDownloadLink(true)
    }
  }
  const [showUnavailableOnlineVersion, setShowUnavailableOnlineVersion] = useState(false)
  const [unavailableOnlineVersionMsg, setUnavailableOnlineVersionMsg] = useState("")
  const handleOnlineVersion = async(
    e:React.MouseEvent<HTMLAnchorElement>,
    previewLink: String
  ) =>{
    e.preventDefault()
    if(previewLink) {
      setShowUnavailableOnlineVersion(false)
      setUnavailableOnlineVersionMsg("")
      setShowUnavailableDownloadLink(false)
      setUnavailableDownloadLinkMsg("")
      if(previewLink.includes("https://") || previewLink.includes("http://"))
        window.open(previewLink as string)
      else 
        window.open("https://" + previewLink as string)
    } else {
      setUnavailableDownloadLinkMsg("Online Version Link Unavailable")
      setShowUnavailableDownloadLink(true)
    }
  }
  return (
    <div>
      {
        showUnavailableDownloadLink && <Alert variant="danger">
                                        { unavailableDownloadLinkMsg }   
                                       </Alert>
      }
      {
        showUnavailableOnlineVersion && <Alert variant="danger">
                                        { unavailableOnlineVersionMsg }   
                                       </Alert>
      }
      {
        forms && forms.map(form => (
          <Row 
            style={{ 
              marginBottom: 15 
            }}
          >
            <Col md={4}>
              <h6 className="mt-1">{form.title}</h6>
            </Col>
            <Col md={5}>
              <a
                href={"#!"}
                target="_blank"
                rel="noreferrer"
                className="remove-underline"
                onClick={
                  (e:React.MouseEvent<HTMLAnchorElement>) => 
                    handleOnlineVersion(e, form.previewLink)
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
                        handleDownloadPDF(e, form.dirname || "")
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
                        handleDownloadPDF(e, form.dirname || "")
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

export default FormsSection;
