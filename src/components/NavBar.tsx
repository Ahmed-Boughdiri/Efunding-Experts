import React, { useEffect } from "react";
import "../layout/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import logo from "../assets/logo2.png";

const NavBar: React.FC<{ goBack: any; toggleNav: () => void }> = ({
  goBack,
  toggleNav,
}) => {
  useEffect(() => {
    const toggler = document.querySelector("button.navbar-toggler.collapsed");
    toggler?.addEventListener("click", () => toggleNav());
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar shadow-sm">
      <Navbar.Brand>
        <Row className="brand-container">
          <Col md={2} sm={0} className="goback">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />
          </Col>
          <Col md={10} sm={12}>
            <Link to={"/dashboard"} className="brand-link">
              <Image src={logo} height={33} width={105} className="the-logo" />
            </Link>
          </Col>
        </Row>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features" className="new-refferal-container">
            <Row>
              <Col sm={2}>
                <FontAwesomeIcon icon={faPlus} />
              </Col>
              <Col sm={10} className="new-refferal">
                <Link to="/refferal" className="remove-underline">
                  New Refferal
                </Link>
              </Col>
            </Row>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            href="#memes"
            className="nav-bar-email-container"
          >
            <p className="nav-bar-email">jb@fundingexperts.com</p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
