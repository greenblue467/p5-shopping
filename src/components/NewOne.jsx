import React from "react";
import newone from "./styles/newone.css";

const NewOne = props => {
  return (
    <div className="productList" onClick={() => props.open(props.items.id)}>
      <img src={props.items.photo1} alt="" />
      <h3>{props.items.title}</h3>
      <p>
        <span>NT$ </span>
        {props.items.price}
      </p>
    </div>
  );
};

export default NewOne;
