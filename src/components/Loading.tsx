import React from "react";
import "../layout/Loading.css";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  position: absolute;
  left: 50% auto;
  top: 50%;
  transform: translateY(-50%);
`;

const Loading = () =>{
    return (
        <div className="loading">
            <BeatLoader
                css={override}
                size={50}
                color={"#fff"}
                loading={true}
            />
        </div>
    )
}

export default Loading;
