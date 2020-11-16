import React, { ReactNode } from "react";
import "../layout/CurrentSection.css";
import { Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { PathProps } from "../global/Global";

const CurrentSection: React.FC<{
  section: ReactNode;
  linksData: PathProps[];
}> = ({ section, linksData }) => {
  return (
    <div className="current-section">
      <Breadcrumb className="border-0 bg-light ml-3">
        {linksData.map((link: any) => (
          <Breadcrumb.Item>
            <Link to={link.link}>{link.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="wrapper">{section}</div>
    </div>
  );
};

export default CurrentSection;
