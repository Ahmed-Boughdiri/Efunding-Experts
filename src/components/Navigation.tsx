import React, { useEffect } from "react";
import "../layout/Navigation.css";
import { ListGroup, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { state, TabProps } from "../global/Global";

const Navigation: React.FC<{
  activeTab: String | undefined;
  openNav: Boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  email: String,
  userName: String
}> = ({ activeTab, openNav, setOpenNav, email, userName }) => {
  const tabs = state.tabs;
  const handlePC = () => {
    if (window.screen.width > 770) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  };
  useEffect(() => {
    handlePC();
  }, []);
  return (
    <div>
      {openNav && (
        <div className="navigation">
          <div className="user-info">
            <p className="font-weight-bold username">{userName}</p>
            <p className="user-email">{email}</p>
          </div>
          <div className="navigation-title">
            <p>Navigation</p>
          </div>
          <ListGroup className="rounded-0 mt-4">
            {tabs.map((tab: TabProps) => (
              <Link to={tab.link as string} className="remove-underline">
                <ListGroup.Item
                  className={`bg-transparent text-left border-0 navigation-link ${
                    tab.name === activeTab && "navigation-link-active"
                  }`}
                >
                  <Row>
                    <Col sm={2}>
                      <FontAwesomeIcon
                        icon={tab.icon}
                        size={"lg"}
                        color={"#fff"}
                      />
                    </Col>
                    <Col sm={10}>
                      <p className="text-left font-weight-normal text-light">
                        {tab.placeholder}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default Navigation;
