import React from "react";
import p1 from "./styles/p1.jpg";
import p2 from "./styles/p2.jpg";
import p3 from "./styles/p3.jpg";
import header from "./styles/header.css";
import { Link } from "react-router-dom";
import $ from "jquery";

const Header = props => {
  var start;
  var n = 1;
  const running = function() {
    const wid = 100;
    if (n < 1) {
      $(".pic1").css({
        "z-index": 1
      });
      $(".pic2").css({
        "z-index": 0
      });
      $(".pic3").css({
        "z-index": 2
      });
      $(".pic1").animate(
        {
          left: wid * n + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: -wid * (n + 1) + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: wid * (n + 1) + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
      n++;
    } else if (n < 2) {
      $(".pic1").css({
        "z-index": 2
      });
      $(".pic2").css({
        "z-index": 1
      });
      $(".pic3").css({
        "z-index": 0
      });
      $(".pic1").animate(
        {
          left: wid * n + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: wid * (n - 1) + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: -wid * n + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
      n++;
    } else if (n < 3) {
      $(".pic1").css({
        "z-index": 0
      });
      $(".pic2").css({
        "z-index": 2
      });
      $(".pic3").css({
        "z-index": 1
      });
      $(".pic1").animate(
        {
          left: -wid * (n - 1) + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: wid * (n - 1) + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: wid * (n - 2) + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
      n = 0;
    }
  };

  const slide = () => {
    start = setInterval(running, 3000);
  };
  const stop = () => {
    clearInterval(start);
  };
  const go = () => {
    start = setInterval(running, 3000);
  };
  return (
    <div
      className="container"
      onMouseOver={stop}
      onMouseOut={go}
      style={slide()}
    >
      <div className="btn">
        <div onClick={() => props.jump(1)}></div>
        <div onClick={() => props.jump(2)}></div>
        <div onClick={() => props.jump(3)}></div>
      </div>

      <Link to="/new">
        <img src={p1} className="pic1" />
      </Link>
      <Link to="/pop">
        <img src={p2} className="pic2" />
      </Link>
      <Link to="/select">
        <img src={p3} className="pic3" />
      </Link>
    </div>
  );
};

export default Header;
