import React from "react";
import listone from "./styles/listone.css";

const NewOne = props => {
  return (
    <div className="list-item">
      <img src={props.cart.photo} alt="" />
      <div className="item-title">{props.cart.title}</div>
      <div className="item-value">x {props.cart.value}</div>
      <div className="item-price">
        <span>NT$</span>
        {props.cart.price * props.cart.value}
      </div>
      <div className="trash" onClick={() => props.delete(props.cart.id)}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default NewOne;
