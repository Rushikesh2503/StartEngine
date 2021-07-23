import React from "react";
import styles from "./Funding.module.css";

 const Funding = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
                  <h1>The Mr. Wonderful <br /> Supported  Way to <br /> <span>Find Investors</span> </h1>
                  <p>StartEngine helped fund over 500 successful raises. And now, your company can raise up to <b> $5m via Reg CF or $75m via Reg A offerings. </b> </p>
                  <p>Access a community of 500,000+ investors today.</p>
                  <input type="text" placeholder="Work Email Address" />
                  <button>Get Started</button>
        </div>
        <div className={styles.right}>
          <img
            src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/03/1.png"
            alt=""
          />
          <p>
            StartEngine’s Strategic Advisor Mr. Wonderful encourages the
            companies in his portfolio to raise on Star
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/nytime.jpg" alt="" />
        <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/Forbes.jpg" alt="" />
        <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/WallStreetJournal.jpg" alt="" />
        <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/Fortune.jpg" alt="" />
      <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/laTimes.jpg" alt="" />
      <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/Inc.jpg" alt="" />
      </div>
    </div>
    
  );
};
export default Funding