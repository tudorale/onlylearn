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
        history.push("/css3/box-model");
     
  };

  const handleEditor = () => {
    let bar = document.querySelector(".loading");

    if (bar) {
      bar.style.display = "block";
      bar.style.width = "100%";
    }

    setTimeout(() => {
      if (bar.style.width === "100%") {
        history.push("/editor");
      }
    }, 600);
  };
  const previousLesson = () => {
    let bar = document.querySelector(".loading");
    if (bar) {
      bar.style.display = "block";
      bar.style.width = "100%";
    }

    setTimeout(() => {
      if (bar.style.width === "100%") {
        history.push("/css3/border");
      }
    }, 600);
  };
  const c = `

  <style>

  .box{
  
  width: 200px;
  
  height: 150px;
  
  background-color: purple;
  
  margin-top: 20px;
  
  margin-bottom: 20px;
  
  margin-right: 25px;
  
  margin-left: 25px;
  
  }
  
  </style>
  
  <div class="box"></div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Margin</h1>
        <p>
          The <span className="purple">margin</span> properties are used to
          create space around elements or outside of any defined borders ( we
          will see more about in the "Box model" lesson ), you have full control
          over the margins of an element, like the padding you can set the
          margin for each side (top, right, bottom and left).
        </p>
        <p>The properties are:</p>
        <p>
          <span className="purple">margin-top</span>
        </p>
        <p>
          <span className="purple">margin-right</span>
        </p>
        <p>
          <span className="purple">margin-bottom</span>
        </p>
        <p>
          <span className="purple">margin-left</span>
        </p>

        <p>The value for these properties can be:</p>
        <p>
          <span className="purple">auto</span> - the browser is calculating the
          margin.
        </p>
        <p>
          <span className="purple">length values</span> - px, cm, pt etc.
        </p>
        <p>
          <span className="purple">%</span> - set the margin in percent of the
          width of the containing element.
        </p>
        <p>
          <span className="purple">inherit</span> - the margin is inherited from
          the parent element.
        </p>
        <p>* Negative values are allowed.</p>
        <p>
          Like the border and padding, margin also has a shorthand property, the
          order is the same: top right bottom left, as the padding you can have
          the shorthand property with 4 values (top right bottom left ), 3
          values (top right and left bottom), 2 values ( top and bottom right
          and left) and 1 value for each side.
        </p>
        <p>
          You can center horizontally an element if you use the{" "}
          <span className="purple">margin</span> property with the value to
          auto, make sure to add a specific width to the element before adding this
          margin.
        </p>
        <br />
        <p className="res">
          Example, also you can use the shorthand property like this: margin:
          20px 25px 20px 25px, but we preferred to use it for each side and you can
          see how the container has space around him.
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
          </p>
          <p className="styles">
            <span className="prop">margin-top</span>
            <span>:</span>
            <span className="value"> 20px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-bottom</span>
            <span>:</span>
            <span className="value"> 20px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-right</span>
            <span>:</span>
            <span className="value"> 25px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-left</span>
            <span>:</span>
            <span className="value"> 25px</span>
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
