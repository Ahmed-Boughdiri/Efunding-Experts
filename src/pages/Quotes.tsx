import React from "react";
import Page from "../components/Page";
import { Table, Badge, Button } from "react-bootstrap";
import "../layout/Quotes.css";
import { state } from "../global/Global";
import { Link } from "react-router-dom";
import { quotes } from "../global/Quotes";
import getStatus from "../util/getQuoteStatus"

const pageInfo = state.pages.find(page => page.name === "Quotes");

const Quotes = () =>(
    <div className="pb-4 quotes">
        <h3 className="pt-4 text-left pl-3">Quotes</h3>
        <Table striped bordered hover className="mt-4 table-container">
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
                <th className="more-info-section">More Info</th>
                <th className="date-created-section">Date Created</th>
                <th className="approximate-funding-section">Approximate Funding Quote</th>
                <th>Quote Notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    quotes.map(quote =>(
                        <tr>
                            <td>{quote.name}</td>
                            <td>{quote.phone ? quote.phone : ""}</td>
                            <td>{quote.email}</td>
                            <td><Badge variant={getStatus(quote.status)?.status}>{getStatus(quote.status)?.message.toUpperCase()}</Badge></td>
                            <td><Link to="/edit"><Button variant="outline-primary">More Info</Button></Link></td>
                            <td>{quote.dateCreated.getFullYear() + "-" + quote.dateCreated.getMonth() + "-" + quote.dateCreated.getDay()}</td>
                            <td>{quote.approximateFundingQuote}</td>
                            <td className="text-left">{quote.quoteNotes}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
)

const RootComponent:React.FC<any> = ({ history }) =>{
    return (
        <div>
            <Page section={<Quotes />} activeTab={pageInfo?.name} linksData={pageInfo?.path} history={history} />
        </div>
    )
}

export default RootComponent;
