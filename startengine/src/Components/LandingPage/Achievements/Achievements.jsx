import React from 'react';
import styled from "./Achievements.module.css";
import { Link } from "react-router-dom";

const FrontB1 = () => {
    return (
      <div>
        <div className={styled.frMaindivC}>
          <div className={styled.frImg}>
            <img
              src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2021/06/500kusers_tw_white-1-1024x626.png"
              alt="500K USERS"
            />
          </div>
          <div className={styled.fr500kdescDiv}>
            <div className={styled.frTitle1}>
              <h1>
                Over <span className={styled.users500k}>500K Users</span> on
                StartEngine!
              </h1>
            </div>
            <div className={styled.frSubtitle2}>
              <p>
                Join more than 500,000 people on StartEngine and build your
                investment portfolio. Welcome to the future of startup
                investing.
              </p>
            </div>
            <div className={styled.frBtns1}>
              <Link to="/startInvest" >
                <button className={styled.stInvesBtn1}>Start Investing</button>
              </Link>
              <Link to="/GetFunding">
                <button className={styled.getFundBtn1}>Get Funding</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styled.frMaindivC2}>
          <div>
            <h1>500K</h1>
            <h2>Investors</h2>
            <p>
              More than 500,000 prospective investors are part of our community.
            </p>
          </div>
          <div>
            <h1>$350M</h1>
            <h2>Raised</h2>
            <p>Over $350M has been invested on StartEngine to date.</p>
          </div>
          <div>
            <h1>500+</h1>
            <h2>Offerings Funded</h2>
            <p>
              More than 500 offerings have been successfully funded on
              StartEngine.
            </p>
          </div>
        </div>
      </div>
    );
}

export default FrontB1
