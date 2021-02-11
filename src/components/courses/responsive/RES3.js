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
  
        history.push("/responsive/flex-items");
   
  };
  const previousLesson = () => {
   
        history.push("/responsive/media-queries");
     
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
}
.box2{
  background-color: cyan;
}
.box3{
  background-color: crimson;
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
        <h1>Flexbox</h1>
        <p>
          The <span className="purple">flexbox</span> also called flexible box,
          it is a layout tool, makes it easier to design responsive layouts.{" "}
        </p>
        <p>
          To start using flexbox you have to define a flex container, you can do
          that with the <span className="purple">display</span> property and the
          value of <span className="purple">flex</span>. The container and the
          elements from the container are controlled using specific properties
          that can be used only if the parent is a flexible box.
        </p>
        <p>For the flex container you have the following properties:</p>
        <h3>
          The <span className="purple">flex-direction</span> property
        </h3>
        <p>
          Defines in which direction the container will stack the items from the
          container. The values for this property can be:
        </p>
        <p>
          <span className="purple">column</span> - stacks the items vertically,
          (top to bottom).
        </p>
        <p>
          <span className="purple">row</span> - default value, stacks the items
          horizontally, (left to right).
        </p>
        <p>
          <span className="purple">column-reverse</span> - stacks the items
          vertically but from bottom to top.
        </p>
        <p>
          <span className="purple">row-reverse</span> - stacks the items
          horizontally but from right to left.
        </p>
        <h3>
          The <span className="purple">flex-wrap</span> property
        </h3>
        <p>
          Specifies whether the flex items should wrap or not, the values for
          this property can be <span className="purple">wrap</span>,{" "}
          <span className="purple">nowrap</span>,{" "}
          <span className="purple">wrap-reverse</span>.
        </p>
        <p>
          You can combine these 2 properties,{" "}
          <span className="purple">flex-direction</span> and{" "}
          <span className="purple">flex-wrap</span> with the shorthand property
          called <span className="purple">flex-flow</span>, the first value
          specified is the direction and the second value is the wrapping mode.
        </p>
        <h3>
          The <span className="purple">justify-content</span> property
        </h3>
        <p>Aligns the flex items, the values for this property can be:</p>
        <p>
          <span className="purple">center</span> - aligns the flex items in the
          center of the container.
        </p>
        <p>
          <span className="purple">space-around</span> - the flex items will
          have a space before, between and after.
        </p>
        <p>
          <span className="purple">space-between</span> - the flex items will
          have a space between them.
        </p>
        <p>
          <span className="purple">flex-start</span> - the flex items will be
          aligned at the beginning of the container (default).
        </p>
        <p>
          <span className="purple">flex-end</span> - the flex items will be
          aligned at the end of the container.
        </p>
        <h3>
          The <span className="purple">align-content</span> property
        </h3>
        <p>
          Align the flex lines, based on the value from this property the items
          from the container ( the content ) will be aligned. The values for
          this property can be:
        </p>
        <p>
          <span className="purple">center</span> - the flex lines will be
          displayed in the middle of the container.
        </p>
        <p>
          <span className="purple">stretch</span> - the flex lines are stretched
          and will take the remaining space (default).
        </p>
        <p>
          <span className="purple">flex-start</span> - the flex lines will be at
          the start of the container.
        </p>
        <p>
          <span className="purple">flex-end</span> - the flex lines will be at
          the end of the container.
        </p>
        <p>
          <span className="purple">space-around</span> - the flex lines will
          have space before, between, and after them.
        </p>
        <p>
          <span className="purple">space-around</span> - the flex lines will
          have a equal space between them.
        </p>
        <h3>
          The <span className="purple">align-items</span> property{" "}
        </h3>
        <p>Align the flex items based on the following values:</p>
        <p>
          <span className="purple">center</span> - the items will be in the
          middle of the container.
        </p>
        <p>
          <span className="purple">stretch</span> - the items will be stretched
          and the container will be filled (default).
        </p>
        <p>
          <span className="purple">baseline</span> - the items will be aligned
          based on their baseline.
        </p>
        <p>
          <span className="purple">flex-start</span> - the items will be at the
          top of the container.
        </p>
        <p>
          <span className="purple">flex-end</span> - the items will be at the
          bottom of the container.
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
