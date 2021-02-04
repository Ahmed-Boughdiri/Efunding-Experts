import React,{ useEffect } from "react";
import { Card, Table, Badge } from "react-bootstrap";
import getQuoteStatus from "../../util/getQuoteStatus";
import { ClientProps } from "../../@types/others/client";

interface RecentClientsProps {
  handleRecentClients: () => Promise<void>,
  recentClients: ClientProps[]
}

const RecentClients: React.FC<RecentClientsProps> = ({ handleRecentClients, recentClients }) => {
  useEffect(() =>{
    handleRecentClients()
  },[])
  return (
    <Card>
      <Card.Header>
        <h6>RECENT CLIENTS</h6>
      </Card.Header>
      <Card.Body>
        {
          !recentClients.length && <h6>There is No Recent Clients Recorded Yet</h6>
        }
        {
          (recentClients.length !== 0) && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentClients && recentClients.map(client => (
                  <tr>
                    <td>{`${client.FirstName} ${client.LastName}`}</td>
                    <td>
                      <Badge variant={getQuoteStatus(client.Status)?.status}>
                        {getQuoteStatus(client.Status)?.message}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        }
      </Card.Body>
    </Card>
  );
};

export default RecentClients;
