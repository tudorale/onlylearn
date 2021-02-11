import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson8() {
  const history = useHistory();
  let location = useLocation();
  const userStatus = useContext(UserContext);
  const { user, setUser } = userStatus;
  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
      fire.auth().signOut();
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

  const nextLesson = () => {

        history.push("/html5/inputs");
    
  };
  const previousLesson = () => {

        history.push("/html5/videos");
      
  };
  const handleEditor = () => {
  
        history.push("/editor");
      
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const b = `
  <button type="button" style="height: 35px; font-size: 1rem">Click me!</button>
  <button disabled style="height: 35px; font-size: 1rem">You can't click me</button>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Buttons</h1>
        <p>
          Is very easy to add a button to your website, to do that you have to
          use the <span className="purple">{"<button>"}</span> tag and make sure
          to close it when you are using it. This element supports global and
          event attributes, some relevant attributes that can be used for this
          element are:
        </p>
        <p>
          {" "}
          <span className="purple">form</span> - specifies which form the button
          belongs to.
        </p>
        <p>
          <span className="purple">type</span> - tell the browser what type of
          button it is (submit, button, reset).
        </p>
        <p>
          <span className="purple">disabled</span> - specifies that the button
          should be disabled.
        </p>
        <p>
          {" "}
          <span className="purple">value</span> - specifies an initial value for
          the button.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">button</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"button"</span>
            <span>{">"}</span>
            Click me!
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">button</span>
            <span className="inTag"> disabled</span>
            <span>{">"}</span>
            You can't click me
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={b}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
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

export default HTMLLesson8;
