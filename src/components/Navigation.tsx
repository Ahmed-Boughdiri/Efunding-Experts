import React from "react";
import "../layout/Navigation.css";
import { ListGroup, Row, Col } from "react-bootstrap";
import { faHome, faUsers, faUser, faFileAlt, faPencilAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation:React.FC<any> = ({ activeTab }) =>{
    const tabs = [
        {
            name: "Dashboard",
            icon: faHome,
            placeholder: "Dashboard",
            link: "/dashboard"
        },
        {
            name: "Quotes",
            icon: faUsers,
            placeholder: "Quotes (Pre-Contract)",
            link: "/quotes"
        },
        {
            name: "Clients",
            icon: faUser,
            placeholder: "Clients (Contract in)",
            link: "/clients"
        },
        {
            name: "Refferal",
            icon: faFileAlt,
            placeholder: "Submit New Refferal",
            link: "/refferal"
        },
        {
            name: "Training",
            icon: faPlay,
            placeholder: "Training and Resources",
            link: "/training"
        },
        {
            name: "Contracts",
            icon: faPencilAlt,
            placeholder: "Contracts, Apps, and Forms",
            link: "/contracts"
        },
    ]
    return (
        <div className="navigation">
            <div className="user-info">
                <p className="font-weight-bold username">Jose Baeza</p>
                <p className="user-email">jb@fundingexperts.com</p>
            </div>
            <div className="navigation-title">
                <p>Navigation</p>
            </div>
            <ListGroup className="rounded-0 mt-4">
                {
                    tabs.map(tab =>(
                        <Link to={tab.link} className="remove-underline">
                            <ListGroup.Item className={`bg-transparent text-left border-0 navigation-link ${tab.name === activeTab && "navigation-link-active"}`}>
                                <Row>
                                    <Col sm={2}>
                                        <FontAwesomeIcon icon={tab.icon} size={"lg"} color={"#fff"} />
                                    </Col>
                                    <Col sm={10}>
                                        <p className="text-left font-weight-normal text-light">{tab.placeholder}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Link>
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default Navigation;
