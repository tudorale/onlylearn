import React from "react";
import "./footer2.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../../main.css";
function Footer() {
  return (
    <div className="footer2">
      <div className="sitemap2">
        <div className="address2">
          <p className="title2">Contact</p>

          <p className="inf2">+40 749612885</p>

          <p className="inf2">onlylearn.platform@gmail.com</p>
        </div>
        <div className="useful2">
          <p className="title2">Useful Information</p>
          <a href="/account">Account</a>
          <br />
          <br />
          <a href="/editor">Editor</a>
        </div>
      </div>

      <div className="legal2">
        <p>© 2020 - 2021 OnlyLearn</p>
        <Link to="/terms&conditions">
          <p>Terms and Conditions</p>
        </Link>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
      </div>
      <img src={logo} alt="" className="logoFooter2"></img>
    </div>
  );
}

export default Footer;
