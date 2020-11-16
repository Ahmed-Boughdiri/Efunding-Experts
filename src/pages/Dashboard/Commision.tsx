import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { commisionsData } from "../../global/Dashboard";

const Commision: React.FC<{}> = () => {
  return (
    <Card className="commision">
      <Card.Header>
        <h6>COMMISION PAID TO YOU</h6>
      </Card.Header>
      <Card.Body>
        <Line
          data={commisionsData}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                  },
                },
              ],
            },
            legend: {
              display: window.screen.width > 700 ? true : false,
            },
          }}
        />
        <Card.Title className="ml-2">
          <p className="font-weight-light mt-3 total-title">Total:</p>
          <h5 className="commision-paid total-text">$2740.55</h5>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Commision;
