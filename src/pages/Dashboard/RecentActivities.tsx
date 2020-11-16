import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { recentActivities, RecentActivitiesProps } from "../../global/Dashboard";

import chat from "../../assets/chat-mini.jpg";

const RecentActivities: React.FC<{}> = () => {
  return (
    <Card className="mt-4">
      <Card.Header>
        <h6>RECENT ACTIVITIES</h6>
      </Card.Header>
      <Card.Body>
        {recentActivities.map((recent: RecentActivitiesProps) => (
          <Row>
            <Col sm={2}>
              <Image roundedCircle src={chat} />
            </Col>
            <Col sm={10}>
              <Row>
                <Col sm={8}>
                  <h6 className="text-primary">{recent.name}</h6>
                  <h6 className="text-dark">Note From {recent.pocessor}</h6>
                  <h6 className="text-muted">{recent.notes}</h6>
                </Col>
                <Col sm={4}>
                  <h6 className="text-muted text-right">
                    {recent.date.getFullYear() +
                      "/" +
                      recent.date.getMonth() +
                      "/" +
                      recent.date.getDay()}
                  </h6>
                </Col>
              </Row>
              <hr />
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
};

export default RecentActivities;
