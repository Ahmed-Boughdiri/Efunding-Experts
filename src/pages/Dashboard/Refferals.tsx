import React,{ useEffect } from "react";
import { Badge, Card, Table } from "react-bootstrap";
import getStatus from "../../util/getQuoteStatus";
import { RefferalProps } from "../../@types/others/refferal";

interface RefferalsProps {
    handleRecentRefferals: () => Promise<void>,
    recentRefferals: RefferalProps[]
}

const Refferals:React.FC<RefferalsProps> = ({ handleRecentRefferals, recentRefferals }) =>{
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
                    !recentRefferals.length && <h6>There is No Refferals Recorded Yet</h6>
                }
                {
                    (recentRefferals.length !== 0) && (
                        <Table striped bordered hover>
                            <thead>
                                <th>Name</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                {
                                    recentRefferals.map(rf =>(
                                        <tr>
                                            <td>{`${rf.FirstName} ${rf.LastName}`}</td>
                                            <td>
                                                <Badge variant={getStatus(rf.Status)?.status}>
                                                    {getStatus(rf.Status)?.message}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    )
                }
            </Card.Body>
        </Card>
    )
}

export default Refferals;
