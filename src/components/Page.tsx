import React, { ReactNode, useState } from "react";
import NavBar from "./NavBar";
import Navigation from "./Navigation";
import CurrentSection from "./CurrentSection";
import { PathProps } from "../global/Global";

const Page: React.FC<{
  section: ReactNode;
  activeTab: String | undefined;
  linksData: PathProps[] | undefined;
  history: any;
}> = ({ section, activeTab, linksData, history }) => {
  const goBack = () => history.goBack();
  const [navOpened, setNavOpened] = useState(false);
  const toggleNav = () => setNavOpened((nav) => !nav);
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar goBack={goBack} toggleNav={toggleNav} />
      <Navigation
        activeTab={activeTab}
        openNav={navOpened}
        setOpenNav={setNavOpened}
      />
      <CurrentSection
        section={section}
        linksData={linksData ? linksData : []}
      />
    </div>
  );
};

export default Page;
