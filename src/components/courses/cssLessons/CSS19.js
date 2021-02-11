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

        history.push("/css3/combinators");
     
  };

  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/overflow");
     
  };

  const c = `
  <style>

.box{

outline: solid 2px cyan;

outline-offset: 5px;

border: 2px solid orange;

background-color: purple;

width: 200px;

height: 150px;
margin-top: 15px;
margin-left: 5px;

}

</style>

<div class="box"></div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Outline</h1>
        <p>
          The <span className="purple">outline</span> property is actually a shorthand
          property for the following CSS properties:{" "}
          <span className="purple">outline-color</span>,{" "}
          <span className="purple">outline-style</span>,{" "}
          <span className="purple">outline-width</span>. <br />
          This property is similar to the border property but is not exactly the
          same, the outlines never take up space, they are outside of an
          element's content, and the element's total width and height will not be affected by the width of the outline.
        </p>{" "}
        <p>
          Assigning the outline a value of <span className="purple">0</span> or{" "}
          <span className="purple">none</span> will remove the browser's default
          focus style, if you can interact with an element it must have a
          visible focus indicator, (e.g. a button, when you click it the outline
          is appearing).
        </p>
        <h3>
          The <span className="purple">outline-style</span> property
        </h3>
        <p>
          Specifies the style of the outline, you have different values but the
          most important are: <span className="purple">dotted</span>,{" "}
          <span className="purple">dashed</span>,{" "}
          <span className="purple">solid</span>,{" "}
          <span className="purple">double</span>,{" "}
          <span className="purple">none</span>,{" "}
          <span className="purple">hidden</span>.
        </p>
        <h3>
          The <span className="purple">outline-width</span> property
        </h3>
        <p>
          Specifies the width of the outline, we have 3 specific values:{" "}
          <span className="purple">thin</span>,{" "}
          <span className="purple">medium</span>,{" "}
          <span className="purple">thick</span> or you can put the values a
          specific size in px, cm, em, .etc.
        </p>
        <h3>
          The <span className="purple">outline-color</span> property
        </h3>
        <p>
          Specifies the color for the outline, the value can be the name of the
          color, HEX, RGB, HSL or a specific value called{" "}
          <span className="purple">invert</span>, this value is performing a
          color inversion based on the color of the background and is making
          sure that the outline is visible.
        </p>
        <h3>
          The <span className="purple">outline-offset</span> property
        </h3>
        <p>
          This property is adding a space between the outline and the border,
          the space between an element and the outline is transparent, this
          property must be set individual, can not be added in the shorthand
          property for the outline.
        </p>{" "}
        <p>
          * The order for the shorthand property doesn't matter, you can set the
          order how you want, (e.g. color, width, style or width, style, color).
        </p>
        <br />
        <p className="res">
          Example, the outline is cyan and the border is orange, the space
          between the border and the outline is set by the offset and is
          transparent.
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
            <span className="prop">outline</span>
            <span>:</span>
            <span className="value"> solid 2px cyan</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">outline-offset</span>
            <span>:</span>
            <span className="value"> 5px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border</span>
            <span>:</span>
            <span className="value"> 2px solid orange</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
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
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          style={{ height: "190px" }}
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
