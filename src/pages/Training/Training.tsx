import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Row, Col } from "react-bootstrap";
import "../../layout/Training.css";
import { videos, VideoProps } from "../../global/Training";

const pageInfo = state.pages.find((page) => page.name === "Training");

const Training: React.FC<{}> = () => (
  <div className="training">
    <h3 className="pt-4 text-left pl-3">Training and Resources</h3>
    <h4 className="pt-4 text-left pl-3 text-primary">Click here for {"Q&A"}</h4>
    <Row className="mt-4">
      {videos.map((video: VideoProps) => (
        <Col md={6} sm={12} className="mb-4" key={video.id as number}>
          <iframe
            className="video"
            src={video.link as string}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="training-video"
          ></iframe>
        </Col>
      ))}
    </Row>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <Page
      section={<Training />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
