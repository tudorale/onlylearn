import React, { useEffect, useContext } from "react";
import "./nav.css";
import "../../main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router";
import UserContext from "../services/UserContext";
function Nav() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const history = useHistory();
  const status = useContext(UserContext);

  const handleHome = () => {

        history.push("/");
      
  };
  let open = false;
  const handleBack = () => {
 
        history.push("/");
      
  };
  const handleMobile = () => {
    open = !open;
    let menu = document.querySelector(".links");
    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");
    if (open) {
      document.querySelector(".links").style.display = "flex";
      menu.style.display = "block";
      line2.style.left = "-50px";
      line2.style.opacity = "0";
      line3.style.top = "10px";
      line1.style.top = "10px";
      line1.style.transform = "rotate(45deg)";
      line3.style.transform = "rotate(-45deg)";
    } else {
      document.querySelector(".links").style.display = "none";
      menu.style.display = "none";
      line2.style.left = "0px";
      line2.style.opacity = "1";
      line3.style.top = "20px";
      line1.style.top = "0px";
      line1.style.transform = "rotate(0deg)";
      line3.style.transform = "rotate(0deg)";
    }
  };

  const handleAbout = () => {
  
        history.push("/about");
      
  };

  return (
    <>
      <div className="navbar" data-aos="fade-down">
        <div className="logo">
          <h2 onClick={handleBack}>OnlyLearn</h2>
        </div>
        <div className="hamburger" onClick={handleMobile}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="links">
          <div className="c" onClick={handleHome}>
            <p>Home</p>
          </div>

          <div className="a" onClick={handleAbout}>
            <p>About</p>
          </div>

          <a href="/sign-in" className="navButton">
            {status.user ? "Sign out" : "Sign in"}
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
