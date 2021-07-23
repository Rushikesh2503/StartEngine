import React from "react";
import { Link } from "react-router-dom";
import styled from "./InvestFundFP.module.css";

const InvestFundFP = () => {
  return (
    <div className={styled.mainInvesDiv}>
      <div className={styled.invesDivBg}>
        <h1>I want to invest in a company</h1>
        <button>Start Investing</button>
      </div>
      <div className={styled.invesDivBg2}>
        <h1>I want to invest in a company</h1>
        <Link to="/GetFunding">
          <button>Get Funding</button>
        </Link>
      </div>
    </div>
  );
};

export default InvestFundFP;
