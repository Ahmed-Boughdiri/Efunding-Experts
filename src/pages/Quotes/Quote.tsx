import React,{ useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import getStatus from "../../util/getQuoteStatus";
import { connect } from "react-redux";
import { NotesProps } from "../../@types/data/data";

interface QuoteProps {
    firstName: String,
    lastName: String,
    phone: String | undefined,
    email: String,
    status: String,
    dateCreated: Date,
    quoteNotes: NotesProps[],
    approximateFundingQuote: Number,
    handleMoreInfo: any,
    id:String,
    QuoteID: String,
    storeEditData?: any
}

const Quote:React.FC<QuoteProps> = ({ 
    firstName, 
    lastName, 
    phone, 
    email, 
    status, 
    dateCreated, 
    quoteNotes, 
    approximateFundingQuote, 
    handleMoreInfo, 
    id, 
    QuoteID, 
    storeEditData 
}) =>{
    const [statusMessage, setSatatusMessage] = useState("");
    const handleStatusMessage = () =>{
        if(getStatus(status)?.message.toUpperCase() === "QUOTING NOW") setSatatusMessage("Quoting Now")
        else if(getStatus(status)?.message === "Quoted Waiting on Contact") setSatatusMessage("Quoted Waiting on Contact")
    }
    useEffect(() =>{
        handleStatusMessage()
    },[])
    return (
        <tr>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{phone ? phone : ""}</td>
            <td>{email}</td>
            <td>
                <Badge variant={getStatus(status)?.status}>
                    {getStatus(status)?.message.toUpperCase()}
                </Badge>
            </td>
            <td>
                <Button variant="outline-primary" onClick={() =>{
                    let infoType = ""
                    if(statusMessage.toUpperCase() === "QUOTED WAITING ON CONTACT") infoType = "approved-quote"
                    else if(statusMessage.toUpperCase() === "QUOTING NOW".toUpperCase()) infoType = "refferal"
                    else if(statusMessage.toUpperCase() === "DOESN'T QUALIFY") infoType = "denied-refferal"
                    handleMoreInfo(id, QuoteID, infoType)
                    const data = {
                        FirstName: firstName,
                        LastName: lastName,
                        ApproxQuoteAmount: approximateFundingQuote,
                        TotalCommissions: "",
                        CommissionsCollected: "",
                        Email: email,
                        Phone: phone,
                        Note: [ ...quoteNotes ] || []
                    }
                    storeEditData(data)
                }}>More Info</Button>
            </td>
            <td>
                {
                    dateCreated
                }
            </td>
            <td>{approximateFundingQuote}</td>
            <td className="text-left">{(quoteNotes?.length) ? quoteNotes[quoteNotes?.length - 1]?.contentValue : ""}</td>
        </tr>
    )
}

function mapStateToProps(state: any) {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {
        storeEditData: (data:any) => dispatch({ type: "STORE_EDIT_DATA", payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
