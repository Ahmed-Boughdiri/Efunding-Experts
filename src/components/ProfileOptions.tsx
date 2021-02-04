import React from "react";
import "../layout/ProfileOptions.css";
import { Image } from "react-bootstrap";

import logout from "../assets/logout.png";

interface ProfileOptionsProps {
    handleLogout: () => void
}

const ProfileOptions:React.FC<ProfileOptionsProps>= ({ handleLogout }) =>{
    return (
        <div className="profile-options-container">
            <div className="profile-settings-wrapper">
                <div 
                    className="profile-settings-item-container"
                    onClick={handleLogout}
                >
                    <Image 
                        src={logout}
                        height={27} 
                    />
                    <h4>Logout</h4>
                </div>
            </div>
            <div className="profile-settings-sep"></div>
        </div>
    )
}

export default ProfileOptions;
