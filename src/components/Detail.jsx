import detail from "./styles/detail.css";
import React from "react";
import { Link } from "react-router-dom";

const Detail = props => {
  const detailStyle = {
    display: props.isOpen && "block"
  };
  return (
    <div>
      <div className="detail" style={detailStyle}>
        <div className="detail-close" onClick={props.close}>
          X
        </div>
        <div className="detail-info">
          <img src={props.product.map(x => x.photo1)} alt="" />
          <div className="info-box">
            <div className="info-text">
              <h3>{props.product.map(x => x.title)}</h3>
              <p>
                <span>NT$ </span>
                {props.product.map(x => x.price)}
              </p>
            </div>
            <div className="info-btn">
              <div className="btn-increase">
                <span
                  onClick={() => props.decrement(props.product.map(x => x.id))}
                >
                  -
                </span>
                <span className="value-bg">
                  {props.product.map(x => x.value)}
                </span>
                <span
                  onClick={() => props.increment(props.product.map(x => x.id))}
                >
                  +
                </span>
              </div>
              <div className="btn-btn">
                <span
                  className="add-cart"
                  onClick={() => props.add(props.product.map(x => x.id))}
                >
                  加入購物車
                </span>
                <br />
                <Link to="/list" className="checkout" onClick={props.close2}>
                  <span>前往結帳</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-more">
          <div className="more-text">
            <hr />
            <h3>商品說明</h3>
            <p>產地：{props.product.map(x => x.place)}</p>
            <p className="text-padding">
              材質：{props.product.map(x => x.material)}
            </p>
            <hr />
          </div>
          <div className="more-pic">
            <img src={props.product.map(x => x.photo2)} alt="" />
            <img src={props.product.map(x => x.photo3)} alt="" />
            <img src={props.product.map(x => x.photo4)} alt="" />
          </div>
        </div>
      </div>
      <div className="shield" style={detailStyle} onClick={props.close}></div>
    </div>
  );
};

export default Detail;
