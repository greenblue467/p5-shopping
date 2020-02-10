import React from "react";
import { Link } from "react-router-dom";
import nav from "./styles/nav.css";

const Nav = props => {
  const active1 = {
    backgroundColor: props.url == "http://localhost:3000/new" && "#3e4d74"
  };
  const active2 = {
    backgroundColor: props.url == "http://localhost:3000/pop" && "#3e4d74"
  };
  const active3 = {
    backgroundColor: props.url == "http://localhost:3000/select" && "#3e4d74"
  };
  return (
    <div className="navbar">
      <div className="menu" onClick={props.menuOpen}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
        <span className="shield"></span>
      </div>
      <div className="logo" onClick={props.slide}>
        <Link to="/" className="logoStyle">
          MeEVE
        </Link>
      </div>
      <div className="nav">
        <Link to="/new" onClick={props.urlChange1} className="linkStyle">
          <li style={active1}>新品上市</li>
        </Link>
        <Link to="/pop" onClick={props.urlChange2} className="linkStyle">
          <li style={active2}>人氣商品</li>
        </Link>
        <Link to="/select" onClick={props.urlChange3} className="linkStyle">
          <li style={active3}>本月精選</li>
        </Link>
      </div>
      <div className="cart">
        <Link to="/list" className="cartStyle" onClick={props.close2}>
          <i className="fas fa-shopping-cart"></i>
          <div>{props.total}</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
