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
        history.push("/css3/word");
     
  };

  const handleEditor = () => {
        history.push("/editor");
      
  };
  const previousLesson = () => {
        history.push("/css3/outline");
   
  };

  const c = `
  <style>

  div p{
  
  color: red;
  
  font-size: 1.2rem;
  
  }
  
  </style>
  
  <div>
  
  <p>Text 1</p>
  
  <p>Text 2</p>
  
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Combinators</h1>
        <p>
          Combinators in <span className="purple">CSS</span> are representing the
          relationship between the selectors, between the simple selectors we
          can include a combinator ( a relationship ).
        </p>{" "}
        <p>
          In <span className="purple">CSS</span> are four different
          combinators:
        </p>{" "}
        <p>
          <span className="purple">descendant selector (space)</span> - the
          descendant selector matches all elements that are descendants of a
          specified element, (e.g. div p - selects all the p elements inside the
          div).
        </p>{" "}
        <p>
          <span className="purple">child selector ({">"})</span> - is selecting
          all the elements that are the children of a specified element, (e.g.
          div {">"} p - selects all the p elements where the parent is the div).
        </p>{" "}
        <p>
          <span className="purple">adjacent sibling selector (+)</span> -
          adjacent is meaning "immediately following" and selects all the
          elements that are the adjacent sibling of a specified element, the
          sibling elements must have the same parent, (e.g. div + p - selects
          all the p elements that are placed immediately after the div).
        </p>{" "}
        <p>
          <span className="purple">general sibling selector (~)</span> - selects
          all the elements that are siblings of a specified element. (e.g. div ~
          p - selects all the p elements that are preceded by a div element).
        </p>{" "}
        <p>* View the "Document tree" lesson for better understanding.</p>
        <br />
        <p className="res">Example using descendant selector</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"div p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> red</span>
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

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Text 1</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Text 2</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
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
          srcDoc={c}
          title="output"
          style={{ height: "100px" }}
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

export default CSS1;
