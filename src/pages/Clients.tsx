import React from "react";
import Page from "../components/Page";
import { state } from "../global/Global";
import { Table, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../layout/Clients.css";
import { clients } from "../global/Clients";
import getClientStatus from "../util/getClientStatus";

const pageInfo = state.pages.find((page) => page.name === "Clients");

const Clients: React.FC<any> = () => (
  <div className="clients">
    <h3 className="pt-4 text-left pl-3">Clients</h3>
    <Table striped bordered hover className="mt-4 table-container">
            <thead>
                <tr>
                  <th>Name</th>
                  <th className="phone-section">Phone</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th className="more-info-section">More Info</th>
                  <th className="date-created-section">Date Created</th>
                  <th className="approximate-funding-section">Approximate Funding Quote</th>
                  <th>Apps Processing</th>
                  <th>Apps Approved</th>
                  <th className="funding-amount-section">Funding Amount So Far (includes pre-approvals!)</th>
                  <th className="total-commision-section">Total Commisions (billed to client)</th>
                  <th className="commision-collected-section">Commission Collected (client paid us)</th>
                </tr>
            </thead>
            <tbody>
              {
                clients.map(client =>(
                  <tr>
                    <td>{client.name}</td>
                    <td>{client.phone ? client.phone : ""}</td>
                    <td>{client.email}</td>
                    <td><Badge variant={getClientStatus(client.status)?.status}>{getClientStatus(client.status)?.message.toUpperCase()}</Badge></td>
                    <td><Link to="/edit"><Button variant="outline-primary">More Info</Button></Link></td>
                    <td>{client.dateCreated.getUTCFullYear() + "-" + client.dateCreated.getMonth() + "-" + client.dateCreated.getDay()}</td>
                    <td className="text-left">{client.approximateFundingQuote}</td>
                    <td className="text-left">{client.appsProcessing ? client.appsProcessing : ""}</td>
                    <td className="text-left">{client.appsApproved ? client.appsApproved : ""}</td>
                    <td className="text-left">{client.fundingAmountSoFar ? client.fundingAmountSoFar : ""}</td>
                    <td className="text-left">{client.totalCommision ? client.totalCommision : ""}</td>
                    <td className="text-left">{client.commisionCollected ? client.commisionCollected : ""}</td>
                  </tr>
                ))
              }
            </tbody>
        </Table>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <Page
      section={<Clients />}
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

export default RootComponent;
