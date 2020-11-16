import React from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Table } from "react-bootstrap";
import "../../layout/Clients.css";
import { clients, ClientProps } from "../../global/Clients";
import Client from "./Client";

const pageInfo = state.pages.find((page) => page.name === "Clients");

const Clients: React.FC<{}> = () => (
  <div className="clients">
    <h3 className="pt-4 text-left pl-3">Clients</h3>
    <Table striped bordered hover className="mt-4 table-container">
      <thead>
        <tr>
          <th className="name-section">Name</th>
          <th className="phone-section">Phone</th>
          <th>Email</th>
          <th>Status</th>
          <th className="more-info-section">More Info</th>
          <th className="date-created-section">Date Created</th>
          <th className="approximate-funding-section">
            Approximate Funding Quote
          </th>
          <th>Apps Processing</th>
          <th>Apps Approved</th>
          <th className="funding-amount-section">
            Funding Amount So Far (includes pre-approvals!)
          </th>
          <th className="total-commision-section">
            Total Commisions (billed to client)
          </th>
          <th className="commision-collected-section">
            Commission Collected (client paid us)
          </th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client:ClientProps) => <Client name={client.name} email={client.email} phone={client.phone} status={client.status} dateCreated={client.dateCreated} approximateFundingQuote={client.approximateFundingQuote} appsProcessing={client.appsProcessing} appsApproved={client.appsApproved} fundingAmountSoFar={client.fundingAmountSoFar} totalCommision={client.totalCommision} commisionCollected={client.commisionCollected} />)}
      </tbody>
    </Table>
  </div>
);

const RootComponent: React.FC<{ history: any }> = ({ history }) => {
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
