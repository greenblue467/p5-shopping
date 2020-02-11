import React from "react";
import list from "./styles/list.css";
import ListOne from "./ListOne";
import { Link } from "react-router-dom";

const List = props => {
  const empty = () => {
    if (props.empty === 0) {
      return <div>您尚未選購商品！</div>;
    } else {
      return (
        <div>
          {props.cart.map(x => (
            <ListOne key={x.id} cart={x} delete={() => props.delete(x.id)} />
          ))}
        </div>
      );
    }
  };
  return (
    <div className="cartStyle">
      <div className="myCart">我的購物車</div>
      <div className="myItem">{empty()}</div>
      <div className="myPrice">
        <div className="myPrice-1">
          總金額：<span>NT$ {props.totalPrice}</span>
        </div>
        <div className="myPrice-0">
          <Link to="/" className="myPrice-2" onClick={props.slide}>
            <div>繼續購物</div>
          </Link>
          <Link to="/" className="myPrice-3" onClick={props.thanks}>
            <div>送出訂單</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
