import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getClientStatus from "../../util/getClientStatus";

interface ClientProps {
    name: String,
    email: String,
    phone: String | undefined,
    status: String,
    dateCreated: Date,
    approximateFundingQuote: Number | undefined,
    fundingAmountSoFar: Number | undefined,
    totalCommision: Number | undefined,
    commisionCollected: Number | undefined,
    onClick: () => void
}

const Client:React.FC<ClientProps> = ({ 
    name, 
    email, 
    phone, 
    status, 
    dateCreated, 
    approximateFundingQuote, 
    fundingAmountSoFar, 
    totalCommision, 
    commisionCollected, 
    onClick 
}) =>{
    return (
        <tr>
            <td>{name}</td>
            <td>{phone ? phone : ""}</td>
            <td>{email}</td>
            <td>
                <Badge variant={getClientStatus(status)?.status}>
                    {getClientStatus(status)?.message.toUpperCase()}
                </Badge>
            </td>
            <td>
                <Link to="/edit">
                    <Button 
                        variant="outline-primary" 
                        onClick={onClick}
                    >More Info</Button>
                </Link>
            </td>
            <td>
                {dateCreated}
            </td>
            <td className="text-left">{approximateFundingQuote}</td>
            <td className="text-left">
                {fundingAmountSoFar ? fundingAmountSoFar + "$" : ""}
            </td>
            <td className="text-left">
                {totalCommision ? totalCommision + "$" : ""}
            </td>
            <td className="text-left">
                {commisionCollected ? commisionCollected + "$" : ""}
            </td>
        </tr>
    )
}

export default Client;
