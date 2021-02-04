import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { connect } from "react-redux";
import "../../layout/Preview.css";
import { Container } from "react-bootstrap";

const pageInfo = state.pages.find(page => page.name === "Membership");

interface PreviewProps {
    courseData: any
}

const Preview:React.FC<PreviewProps> = ({ courseData }) =>{
    return (
        <>
            {
                (courseData.type === "Download") && (
                    <Container className="mt-4">
                        <h2 className="mb-4">{courseData.title}</h2>
                        <div className="mt-5">
                            {
                                courseData.lessons.map((l:any, i:any) =>(
                                    <div key={i} style={{ width: "95%" }}>
                                        <h4 className="mb-3">Lesson Title: {l.title}</h4>
                                        <a href={l.downloadedLink} rel="noreferrer"  target="_blank" className="lesson-download-link btn">Download</a>
                                        <hr className="mb-5" />
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                )        
            }
            {
                (!courseData.type) && (
                    <Container className="mt-4">
                        <h2 className="mb-4">{courseData.title}</h2>
                        {
                            courseData.content.map((c:any, i:any) => <p className="course-parag" key={i}>{c}</p>)
                        }
                        <div className="mt-5 course-video-container pt-5">
                            {
                                courseData.videos.map((v:any, i:any) => (
                                    <div key={i}>
                                        <iframe width="560" title="course-video" height="315" src={`https://www.youtube.com/embed/${v}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                        <br />
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                )
            }
        </>
        
    )
}

const RootComponent:React.FC<any> = ({ history, courseData }) =>{
    return (
        <Page 
            section={<Preview courseData={courseData} />}
            activeTab={pageInfo?.name} 
            linksData={pageInfo?.path} 
            history={history} 
        />
    )
}

function mapStateToProps(state:any) {
    return {
        courseData: state.courseReducer
    }
}

export default connect(mapStateToProps)(RootComponent);
