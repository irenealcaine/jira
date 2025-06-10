import React from "react";
import "./card.css";

const Card = ({ com, index, accepted, deployed, family }) => {
  return (
    <div className={`card ${accepted && "accepted"} ${deployed && "deployed"}`}>
      <p>{index}</p>
      <h2>{com}</h2>
      <p>{family}</p>
    </div>
  );
};

export default Card;
