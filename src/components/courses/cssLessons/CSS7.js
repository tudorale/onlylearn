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
        history.push("/css3/border");
      
  };

  const handleEditor = () => {
        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/font");
      
  };
  const c = `
  <style>

  .box{

  width: fit-content;
  padding: 25px;
  
  background-color: purple;
  
  color: white;
  
  }
  
  </style>
  
  <div class="box">Content</div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Padding</h1>
        <p>
          <span className="purple">CSS</span> Padding is the property that is
          used to generate space around the element's content, inside of any
          defined borders, you have full control over this property, you have
          properties for each side of an element (top, right, bottom, and left).
          The value for these properties can be length values, %, and inherit,
          negative values are not allowed.
          </p><p>
          The properties are:
          </p><p>
          <span className="purple">padding-top</span>
          </p><p>
          <span className="purple">padding-right</span>
          </p><p>
          <span className="purple">padding-bottom</span>
          </p><p>
          <span className="purple">padding-left</span>
          </p><p>
          
          You can use the shorthand property, this means that you can specify
          all the padding properties in one property, the{" "}
          <span className="purple">padding</span> property is a shorthand
          property for the individual padding properties, this property takes 4
          values, when you use this method with 4 values has to be in exact
          order: top right bottom left, (e.g. padding: 15px 25px 15px 15px),
          another method is with 3 values the order must be top right-left
          bottom, (e.g. padding: 15px 30px 25px), 15px for the top, 30px for
          right and left and 25px for the bottom, another way is the 2 values
          method, this means that the first value is the padding for the top and
          bottom and the second is for right and left (e.g. padding: 30px 25px),
          and in the final you can use only one value that is applied to all
          four sides (e.g. padding: 30px).<br /><br /> The shorthand property is applied to
          more <span className="purple">CSS</span> properties, like margin, and
          the order is the same: top right bottom left, to remember this, think
          about how the clock works, from top to right.
          </p><p>
          
          An important thing is that if you have a container with the width
          200px or other value and you have padding 30px for all sides, the
          actual container will be 360px, if you want to keep the initial width
          of the container and ignore the padding you can use the
          <span className="purple"> box-sizing</span> property with the value of
          <span className="purple"> border-box</span>.
        </p>
        <br/>
        <p className="res">
          Example using the shorthand property with 1 value for all the four
          sides.
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
            <span className="value"> fit-content</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 25px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
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
            <span>Content</span>
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
          style={{ height: "85px" }}
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
