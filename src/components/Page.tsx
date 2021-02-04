import React, { ReactNode, useState, useEffect } from "react";
import NavBar from "./NavBar";
import Navigation from "./Navigation";
import CurrentSection from "./CurrentSection";
import { PathProps } from "../global/Global";
import getEmail from "../global/GetEmail";
import Loading from "./Loading";
import Error from "./Error";
import { getID } from "../util/ManageID";
import getUserName from "../global/GetUserName";
import { History } from "history";

const Page: React.FC<{
  section: ReactNode;
  activeTab: String | undefined;
  linksData: PathProps[] | undefined;
  history: History;
}> = ({ section, activeTab, linksData, history }) => {
  const [navOpened, setNavOpened] = useState(false);
  const toggleNav = () => setNavOpened((nav) => !nav);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(false)
  const [showError, setShowError] = useState(false);
  const [userName, setUserName] = useState("")
  const handleEmail = async() =>{
    setShowLoader(true)
    const res = await getEmail(getID() || "")
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false)
      setEmail(res.data)
    }
    setShowLoader(false)
  }
  const handleUserName = async() =>{
    setShowLoader(true)
    const res = await getUserName(getID() || "")
    if(!res.success) {
      setError(res.error as string)
      setShowError(true)
    } else {
      setShowError(false)
      setUserName(res.data)
    }
    setShowLoader(false)
  }
  useEffect(() =>{
    handleEmail()
    handleUserName()
  },[])
  return (
    <div style={{ overflowX: "hidden" }}>
      {
        showLoader && <Loading />
      }
      {
        showError && <Error error={error} />
      }
      {
        !showError && (
          <>
            <NavBar history={history} toggleNav={toggleNav} email={email} />
            <Navigation
              activeTab={activeTab}
              openNav={navOpened}
              setOpenNav={setNavOpened}
              email={email}
              userName={userName}
            />
            <CurrentSection
              section={section}
              linksData={linksData ? linksData : []}
            />
          </>
        )
      }
    </div>
  );
};

export default Page;
