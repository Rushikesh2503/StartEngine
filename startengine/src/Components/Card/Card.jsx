import React from "react";
import ShowCard from "./ShowCard";
import styles from "./Card.module.css";

export default function card({ data }) {
    const dataItem = data.map((item, i) => <div style={{ width: "100%", display: "flex", flexDirection: "column"}} key={i} >
        <h2 styles={{ width: "100%"}} >{item.category}</h2>
        <div className={styles.category} >
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }} key={i}  >    
          {item.array.map(el => <ShowCard el={el} /> )}
        </div>
        </div>
  </div>);

  return (
    <div className={styles.main} >
      {dataItem}
    </div>
  );
}

