import React from "react";
import NavBar from "./NavBar";
import Navigation from "./Navigation";
import CurrentSection from "./CurrentSection";

const Page:React.FC<any> = ({ section, activeTab, linksData, history }) =>{
    const goBack = () => history.goBack();
    return (
        <div style={{overflowX: "hidden"}}>
            <NavBar goBack={goBack} />
            <Navigation activeTab={activeTab} />
            <CurrentSection section={section} linksData={linksData} />
        </div>
    )
}

export default Page;
