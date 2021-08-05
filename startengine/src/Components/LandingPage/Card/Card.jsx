/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { v4 as uuid } from "uuid";
import styles from "./Card.module.css";
import styled from "../StartInvestment/CardsData.module.css";
import ShowCard from "./ShowCard";
import axios from "axios";

export default function Card() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3001/data`);
    const { data } = response;
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleShowData = (e) => {
    let check = e.title.split(" ")[0];
    if (check === "Fisher") {
      window.location = "http://localhost:3000/fisher";
    } else if (check === "Piestro") {
      window.location = "http://localhost:3000/piestro";
    } else if (check === "xCraft") {
      window.location = "http://localhost:3000/xCraft";
    }
  };
  const dataItem = data.map((item, i) => (
    <div className={styled.cardsMainDd} key={i}>
      <h1 className={styles.headdingCate}>{item.category}</h1>
      <div key={uuid()} className={styled.cardsDivv}>
        {item.array.map((el) => (
          <div
            onClick={() => handleShowData(el)}
            key={uuid()}
            className={styled.cardsDivInnerd}
          >
            <ShowCard el={el} />
          </div>
        ))}
      </div>
    </div>
  ));

  return <div className={styles.main}>{dataItem}</div>;
}
