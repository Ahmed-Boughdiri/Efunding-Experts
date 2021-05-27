import React,{ useEffect } from "react";
import { 
  Card, 
  Row, 
  Col, 
  Image 
} from "react-bootstrap";
import { ClientProps } from "../../@types/others/client";

interface RecentActivitiesProps {
  handleRecentActivities: () => Promise<void>,
  recentActivities: ClientProps[]
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ 
  handleRecentActivities, 
  recentActivities 
}) => {
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
          recentActivities.length ? 
          recentActivities.map((
            recent: ClientProps, 
            index: Number
          ) => (
            <Row>
              <Col sm={2}>
                <Image 
                  roundedCircle 
                  src={"https://i.imgur.com/5nPYbgv.jpg"} 
                  height={55}
                  width={55}
                />
              </Col>
              <Col sm={10}>
                <Row>
                  <Col sm={8}>
                    {
                      (recent?.FirstName && recent?.LastName) && (
                        <h6 className="text-primary">
                          {`${recent.FirstName} ${recent.LastName}`}
                        </h6>
                      )
                    }
                    {
                      (recent?.Notes?.length) ? (
                        <>
                          {
                            (recent?.Notes[recent?.Notes?.length - 1].sender) && (
                              <h6 className="text-dark">
                                Note From 
                                {
                                  (recent?.Notes[recent?.Notes?.length - 1].sender === "admin") ? 
                                  "Admin" : "You"
                                }
                              </h6>
                            )
                          }
                        </>
                      ) : (<></>)
                    }
                    {
                      recent?.Notes?.length ? (
                        <>
                          {
                            (recent?.Notes[recent?.Notes?.length - 1].contentValue) && (
                              <h6 className="text-muted">
                                {
                                  recent?.Notes[recent?.Notes?.length - 1].contentValue
                                }
                              </h6>
                            ) 
                          }
                        </>
                      ) : (
                        <p className="unavailable-note">
                          No Note Sent
                        </p>
                      )
                    }
                  </Col>
                  <Col sm={4}>
                    {
                      recent?.DateCreated ? (
                        <h6 className="text-muted text-right">
                          {recent.DateCreated}
                        </h6>
                      ) : (<></>)
                    }
                  </Col>
                </Row>
                {
                  (index !== recentActivities?.length - 1) ? <hr /> : <></>
                }
              </Col>
            </Row>
          )) : (
            <h6>
              There is No Recent Activities Detected Yet
            </h6>
          )
        }
      </Card.Body>
    </Card>
  );
};

export default RecentActivities;
