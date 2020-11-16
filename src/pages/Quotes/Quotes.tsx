import React from "react";
import Page from "../../components/Page";
import { Table } from "react-bootstrap";
import "../../layout/Quotes.css";
import { state } from "../../global/Global";
import { quotes, QuoteProps } from "../../global/Quotes";
import Quote from "./Quote";

const pageInfo = state.pages.find((page) => page.name === "Quotes");

const Quotes = () => (
  <div className="pb-4 quotes">
    <h3 className="pt-4 text-left pl-3">Quotes</h3>
    <Table striped bordered hover className="mt-4 table-container">
      <thead>
        <tr>
          <th className="name-section">Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Status</th>
          <th className="more-info-section">More Info</th>
          <th className="date-created-section">Date Created</th>
          <th className="approximate-funding-section">
            Approximate Funding Quote
          </th>
          <th>Quote Notes</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote: QuoteProps) => (
          <Quote
            name={quote.name}
            phone={quote.phone}
            email={quote.email}
            status={quote.status}
            dateCreated={quote.dateCreated}
            quoteNotes={quote.quoteNotes}
            approximateFundingQuote={quote.approximateFundingQuote}
          />
        ))}
      </tbody>
    </Table>
  </div>
);

const RootComponent: React.FC<any> = ({ history }) => {
  return (
    <div>
      <Page
        section={<Quotes />}
        activeTab={pageInfo?.name}
        linksData={pageInfo?.path}
        history={history}
      />
    </div>
  );
};

export default RootComponent;
