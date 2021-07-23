import React from "react";
import ShowCard from "./ShowCard";
import styles from "./Card.module.css";
import { v4 as uuid } from "uuid";


export default function card({ data }) {
  const handleShowData = (e) => {
    let check = e.title.split(" ")[0];
    if (check === "Fisher") {
      window.location="http://localhost:3000/fisher"
    }else if (check === "Piestro") {
      window.location="http://localhost:3000/piestro"
    }else if (check === "xCraft") {
      window.location="http://localhost:3000/xCraft"
    }
  }
    const dataItem = data.map((item, i) => <div style={{ width: "100%", display: "flex", flexDirection: "column"}} key={i} >
        <h2 styles={{ width: "100%"}} >{item.category}</h2>
        <div className={styles.category} >
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }} key={uuid()} className={styles.cardsDivv}  >
          {item.array.map(el =>
            <div onClick={()=>handleShowData(el)} key={uuid()}><ShowCard el={el} /></div>)}
        </div>
        </div>
  </div>);

  return (
    <div className={styles.main} >
      {dataItem}
    </div>
  );
}

