import React from "react";
import "./card.css";

const Card = ({ com, index, accepted, deployed }) => {
  return (
    <div className={`card ${accepted && "accepted"} ${deployed && "deployed"}`}>
      <p>{index}</p>
      <h2>{com}</h2>
    </div>
  );
};

export default Card;
