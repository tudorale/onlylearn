import React, { useEffect, useContext } from "react";
import "../../main.css";
import "./home.css";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import i1 from "../images/i2.svg";
import fire from "../services/Firebase";
import { useHistory } from "react-router";
import UserContext from "../services/UserContext";
import { useLocation } from "react-router-dom";
import aboutImage from "../images/aboutSvg.svg";

function Home() {
  const status = useContext(UserContext);
  const { setUser } = status;

  let location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 400,
    });
    fire.auth().onAuthStateChanged((data) => {
      if (data) {
        setUser({ data });
      } else {
        setUser(false);
      }
    });
  }, [setUser]);

  const handleRegister = () => {
    fire.auth().signOut();  
    history.push("/sign-up");
    
  };

  const handleRead = () => {
    history.push("/about"); 
  };

  return (
    <>
      <div className="loadingBar"></div>
      {/* NAVBAR SECTION */}

      {/* HERO SECTION */}

      <div className="home">
        <Nav />
        <div className="intro">
          <h1>
            Learn web development
            <br /> with practice
          </h1>
          <p>All the information you need in one place.</p>

          <button onClick={handleRegister}>Start now</button>
        </div>
        <img src={i1} className="i1" alt="" width="300" height="300"/>
        
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          className="arrow-down"
          viewBox="0 0 451.847 451.847"
        >
          <path
            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
          />
        </svg>

        {/* WHAT YOU LEARN SECTION */}

        <h1 className="path">What you will find</h1>

        <div className="cards">
          <div
            className="card-1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Real time editor</h2>
            <p>
              A real time editor in browser where you can practice without
              having an account, your code will be saved in your local storage
              every time you change something. You can access the editor when
              you finish a lesson by clicking the <span>Practice</span> button
              or the "<span>Editor</span>" link from the footer.
            </p>
          </div>
          <div
            className="card-2"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Your first website</h2>
            <p>
              You will learn to make your first website with <span>HTML5</span>{" "}
              and <span>CSS3</span>, on every lesson you will have the
              information that is essential without using expressions you won't
              understand.
            </p>
          </div>
          <div
            className="card-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Responsive websites</h2>
            <p>
              After the basic <span>CSS</span>, you will learn how to make your
              website responsive using <span>media queries</span> and other
              tools for controlling the layout. At the end you will be able to
              make a full website from scratch.
            </p>
          </div>
        </div>

        {/* ABOUT SECTION */}

        <h2 className="aboutHeader">About</h2>
        <div className="about">
          <div className="image" data-aos="fade-up" id="anchor">
            <img id="beac9bd7-e93e-493a-9e44-f819de7e7e6e" alt="" src={aboutImage} width="500" height="400" />
          </div>
          <div
            className="content"
            data-aos="fade-down"
            data-aos-anchor="#anchor"
          >
            <p>
              OnlyLearn it is a free platform to learn the basics of web
              development with over 60 lessons in{" "}
              <span style={{ color: "#3987e3" }}>HTML5</span> and{" "}
              <span style={{ color: "#3987e3" }}>CSS3</span>, it is a growing
              platform and along the way more free courses will be added for
              more programming languages ​​/ frameworks, is a small platform but
              with big ambitions, was founded by{" "}
              <a
                href="https://tudorale.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tudor Alexandru
              </a>{" "}
              and started on September 2020. Press the 'Read More' button if you
              want to know more about this idea. The platfrom is in <span style={{ color: "#3987e3" }}>beta</span> so if you will see bugs or changes over the night don't scare.
            </p>

            <button onClick={handleRead}>Read more</button>
          </div>
        </div>

        {/* FOOTER  */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
