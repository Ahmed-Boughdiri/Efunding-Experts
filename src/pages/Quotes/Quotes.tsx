import React,{ useEffect, useState } from "react";
import Page from "../../components/Page";
import { Card, Table } from "react-bootstrap";
import "../../layout/Quotes.css";
import { state } from "../../global/Global";
import Quote from "./Quote";
import { getID } from "../../util/ManageID";
import { getQuotes } from "../../global/Quotes";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const pageInfo = state.pages.find((page) => page.name === "Quotes");

const Quotes:React.FC<any> = ({ storeQuoteID, history, storeEditInfo }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false)
  const getQuotesData = async() =>{
    setShowLoader(true);
    const res = await getQuotes(getID() || "");
    if(!res.success) {
      setError(res.error as string)
      setShowError(true);
    } else {
      setShowError(false);
      setQuotesData(res.data);
    }
    setShowLoader(false)
  }
  const [quotesData, setQuotesData] = useState<any>([]);
  useEffect(() =>{
    getQuotesData();
  },[])
  const handleMoreInfo = async(id:String, quoteID: String, type:String) =>{
    setShowLoader(true);
    storeQuoteID(getID())
    storeEditInfo({
      infoType: type,
      quoteID,
      ownerID: getID()
    })
    setShowLoader(false);
    history.push("/edit")
  }
  return (
    <div className="pb-4 quotes">
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
              <h4>Quotes</h4>
            </Card.Header>
            <Card.Body>
              {
                !quotesData.length && <h6>There is No Quote Recorded Yet</h6>
              }
              {
                (quotesData.length !== 0) && (
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
                          Funding Amount Requested
                        </th>
                        <th>Quote Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        quotesData && quotesData.map((quote: any) => (
                          <Quote
                            firstName={quote.FirstName}
                            lastName={quote.LastName}
                            phone={quote.Phone}
                            email={quote.Email}
                            status={quote.Status}
                            dateCreated={quote.DateCreated}
                            quoteNotes={quote.Notes}
                            approximateFundingQuote={quote.DesiredAmountOfFunding}
                            handleMoreInfo={handleMoreInfo}
                            QuoteID={quote.QuoteID}
                            id={quote._id}
                          />
                        ))
                      }
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

const RootComponent: React.FC<any> = ({ history, storeQuoteID, storeEditInfo }) => {
  return (
    <div>
      <Page
        section={
          <Quotes 
            storeQuoteID={storeQuoteID} 
            history={history} 
            storeEditInfo={storeEditInfo} 
          />
        }
        activeTab={pageInfo?.name}
        linksData={pageInfo?.path}
        history={history}
      />
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    quoteID: state.quoteIDReducer,
  }
}

function mapDispatchToProps(dispatch:any) {
  return {
    storeQuoteID: (id:String) => dispatch({ type: "STORE_QUOTE_ID_REDUCER", payload: id }),
    storeEditInfo: (data: any) => dispatch({ type: "STORE_EDIT_INFO", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
