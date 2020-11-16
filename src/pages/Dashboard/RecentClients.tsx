import React from "react";
import { Card, Table, Badge } from "react-bootstrap";
import { recentClients, RecentClients as RC } from "../../global/Dashboard";
import getQuoteStatus from "../../util/getQuoteStatus";

const RecentClients: React.FC<{}> = () => {
  return (
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
            {recentClients.map((client: RC) => (
              <tr>
                <td>{client.name}</td>
                <td>
                  <Badge variant={getQuoteStatus(client.status)?.status}>
                    {getQuoteStatus(client.status)?.message}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentClients;
