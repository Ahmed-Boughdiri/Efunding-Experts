import React,{ useEffect, useState } from "react";
import Page from "../../components/Page";
import { state } from "../../global/Global";
import { Card, Table } from "react-bootstrap";
import "../../layout/Clients.css";
import { getUserClients } from "../../global/GetUserClients";
import Client from "./Client";
import { getID } from "../../util/ManageID";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { RouteComponentProps } from "react-router-dom";

const pageInfo = state.pages.find((page) => page.name === "Clients");

const id = getID();

const Clients: React.FC<any> = ({ storeEditInfoData, storeEditData }) => {
  const [clients,setClients] = useState<any[]>([]);
  const [showLoader, setShowLoader ] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const loadClients = async() =>{
    setShowLoader(true);
    const res = await getUserClients(id || "")
    if(!res.success) {
      setError(res.error as string)
      setShowError(true);
    } else {
      setShowError(false)
      setClients(res.data)
      setShowLoader(false)
    }
  }
  useEffect(() =>{
    loadClients()
  },[])
  const handleClientMoreInfo = (clientEmail: String, client: any) =>{
    storeEditInfoData({
      infoType: "client",
      ownerID: getID(),
      clientEmail
    })
    storeEditData({
      FirstName: client.FirstName,
      LastName: client.LastName,
      Email: client.Email,
      Phone: client.Phone,
      Note: client.Notes
    })
  }
  return (
    <div className="clients">
      {
        showLoader && <Loading />
      }
      {
        showError && <Error error={error} />
      }
      {
        !showError && (
          <>
            <Card className="mt-5" style={{ width: "fit-content", minWidth: "95%" }}>
              <Card.Header>
                <h4>Clients</h4>
              </Card.Header>
              <Card.Body>
                {
                  !clients.length && <h6>There is No Clients Recorded Yet</h6>
                }
                {
                  (clients.length !== 0) && (
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
                            Funding Amount Requested
                          </th>
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
                        {clients.map((client:any) => <Client 
                                                        name={`${client.FirstName} ${client.LastName}`} 
                                                        email={client.Email} 
                                                        phone={client.Phone} 
                                                        status={client.Status} 
                                                        dateCreated={client.DateCreated} 
                                                        approximateFundingQuote={client.DesiredAmountOfFunding}
                                                        fundingAmountSoFar={client.ApproxQuoteAmount} 
                                                        totalCommision={client.TotalCommissions} 
                                                        commisionCollected={client.CommissionsCollected}
                                                        onClick={() =>handleClientMoreInfo(client.Email, client)} 
                                                      />
                        )}
                      </tbody>
                    </Table>
                  )
                }
              </Card.Body>
            </Card>
          </>
        )
      }
    </div>
  );
}

interface RootComponentProps extends RouteComponentProps {
  storeEditInfoData: any,
  storeEditData: any
}

const RootComponent: React.FC<RootComponentProps> = ({ history, storeEditInfoData, storeEditData }) => {
  return (
    <Page
      section={
        <Clients 
          storeEditInfoData={storeEditInfoData} 
          storeEditData={storeEditData} 
        />
      }
      activeTab={pageInfo?.name}
      linksData={pageInfo?.path}
      history={history}
    />
  );
};

function mapStateToProps(state: any) {
  return {
    editInfoData: state.EditInfoReducer
  }
}

function mapDispatchToProps(dispatch:any) {
  return {
    storeEditInfoData: (data:any) =>dispatch({ type: "STORE_EDIT_INFO", payload: data }),
    storeEditData: (data:any) =>dispatch({ type: "STORE_EDIT_DATA", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
