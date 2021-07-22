import React from "react";
import styles from "./Card.module.css";

export default function card({ el }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={el.cardimg} alt="" />
        <label>{el.imgtag}</label>
      </div>
      <div className={styles.middle}>
        <h5>{el.title}</h5>
        <p>{el.tagline}</p>
          </div>
          <hr />
      <div className={styles.bottom}>
        <div>
          <p>{el.raised}</p>
          <span htmlFor="">Raised</span>
        </div>
        <div>
          <p>{el.investors}</p>
          <span htmlFor="">Investor</span>
        </div>
        <div>
          <p>{el.minInvest}</p>
          <span htmlFor="">Min invest</span>
        </div>
      </div>
      </div>
  );
}
