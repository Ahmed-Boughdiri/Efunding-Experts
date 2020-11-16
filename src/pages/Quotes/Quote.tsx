import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getStatus from "../../util/getQuoteStatus";

interface QuoteProps {
    name: String,
    phone: String | undefined,
    email: String,
    status: String,
    dateCreated: Date,
    quoteNotes: String,
    approximateFundingQuote: Number
}

const Quote:React.FC<QuoteProps> = ({ name, phone, email, status, dateCreated, quoteNotes, approximateFundingQuote }) =>{
    return (
        <tr>
            <td>{name}</td>
            <td>{phone ? phone : ""}</td>
            <td>{email}</td>
            <td>
                <Badge variant={getStatus(status)?.status}>
                    {getStatus(status)?.message.toUpperCase()}
                </Badge>
            </td>
            <td>
                <Link to="/edit">
                    <Button variant="outline-primary">More Info</Button>
                </Link>
            </td>
            <td>
                {dateCreated.getFullYear() +
                "-" +
                dateCreated.getMonth() +
                "-" +
                dateCreated.getDay()}
            </td>
            <td>{approximateFundingQuote}</td>
            <td className="text-left">{quoteNotes}</td>
        </tr>
    )
}

export default Quote;
