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
        history.push("/css3/pseudo-elements");
      
  };

  const handleEditor = () => {
        history.push("/editor");
    
  };
  const previousLesson = () => {

        history.push("/css3/animations");
      
  };
  const c = `
<style>
  button{

    width: 120px;
    
    height: 40px;
    
    background-color: purple;
    
    border: none;
    
    border-radius: 5px;
    
    color: white;
    
}
    
    button:hover{
    
    background-color: red;
    
}
    
    </style>
    
    <button>Hover me!</button>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Pseudo classes</h1>
        <p>
          A <span className="purple">pseudo class</span> can be used to style and define a
          special behavior for an element, you can style the element when the user's cursor is over the element, when an input is focused.
        </p>
        <p>
          The syntax:{" "}
          <span className="purple">
            selector:pseudo-class {"{ property: value; }"}
          </span>
        </p>
        <p>All the pseudo classes:</p>
        <p>
          <span className="purple">:hover</span> - style the elements on mouse
          over (e.g. button:hover).
        </p>
        <p>
          <span className="purple">:focus</span> - style the elements when is
          focused, (e.g. input:focus).
        </p>
        <p>
          <span className="purple">:empty</span> - selects the elements that
          has no children.
        </p>{" "}
        <p>
          <span className="purple">:enabled</span> - selects the elements that
          are enabled, (e.g. input:enabled).
        </p>{" "}
        <p>
          <span className="purple">:invalid</span> - selects the elements with
          an invalid value.
        </p>{" "}
        <p>
          <span className="purple">:lang(language)</span> - selects the
          elements) with a lang attribute with the value of <i>langauge</i>,
          (e.g. p:lang(en)).
        </p>{" "}
        <p>
          <span className="purple">:first-child</span> - selects element that is
          the first child of its parent, (e.g. div p:first-child).
        </p>{" "}
        <p>
          <span className="purple">:first-of-type</span> - selects element that
          is the first element of its parent, (e.g. p:first-of-type).
        </p>{" "}
        <p>
          <span className="purple">:last-child</span> - selects the element that
          is the last child of its parent, (e.g. div p:last-child).
        </p>{" "}
        <p>
          <span className="purple">:link-of-type</span> - selects the element
          that is the last element of its parent.
        </p>{" "}
        <p>
          <span className="purple">:active</span> - style the active element,
          (e.g. a:active).
        </p>{" "}
        <p>
          <span className="purple">:not(selector)</span> - selects every element
          that is not a <i>selector</i>, (e.g. :not(span)).
        </p>{" "}
        <p>
          <span className="purple">:checked</span> - style the element when is
          checked, (e.g. input:checked).
        </p>{" "}
        <p>
          <span className="purple">:nth-child(n)</span> - selects the element
          that is <i>n</i> child of its parent.
        </p>{" "}
        <p>
          <span className="purple">:nth-last-child(n)</span> - selects the
          element that is the <i>n</i> child of its parent, counting from the
          last child, (e.g. p:nth-last-child(3)).
        </p>{" "}
        <p>
          <span className="purple">:nth-of-type(n)</span> - selects the element
          that is <i>n</i> element of its parent.
        </p>{" "}
        <p>
          <span className="purple">:only-of-type</span> - selects only the
          elements that are the type of that element in his parent, (e.g.
          p:only-of-type).
        </p>{" "}
        <p>
          <span className="purple">:only-child</span> - selects only the
          elements that are childs of its parent, (e.g. p:only-child).
        </p>
        <p>
          <span className="purple">:out-of-range</span> - selects the element(s)
          with a value outside a specified range, (e.g. input:out-of-range).
        </p>
        <p>
          <span className="purple">:read-only</span> - selects the element(s)
          with a "readonly" attribute.
        </p>
        <p>
          <span className="purple">:valid</span> - selects all the inputs with a
          valid value, (e.g. input:valid).
        </p>
        <p>
          <span className="purple">:visited</span> - style the element when the
          link is visited, (e.g. a:visited).
        </p>
        <p>
          <span className="purple">:required</span> - selects the elements with
          the "required" attribute, (e.g. input:required).
        </p>
        <p>
          <span className="purple">:link</span> - style the element when the
          link is unvisited, (e.g. a:link).
        </p>
        <p>
          <span className="purple">:optional</span> - style the elements that do
          not have the "required attribute".
        </p>
        <p>
          <span className="purple">:disabled</span> - style the elements that
          have the "disabled" attribute.
        </p>
        <br />
        <p className="res">Example using the :hover class.</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"button"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 120px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 40px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border</span>
            <span>:</span>
            <span className="value"> none</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border-radius</span>
            <span>:</span>
            <span className="value"> 5px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"button"}</span>
            <span>:</span>
            <span className="pseudo">hover</span>
            <span>{"{"}</span>
          </p>

          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> red</span>
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
            <span className="tag">button</span>
            <span>{">"}</span>
            <span>Hover me!</span>
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
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
