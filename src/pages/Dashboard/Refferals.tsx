import React,{ useEffect } from "react";
import { Badge, Card, Table } from "react-bootstrap";
import getStatus from "../../util/getQuoteStatus";
import { RefferalProps } from "../../@types/others/refferal";

interface RefferalsProps {
    handleRecentRefferals: () => Promise<void>,
    recentRefferals: RefferalProps[]
}

const Refferals:React.FC<RefferalsProps> = ({ 
    handleRecentRefferals, 
    recentRefferals 
}) =>{
    useEffect(() =>{
        handleRecentRefferals()
    },[])
    return (
        <Card>
            <Card.Header>
                <h6>Recent Refferals</h6>
            </Card.Header>
            <Card.Body>
                {
                    !recentRefferals?.length ? (
                        <h6>There is No Refferals Recorded Yet</h6>
                    ) : (<div></div>)
                }
                {
                    (recentRefferals?.length) ? (
                        <Table striped bordered hover>
                            <thead>
                                <th>Name</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                {
                                    (recentRefferals?.length) ? 
                                    recentRefferals.map(rf =>(
                                        <tr>
                                            {
                                                (rf?.FirstName && rf?.LastName) && (
                                                    <td>{`${rf.FirstName} ${rf.LastName}`}</td>
                                                )
                                            }
                                            {
                                                (rf?.Status) && (
                                                    <td>
                                                        <Badge variant={getStatus(rf.Status)?.status}>
                                                            {getStatus(rf.Status)?.message}
                                                        </Badge>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    )) : (<div></div>)
                                }
                            </tbody>
                        </Table>
                    ) : (<div></div>)
                }
            </Card.Body>
        </Card>
    )
}

export default Refferals;
