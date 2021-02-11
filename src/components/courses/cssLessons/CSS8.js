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
        history.push("/css3/margin");
      
  };

  const handleEditor = () => {
        history.push("/editor");
      
  };
  const previousLesson = () => {
        history.push("/css3/padding");
     
  };
  const c = `

  <style>

  .box{
  
  width: 150px;
  
  height: 150px;
  
  background-color: purple;
  
  border-radius: 10px;
  border: 5px solid white;
  
  }
  
  </style>
  
  <div class="box"></div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Border</h1>
        <p>
          The <span className="purple">border</span> properties allow you to
          add to the element a border, you can style the border with different
          properties:
        </p>
        <h3>
          The <span className="purple">border-style</span> property
        </h3>
        <p>
          Specifies what type of border to be, the values that you can use for
          this property can be:
          <span className="purple"> dotted</span>,{" "}
          <span className="purple">dashed</span>,{" "}
          <span className="purple">solid</span>,{" "}
          <span className="purple">double</span>,{" "}
          <span className="purple">groove</span>,{" "}
          <span className="purple">ridge</span>,{" "}
          <span className="purple">none</span>,{" "}
          <span className="purple">hidden</span>,{" "}
          <span className="purple">outset</span>.
        </p>
        <h3>
          The <span className="purple">border-width</span> property
        </h3>
        <p>
          Specifies the width of all the four borders, the values can be a
          specific size using the <span className="purple">length values </span>
          or pre-defined values: <span className="purple">thick</span>,{" "}
          <span className="purple">medium</span>,{" "}
          <span className="purple">thin</span>.
        </p>
        <h3>
          The <span className="purple">border-color</span> property
        </h3>
        <p>
          Set the color of all the four borders, the value can be the name of
          the color, HEX, RGB, HSL, transparent, if the border color is not set,
          it inherits the color of the actual element.
        </p>
        <h3>
          The <span className="purple">border-radius</span> property
        </h3>
        <p>
          Is used to add rounded borders to the element, the value for this
          property can be a<span className="purple"> length value</span>, (px,
          pt, etc.).
        </p>
        <p>
          You can also style each side individual using{" "}
          <span className="purple">border</span>-<i>SIDE</i>-<i>property</i>,
          for the '<i>SIDE</i>' you can use, top, bottom, left and right, and
          for the <i>property</i> you can style the color, width and radius.
          Also you can style the corners using{" "}
          <span className="purple">border-</span>
          <i>SIDE</i>-<i>SIDE</i>-<i>property</i>, for the '<i>SIDE</i>-
          <i>SIDE</i>' you can use: bottom-left, bottom-right,top-left,
          top-right.
        </p>
        <h3>
          The <span className="purple">border</span> property
        </h3>
        <p>
          The <span className="purple">border</span> property is a shorthand
          property for all the properties from above, and the order doesn't
          matter, but the style of the border is required.
        </p>
        <p>
          The border property can be used for many elements like buttons, inputs,
          or for a paragraph and so more.
        </p>
        <br />
        <p className="res">Example using the shorthand method.</p>
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
          </p>
          <p className="styles">
            <span className="prop">border</span>
            <span>:</span>
            <span className="value"> 5px solid white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border-radius</span>
            <span>:</span>
            <span className="value"> 10px</span>
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
          style={{ height: "175px" }}
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
