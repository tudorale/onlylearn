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
        history.push("/css3/comments");
     
  };

  const handleEditor = () => {

        history.push("/editor");
     
  };
  const previousLesson = () => {
 
        history.push("/css3/pseudo-classes");
    
  };
  const c = `
  <style>

  p{
  
  color: white;
  
  font-size: 1.2rem;
  
  }
  
  p::first-letter{
  
  color: purple;
  
  font-size: 2rem;
  }
  p::after{
  
  content: "This was added with CSS.";
  
  font-size: 1rem;
  
  }
  
  }
  
  </style>
  
  <p>Pseudo elements are cool.</p>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Pseudo elements</h1>
        <p>
          A <span className="purple">pseudo element</span> is used to style
          specified parts of an element, for example you can style the first
          letter, or the first line of an element, insert content after or
          before the element's content.
        </p>
        <p>
          The syntax is simple:{" "}
          <span className="purple">
            selector::pseudo-element{"{ property: value; }"}
          </span>
        </p>
        <p>All the pseudo elements:</p>
        <p>
          <span className="purple">::first-letter</span> - select the first
          letter of an element/of each element, this can be applied to block
          elements and not all CSS properties can be added.
        </p>
        <p>
          <span className="purple">::first-line</span> - select the first line
          of an element/of each element, this can be applied to block elements
          and not all CSS properties can be added.
        </p>
        <p>
          <span className="purple">::after</span> - insert something after the
          content of the element/of each element, this pseudo element has to
          contain the <span className="purple">content</span> property, the
          value can be a string or something else, like url("..").
        </p>
        <p>
          <span className="purple">::before</span> - insert something before the
          content of the element/of each element, this pseudo element has to
          contain the <span className="purple">content</span> property, the
          value can be a string or something else, like url("..").
        </p>
        <p>
          <span className="purple">::selection</span> - select a portion of an
          element that is selected by the user, the properties that can be
          applied are: color, background, cursor, outline.
        </p>
        <p>
          You can combine this pseudo elements, you can add for the exact same
          element all 4 pseudo elements.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"p"}</span>
            <span>::</span>
            <span className="pseudo">first-letter</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element">{"p"}</span>
            <span>::</span>
            <span className="pseudo">after</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">content</span>
            <span>:</span>
            <span className="value"> "This was added with CSS."</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1rem</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Pseudo elements are cool.</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          style={{ height: "90px" }}
          frameBorder="0"
          scrolling="no"
          sandbox="allow-scripts"
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

export default CSS1;
