import React from "react";
import CardsData from "../LandingPage/StartInvestment/CardsData";
import Navbar from "../LandingPage/Navbar/Navbar";
import InvestFundFP from "../LandingPage/InvestFundFP/InvestFundFP"
import Footer from "../LandingPage/Footer/Footer";
const StartInv = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h1 style={{ fontWeight: "normal" }}>
        Find a company. Become an investor.
      </h1>
      <br />
      <p style={{ color: "#20c177", fontWeight: "bold", fontSize: "30px" }}>
        SIGNED TO TRADE ON STARTENGINE SECONDARY
      </p>
      <br />
      <h1 style={{ fontWeight: "normal",color:"navy"}}>----Discover Investments----</h1>
      <CardsData />
      <InvestFundFP/>
      <Footer />
    </div>
  );
};
//StartInvestment Page
export default StartInv;
