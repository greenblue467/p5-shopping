import React from "react";
import footer from "./styles/footer.css";

function Footer() {
  return (
    <div className="foot">
      <div className="info">
        <h1>MeEVE</h1>
        <div>
          <p>02-1234-5678</p>
          <p>1234@gmail.com</p>
          <p>台北市大安區伊芙路100號</p>
        </div>
      </div>
      <div className="notice">
        <p>僅作為個人學習使用，非商業用途</p>
        <p>© 2020 MeEVE</p>
      </div>
    </div>
  );
}

export default Footer;
