import React from "react";
import Page from "../components/Page";
import { state } from "../global/Global";
import "../layout/dashboard.css";
import { Card, Row, Col, Table, Badge, Image } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';

import chat from "../assets/chat-mini.jpg";

const pageInfo = state.pages.find(page =>page.name === "Dashboard");

const data = {
    labels: ["Jan","FEB","MARS","APR","MAY","JUN","JUI","AUG","SEP","OCT","NOV","DEC"],
    datasets: [
        {
            label: "Clients",
            data: [15,18,12,10,18,20,22,17,16,18,14,10],
            backgroundColor: "rgba(0,0,0,0.4)"
        },
        {
            label: "Refferals",
            type: "line",
            data: [70,60,40,70,80,100,110,60,70,70,80,90],
            backgroundColor: "rgba(0,123,255,0.4)",
            borderColor: "#007bff"
        },
    ]
}

const Dashboard = () =>(
    <div className="dashboard pr-4">
        <h3 className="pt-4 text-left pl-3">Dashboard</h3>
        <Card className="mt-4 card">
            <Card.Header>
                <h6>STATISTICS</h6>
            </Card.Header>
            <Card.Body>
            <Bar
                data={data}
                height={400}
                options={{ 
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                max: 120
                            }
                        }]
                    },
                    legend: {
                        display: true,
                        position: "right"
                    }
                }}
            />
            </Card.Body>
        </Card>
        <Row>
            <Col md={6}>
                <Card className="mt-4">
                    <Card.Header>
                        <h6>RECENT ACTIVITIES</h6>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={2}>
                                <Image roundedCircle src={chat} />
                            </Col>
                            <Col sm={10}>
                                <Row>
                                    <Col sm={8}>
                                        <h6 className="text-primary">Ray Cathey</h6>
                                        <h6 className="text-dark">Note From Pocessor</h6>
                                        <h6 className="text-muted">Additional docs uploaded to lenders and we are processing</h6>
                                    </Col>
                                    <Col sm={4}>
                                        <h6 className="text-muted text-right">2020/10/9</h6>
                                    </Col>
                                </Row>
                                <hr />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={2}>
                                <Image roundedCircle src={chat} />
                            </Col>
                            <Col sm={10}>
                                <Row>
                                    <Col sm={8}>
                                        <h6 className="text-primary">Shane Finlay</h6>
                                        <h6 className="text-dark">Note From Pocessor</h6>
                                        <h6 className="text-muted">Thanks I have followed up set for end of the week</h6>
                                    </Col>
                                    <Col sm={4}>
                                        <h6 className="text-muted text-right">2020/10/10</h6>
                                    </Col>
                                </Row>
                                <hr />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={2}>
                                <Image roundedCircle src={chat} />
                            </Col>
                            <Col sm={10}>
                                <Row>
                                    <Col sm={8}>
                                        <h6 className="text-primary">Ricardo Nivaro</h6>
                                        <h6 className="text-dark">Note From Pocessor</h6>
                                        <h6 className="text-muted">Ricardo mentioned he does not wish to move forward :( closing this one for now, he did mention once he has 2020 field he will come back to us for options.</h6>
                                    </Col>
                                    <Col sm={4}>
                                        <h6 className="text-muted text-right">2020/10/9</h6>
                                    </Col>
                                </Row>
                                <hr />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="mt-4 mb-3">
                    <Card.Header>
                        <h6>COMMISION WE OWE YOU</h6>
                    </Card.Header>
                    <Card.Body>
                        <h2 className="text-right">$651.38</h2>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mt-3 recent-clients">
                <Card>
                    <Card.Header>
                        <h6>RECENT CLIENTS</h6>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Marcia Jones</td>
                                    <td>
                                        <Badge variant="success">QUOTED - WAITING ON CONTRACT</Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Brain Hurling</td>
                                    <td>
                                        <Badge variant="secondary">DOESN'T QUALIFY</Badge>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h6>COMMISION PAID TO YOU</h6>
                    </Card.Header>
                    <Card.Body>
                        <h1>This is the paid commision section</h1>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
)

const RootComponent:React.FC<any> = ({ history }) =>{
    return (
        <Page section={<Dashboard />} activeTab={pageInfo?.name} linksData={pageInfo?.path} history={history} />
    )
}

export default RootComponent;
