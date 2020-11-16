import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";

import like from "../../assets/like-mini.jpg";
import chat from "../../assets/chat-mini.jpg";

const EditRecentActivities: React.FC<{}> = () => {
  return (
    <Card>
      <Card.Header as="h5">RECENT ACTIVITIES</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6} md={1}>
            <Image src={chat} roundedCircle />
          </Col>
          <Col md={11}>
            <Row className="note">
              <Col md={6}>
                <h5>Notes From Broker</h5>
                <p className="text-muted" style={{ marginTop: -7 }}>
                  Thank you
                </p>
              </Col>
              <Col md={6}>
                <strong className="text-muted float-right">2020/11/10</strong>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={6} md={1}>
            <Image src={like} roundedCircle />
          </Col>
          <Col md={11}>
            <Row className="note">
              <Col md={6}>
                <h5>Update</h5>
                <p className="text-muted" style={{ marginTop: -7 }}>
                  We can got money ...3500... Notes. If they have{" "}
                </p>
              </Col>
              <Col md={6}>
                <strong className="text-muted float-right">2020/11/10</strong>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EditRecentActivities;
