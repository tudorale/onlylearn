import React, { useEffect, useContext } from "react";
import "./mainRes.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";

function RES() {
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
   
        history.push("/responsive/flexbox&media-queries");
      
  };
  const previousLesson = () => {
   
        history.push("/responsive/flexbox");
      
  };
  const handleEditor = () => {
    
        history.push("/editor");
   
  };
  const c = `
  <style>

.container{
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: space-between;
}

.box1, .box2, .box3{
width: 150px;
height: 150px;
}
.box1{
  background-color: lightgreen;
  order: 3;
}
.box2{
  background-color: cyan;
  order: 1;
}
.box3{
  background-color: crimson;
  order: 2;
}

</style>

<div class="container">

<div class="box1"></div>

<div class="box2"></div>

<div class="box3"></div>

</div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Flex items</h1>
        <p>
          The <span className="purple">flex items</span> are the child elements
          from a flex container, these items will become automatically flexible.
          You have specific properties for flexible items:
        </p>
        <h3>
          The <span className="purple">order</span> property
        </h3>
        <p>
          Specifies the order for a flex item, the value for this property must
          be a number, the default value is <span className="purple">0</span>.
        </p>
        <h3>
          The <span className="purple">flex-grow</span> property
        </h3>
        <p>
          Specifies how much a flex item should grow. The value also must be a
          number and the default value is <span className="purple">0</span>.
        </p>
        <h3>
          The <span className="purple">flex-basis</span> property
        </h3>
        <p>
          Specifies the initial length for a flex item, the value must be a{" "}
          <span className="purple">length value</span>.
        </p>
        <h3>
          The <span className="purple">flex-shrink</span> property
        </h3>
        <p>
          Specifies how much a flex item will shrink, the value must be a number
          and the default value is <span className="purple">1</span>.
        </p>
        <p>
          We also have a shorthand property for the{" "}
          <span className="purple">flex-grow</span>,{" "}
          <span className="purple">flex-shrink</span> and{" "}
          <span className="purple">flex-basis</span> properties, called{" "}
          <span className="purple">flex</span>, (e.g. flex: 1 2 300px), we have
          also some predefined values: <span className="purple">initial</span>,{" "}
          <span className="purple">auto</span>,{" "}
          <span className="purple">none</span>,{" "}
          <span className="purple">
            <i>positive number</i>
          </span>
        </p>
        <h3>
          The <span className="purple">align-self</span> property
        </h3>
        <p>
          Specifies how the flexible element should be aligned inside the
          flexible container, this property will override the{" "}
          <span className="purple">align-items</span> property set on the
          container. The values for this property are the same as for the{" "}
          <span className="purple">align-items</span> property, plus one value
          that is the default one, called <span className="purple">auto</span>,
          this value will inherit the value from the align items property in the
          parent container, if that property is not found the value will be{" "}
          <span className="purple">stretch</span>.
        </p>
        <br />
        <p className="res">
          Example with the same code from the last lesson but with the{" "}
          <span className="purple"> order </span>
          property, the order should be lightgreen, cyan, crimson, but with this
          property we can change that order.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element class">{".container"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">display</span>
            <span>:</span>
            <span className="value"> flex</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">flex-direction</span>
            <span>:</span>
            <span className="value"> column</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 600px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">justify-content</span>
            <span>:</span>
            <span className="value"> space-between</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element class">{".box1"}</span>
            <span>,</span>
            <span className="element class">{" .box2"}</span>
            <span>,</span>
            <span className="element class">{" .box3"}</span>

            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 150px</span>
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

          <p className="style">
            <span className="element class">{".box1"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> lightgreen</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">order</span>
            <span>:</span>
            <span className="value"> 3</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element class">{".box2"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">order</span>
            <span>:</span>
            <span className="value"> 1</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box3"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> crimson</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">order</span>
            <span>:</span>
            <span className="value"> 2</span>
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
            <span className="inTagValue">"container"</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box1"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box2"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box3"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
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
          style={{ height: "530px" }}
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

export default RES;
