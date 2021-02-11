import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../../main.css";
function Footer() {
  const path = window.location.pathname;
  const style = {
    position: "absolute",
  };
  if (path === "/") {
    style.position = "absolute";
    style.bottom = "0";
  }
  return (
    <div className="footer" style={style}>
      <div className="sitemap">
        <div className="address">
          <p className="title">Contact</p>

          <p className="inf">+40 749612885</p>

          <p className="inf">onlylearn.platform@gmail.com</p>
        </div>
        <div className="useful">
          <p className="title">Useful Information</p>
          <a href="/account">Account</a>
          <br />
          <br />
          <a href="/editor">Editor</a>
        </div>
      </div>

      <div className="legal">
        <p>© 2020 - 2021 OnlyLearn</p>
        <Link to="/terms&conditions">
          <p>Terms and Conditions</p>
        </Link>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
      </div>
      <img src={logo} alt="" className="logoFooter"></img>
    </div>
  );
}

export default Footer;
