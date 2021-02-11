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
        history.push("/css3/rules");
      
  };

  const handleEditor = () => {
        history.push("/editor");
   
  };
  const previousLesson = () => {
  
        history.push("/css3/document-tree");
     
  };

  const c = `
  <style>

.box{

width: 200px;

height: 150px;

background-color: purple;

position: absolute;

z-index: -1;

}

p{

color: white;

font-size: 1.2rem;

}

</style>

<div class="box"></div>

<p>Lorem ipsum</p>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Z-index</h1>
        <p>
          The <span className="purple">z-index</span> property is specifing the
          stack order for an element.
        </p>{" "}
        <p>
          An element with a greater stack order will be always over/in front of an
          element with a lower stack order.
        </p>{" "}
        <p>
          This property only works for positioned elements, elements with
          position absolute, relative, fixed or sticky.
        </p>{" "}
        <p>The value for this property can be:</p>{" "}
        <p>
          <span className="purple">auto</span> - default value, set the stack
          order equal to its parents.
        </p>{" "}
        <p>
          <span className="purple">number</span> - set the stack order for the
          element, negative numbers are allowed.
        </p>{" "}
        <p>
          And the two values that are for almost every CSS property,{" "}
          <span className="purple">initial</span> and{" "}
          <span className="purple">inherit</span>.
        </p>
        <br />
        <p className="res">
          Example, the purple box should be over the text, but the box has the
          z index property with the value "-1", the text have no index, so, it
          will be greater than the box.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>
          <p className="style">
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 200px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 150px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>{" "}
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> absolute</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">z-index</span>
            <span>:</span>
            <span className="value"> -1</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
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
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Lorem ipsum</span>
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
          style={{ height: "185px" }}
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
