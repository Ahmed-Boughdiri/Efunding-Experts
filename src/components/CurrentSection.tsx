import React from "react";
import "../layout/CurrentSection.css";
import { Breadcrumb } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const CurrentSection:React.FC<any> = ({ section,linksData }) =>{
    return (
        <div className="current-section">
            <Breadcrumb className="border-0 bg-light ml-3">
                {
                    linksData.map((link:any) =><Breadcrumb.Item><Link to={link.link}>{link.name}</Link></Breadcrumb.Item>)
                }
            </Breadcrumb>
            <div className="wrapper">
                {
                    section
                }
            </div>
        </div>
    )
}

export default CurrentSection;
