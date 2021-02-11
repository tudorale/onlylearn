import React, { useEffect, useContext } from "react";
import "./mainRes.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";

function RES() {
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
    
        history.push("/");
     
  };
  const previousLesson = () => {
  
        history.push("/responsive/grid&media-queries");
      
  };
  const handleEditor = () => {
 
        history.push("/editor");
     
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Recommendation</h1>
        <p>
          You are done! This little journey has come to an end, we hope you
          learned how to make a responsive website using{" "}
          <span className="purple">media queries</span> and{" "}
          <span className="purple">flexbox</span> or the
          <span className="purple"> grid system</span>. As we said at every
          final lesson make a project! With practice, you will learn better.
        </p>
        <p>
          Now you should be able to make a responsive website using what you
          learned from this course.{" "}
        </p>
        <h3>
          Below you have a small <span className="purple">recap</span> about
          what should you know:
        </h3>
        <p>
          Always set the viewport and the initial zoom using the code below in
          the head tag.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">meta</span>
            <span className="inTag"> name</span>
            <span>=</span>
            <span className="inTagValue">"viewport"</span>
            <span className="inTag"> content</span>
            <span>=</span>
            <span className="inTagValue">
              "width=device-width, initial-scale=1.0"
            </span>
            <span>{"/>"}</span>
          </p>
        </div>
        <p>
          Use responsive dimensions, like <span className="purple">rem</span>,{" "}
          <span className="purple">vw</span>, <span className="purple">vh</span>{" "}
          units. Use for width and height if you need the percentage unit, for
          the grid layout if you don't have a specific value use the{" "}
          <span className="purple">fr</span> unit, which will take a portion of
          the available space in the container.
        </p>
        <p>
          Use <span className="purple">media queries</span> when your design is
          breaking, make it smaller or hide some content, but be careful when you
          choose to hide something, if the device screen is small doesn't mean
          that the user can't see something important, try to make that thing
          smaller and keep what is essential.
        </p>
        <p>Use flexbox and the grid system to have control over the layout.</p>
        <p>
          If a text with 2-3 words isn't breaking when the screen is smaller
          doesn't mean that you don't need to change something on it. Make sure
          to change the font size for the text when the screen is getting
          smaller. You don't need to have a big text on a 420px screen. Try to
          imagine how your website will look on a phone, use the "Inspect" tool
          or the Chrome DevTools from the browser for a better experience.
        </p>
        <p>
          Unfortunately, this was the last lesson, for now. We are working on a
          new course for <span className="purple">Bootstrap 5</span>, we hope
          you learned something and be prepared for something new{" "}
          <span style={{ fontSize: "1.3rem" }}>:D</span>.
        </p>
        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            Home
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

export default RES;
