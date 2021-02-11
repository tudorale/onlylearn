import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";
import "../../../../main.css";
function HTMLLesson6() {
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

        history.push("/html5/images");
      
  };
  const previousLesson = () => {
 
        history.push("/html5/attributes");
      
  };
  const handleEditor = () => {
  
        history.push("/editor");
      
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const c = `
    <div style="color: blue; font-size: 1.1rem">
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    </div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Container</h1>
        <p>
          Maybe you are asking yourself: what is a container?, basically is a
          special tag called <span className="purple">{"<div>"}</span> or other
          tags that wrap other elements.
        </p>
        <p>
          {" "}
          What is the purpose? An example is when you want to move something on
          your page, the best way is to wrap what you want to position within a{" "}
          <span className="purple">div</span> tag, when you add the position to
          it you will move the entire container and not each element, also you
          can add styles to that container and all the elements in it will get
          the styles of it.{" "}
        </p>
        <p>
          Other tags serve as a wrapper but we will talk more about that in the
          'Layout' lesson, also can make shapes with this element like
          rectangle, square with this tag and some{" "}
          <span className="purple">CSS</span> styling
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> style</span>
            <span>=</span>
            <span className="inTagValue">"color: blue"</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Lorem ipsum</span>
            <span>{"<"}</span>
            <span className="tag">{"/p"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Lorem ipsum</span>
            <span>{"<"}</span>
            <span className="tag">{"/p"}</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          style={{ height: "100px" }}
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p>
          Note: You see how we added the attribute style with the value of color 
          blue at the parent tag and all of his children get the color of blue.
        </p>
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

export default HTMLLesson6;
