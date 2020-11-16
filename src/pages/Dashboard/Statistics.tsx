import React from "react";
import { Card } from "react-bootstrap";
import { statisticsData } from "../../global/Dashboard";
import { Bar } from 'react-chartjs-2';
import "../../layout/dashboard.css";

const Statistics:React.FC<{}> = () =>{
    return (
        <Card className="mt-4 card">
            <Card.Header>
                <h6>STATISTICS</h6>
            </Card.Header>
            <Card.Body>
            <Bar
                data={statisticsData}
                height={window.screen.width > 770 ? 400 : 200}
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
                        display: window.screen.width > 770 ? true : false,
                        position: "right"
                    }
                }}
            />
            </Card.Body>
        </Card>
    )
}

export default Statistics
