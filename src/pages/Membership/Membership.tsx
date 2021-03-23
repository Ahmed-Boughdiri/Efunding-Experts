import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import "../../layout/Membership.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { faSortDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { courses } from "../../global/Membership";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

const pageInfo = state.pages.find(page => page.name === "Membership");

interface MembershipProps {
    history: History,
    storeCourse: any
}

const Memebership:React.FC<MembershipProps> = ({ 
    storeCourse, 
    history 
}) =>{
    const handlePreview = (e: any, data:any) =>{
        e.preventDefault();
        storeCourse(data);
        history.push("/membership/training/preview")
    }
    return (
        <div className="membership-training mt-5">
            {
                courses.map((course, index) =>(
                    <Accordion className="mb-3">
                        <Card>
                            <Card.Header 
                                className="training-accordion-header" 
                                key={index}
                            >
                                <Accordion.Toggle 
                                    as={Button} 
                                    variant="link" 
                                    eventKey="0" 
                                    className="training-accordion-toggle"
                                >
                                    {course.title}
                                </Accordion.Toggle>
                                <FontAwesomeIcon 
                                    icon={faSortDown} 
                                    className="training-accordion-header" 
                                />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {
                                        course.courses.map((c:any,i:any) =>(
                                            <div 
                                                className="training-accordion-link-container mb-2" 
                                                key={i}
                                            >
                                                <a 
                                                    href="#!" 
                                                    onClick={(event: any) =>handlePreview(event,c)} 
                                                    className="training-video-link"
                                                >
                                                    {c.name}
                                                </a>
                                                <FontAwesomeIcon 
                                                    icon={faCaretRight} 
                                                    size="lg" 
                                                    className="training-accordion-arrow" 
                                                />
                                            </div>
                                        ))
                                    }
                                    
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))
            }
        </div>
    )
}

interface RootComponentProps extends RouteComponentProps {
    courseData: any,
    storeCourse: any
}

const RootComponent:React.FC<RootComponentProps> = ({ history, courseData, storeCourse }) =>{
    return (
        <Page 
            section={<Memebership storeCourse={storeCourse} history={history} />}
            activeTab={pageInfo?.name}
            linksData={pageInfo?.path}
            history={history}
        />
    )
}

function mapStateToProps(state:any) {
    return {
        courseData: state.courseReducer,
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        storeCourse: (data: any) => dispatch({ type: "STORE_COURSE", payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
