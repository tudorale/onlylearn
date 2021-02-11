import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson10() {
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
    
        history.push("/html5/select&option");
      
  };
  const previousLesson = () => {

        history.push("/html5/inputs");
    
  };
  const handleEditor = () => {

        history.push("/editor");
    
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const l = `
  <label for="nameInput" style="font-size: 1.1rem; color: white; margin-right: 5px">Click me</label>

  <input type="name" id="nameInput" style="height: 20px"/>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Labels</h1>
        <p>
          When you use inputs in your website you may want to use the{" "}
          <span className="purple">{"<label>"}</span> tag, this element needs to
          be closed and without the attribute called{" "}
          <span className="purple">for</span> it doesn't work correctly, the
          value of this attribute needs to be the same as the ID from the input
          that you want to represent your label.
        </p>
        <p>
          When you click on the text from this tag it will be focusing the input
          that is representing, without an input with an ID your label will not
          work properly, when you use this tag make sure the ID from the input
          and the value from the "for" attribute will be the same!. Also, you
          cannot have one label for more inputs, you need one label for each
          input.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">label</span>
            <span className="inTag"> for</span>
            <span>=</span>
            <span className="inTagValue">"nameInput"</span>
            <span>{">"}</span>

            <span>Click me</span>

            <span>{"<"}</span>
            <span className="tag">/label</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"name"</span>
            <span className="inTag"> id</span>
            <span>=</span>
            <span className="inTagValue">"nameInput"</span>
            <span>{" />"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={l}
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

export default HTMLLesson10;
