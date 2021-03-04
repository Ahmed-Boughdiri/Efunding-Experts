import React,{ useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../layout/Contracts.css";
import { ContractsProps } from "../../@types/others/contract";

const ContrcatsSection: React.FC<{ contracts:ContractsProps[] }> = ({ contracts }) => {
  const [showUnavailableOnlineVersion, setShowUnavailableOnlineVersion] = useState(false);
  const [unavailableOnlineVersionMsg, setUnavailableOnlineVersionMsg] = useState("");
  const handleOnlineVersion = async(
    e:React.MouseEvent<HTMLAnchorElement>, 
    previewLink: String
  ) =>{
    e.preventDefault()
    if(previewLink) {
      setUnavailableDownloadLinkMsg("")
      setShowUnavailableDownloadLink(false)
      setUnavailableOnlineVersionMsg("");
      setShowUnavailableOnlineVersion(false)
      if(previewLink.includes("http://") || previewLink.includes("https://"))
        window.open(previewLink as string)
      else
        window.open("https://" + previewLink)
    } else {
      setUnavailableOnlineVersionMsg("Online Version Link Unavailable");
      setShowUnavailableOnlineVersion(true)
    }
  }
  const [showUnavailableDownloadLink, setShowUnavailableDownloadLink] = useState(false);
  const [unavailableDownloadLinkMsg, setUnavailableDownloadLinkMsg] = useState("")
  const handleDownloadPDF = (
    e:React.MouseEvent<HTMLAnchorElement>, 
    contract: String
  ) =>{
    e.preventDefault()
    if(contract) {
      setUnavailableOnlineVersionMsg("");
      setShowUnavailableOnlineVersion(false)
      setUnavailableDownloadLinkMsg("")
      setShowUnavailableDownloadLink(false)
      window.open(`http://localhost:8000/report/download/${contract}`)
    } else {
      setUnavailableDownloadLinkMsg("Download Link Unavailable")
      setShowUnavailableDownloadLink(true)
    }
  }
  return (
    <div>
      {
        showUnavailableOnlineVersion && <Alert variant="danger">
                                          { unavailableOnlineVersionMsg }
                                        </Alert>
      }
      {
        showUnavailableDownloadLink && <Alert variant="danger">
                                          { unavailableDownloadLinkMsg }
                                        </Alert>
      }
      {
        contracts && contracts.map(contract => (
          <div>
            <Row style={{ marginBottom: 15 }}>
              <Col md={4}>
                <h6 className="mt-1">
                  {contract.title}
                </h6>
              </Col>
              <Col md={5}>
                <a
                  href={"#!"}
                  target="_blank"
                  rel="noreferrer"
                  className="remove-underline"
                  onClick={
                    (e:React.MouseEvent<HTMLAnchorElement>) => 
                      handleOnlineVersion(e, contract.previewLink)
                  }
                >
                  <h6 className="text-primary mt-1">
                    Click here for an online version (preffered)
                  </h6>
                </a>
              </Col>
              <Col md={3}>
                <Row>
                  <Col md={7} sm={3}>
                    <a
                      href={"#!"}
                      className="remove-underline"
                      onClick={
                        (e:React.MouseEvent<HTMLAnchorElement>) =>
                          handleDownloadPDF(e, contract.contract)
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
                          handleDownloadPDF(e, contract.contract)
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
            <hr className="breakpoint" />
          </div>
        ))
      }
    </div>
  );
};

export default ContrcatsSection;
