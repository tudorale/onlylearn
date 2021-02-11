import React, { useEffect, useContext } from "react";
import "./mainCSS.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";

function CSS1() {
  const history = useHistory();
  let location = useLocation();
  const userStatus = useContext(UserContext);
  const { user, setUser } = userStatus;
  
  useEffect(() => {
    if (!user) {
      fire.auth().signOut();
      history.push("/sign-in");
    }
  }, [history, user]);

  useEffect(() => {
    fire.auth().onAuthStateChanged((data) => {
      if (data) {
        setUser({ data });
      } else {
        setUser(false);
      }
    });
  }, [setUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const nextLesson = () => {

        history.push("/css3/animations");
     
  };

  const handleEditor = () => {
    
        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/z-index");
     
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Rules</h1>
        <h3>
          The <span className="purple">@import</span> rule
        </h3>
        <p>
          Is used to import a stylesheet into another stylesheet or to import
          fonts.
        </p>{" "}
        <p>
          This rule must be at the top of the document and is supporting media
          queries, we will learn about media queries in the responsive lessons.
        </p>{" "}
        <p>
          After the <span className="purple"> @import</span> as the value you
          can use a URL/string, the URL is representing the location for the
          resource that you want to import, or a comma separated list of media
          queries conditioning the application of the CSS rules defined in the
          URL.
        </p>{" "}
        <h3>
          The <span className="purple">@keyframes </span> rule
        </h3>
        <p>
          Is specifying the animation code, we will use this rule in the
          "Animation" lesson, after the{" "}
          <span className="purple"> @keyframes</span> must be the name of the
          animation, and in the curly brackets you control the animation, the
          values for controlling the animation can be from 0-100% or{" "}
          <span className="purple"> from (this is 0%)</span> and{" "}
          <span className="purple"> to (this is 100%)</span>, you will
          understand better when we will learn the animations.
        </p>{" "}
        <h3>
          The <span className="purple">@media </span>rule
        </h3>
        <p>
          Is used for media queries, to apply different styles based on the
          media type/device.
        </p>{" "}
        <p>
          Media queries can be used to check different things: width and height
          of the viewport/device, orientation, resolution.
        </p>{" "}
        <p>
          The media queries are used  the most time for responsive websites,
          you can use the media queries to specify that a certain style is only
          for printed documents or for screen renders, (print, screen).
        </p>
        <br />
        <p className="res">Syntax</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span className="class">@import</span>
            <span className="url"> "main.css"</span>
            <span>;</span>
          </p>
          <p className="mainTag">
            <span className="class">@import url</span>
            <span>(</span>
            <span className="url">"...."</span>
            <span>)</span>
            <span>;</span>
          </p>
          <p className="mainTag">
            <span className="class">@keyframes </span>
            <span className="class">animationName</span>
            <span>{"{"}</span>
          </p>
          <p className="secondTag">
            <span className="element">0%</span>
            <span>{"{ "}</span>
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> blue</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">25%</span>
            <span>{"{ "}</span>
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> red</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">50%</span>
            <span>{"{ "}</span>
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> orange</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">75%</span>
            <span>{"{ "}</span>
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">100%</span>
            <span>{"{ "}</span>
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>
          <p className="mainTag">{"}"}</p>
          <p className="mainTag">
            <span className="class">@media</span>
            <span className="element"> only</span>
            <span className="class"> screen</span>
            <span className="element"> and</span>
            <span> (</span>
            <span className="prop">max-width</span>
            <span>:</span>
            <span className="element"> 750px</span>

            <span>)</span>
            <span>{" {"}</span>
          </p>
          <p className="secondTag">
            <span className="class">.box</span>
            <span>{" {"}</span>
          </p>
          <p className="thirthTag">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
          </p>
          <p className="secondTag">{"}"}</p>
          <p className="mainTag">{"}"}</p>
        </div>
        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            Next lesson
          </button>
          <button className="practice" onClick={handleEditor}>
            Practice
          </button>
          <button className="previous" onClick={previousLesson}>
            Previous lesson
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CSS1;
