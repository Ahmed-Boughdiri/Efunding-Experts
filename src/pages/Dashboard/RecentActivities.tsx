import React,{ useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { ClientProps } from "../../@types/others/client";

import chat from "../../assets/chat-mini.jpg";

interface RecentActivitiesProps {
  handleRecentActivities: () => Promise<void>,
  recentActivities: ClientProps[]
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ handleRecentActivities, recentActivities }) => {
  useEffect(() =>{
    handleRecentActivities()
  },[])
  return (
    <Card className="mt-4">
      <Card.Header>
        <h6>RECENT ACTIVITIES</h6>
      </Card.Header>
      <Card.Body>
        {
          recentActivities && recentActivities.map((recent: ClientProps, index: Number) => (
            <Row>
              <Col sm={2}>
                <Image roundedCircle src={chat} />
              </Col>
              <Col sm={10}>
                <Row>
                  <Col sm={8}>
                    <h6 className="text-primary">{`${recent.FirstName} ${recent.LastName}`}</h6>
                    <h6 className="text-dark">Note From Pocessor</h6>
                    <h6 className="text-muted">{recent.Notes}</h6>
                  </Col>
                  <Col sm={4}>
                    <h6 className="text-muted text-right">
                      {recent.DateCreated}
                    </h6>
                  </Col>
                </Row>
                {
                  (index !== recentActivities.length - 1) && <hr />
                }
              </Col>
            </Row>
          ))
        }
        {
          !recentActivities.length && (
            <h6>There is No Recent Activities Detected Yet</h6>
          )
        }
      </Card.Body>
    </Card>
  );
};

export default RecentActivities;
