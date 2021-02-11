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
      history.push("/css3/dimensions");
     
  };

  const handleEditor = () => {
      history.push("/editor");
     
  };
  const previousLesson = () => {
      history.push("/css3/priority");
     
  };
  const c = `
  <style>

  .container{
  
  background-color: purple;
  
  }
  p{
      font-size: 1.1rem;
      color: white;
  }
  
  </style>
  
  <div class="container">
  
  <p>I'm a child</p>
  
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Colors</h1>
        <p>
          To add a color to a text (e.g. paragraph, heading) we use the{" "}
          <span className="purple">color</span> property and the value is the
          color we want, we can use RGBA, RGBA, HSL, HSL, HEX code or the name
          of the color.
          </p><p>
          Now, if we have a container or we want to style the background of our
          webpage (body tag) we will use another{" "}
          <span className="purple">CSS</span> property called{" "}
          <span className="purple">background-color</span>.
          </p><p>
          We have more properties related to the background:
          </p><p>
          <span className="purple">background-image</span> - specifies an image
          to use as the background for an element, for the value you have to use
          url("") and the path to your image. (e.g. background-image:
          url("./my_image.png"));
          </p><p>
          <span className="purple">background-repeat</span> - the property
          repeats an image both horizontally and vertically or you can set it to
          no-repeat, the values for this property can be: repeat-x (it will be
          repeated horizontally), repeat-y (it will be repeated vertically),
          no-repeat(only once).
          </p><p>
          <span className="purple">background-position</span> - is used to
          specify the position of the background image, we will learn more about
          the value of this property on the "Position" lesson.
          </p><p>
          <span className="purple">background-attachment</span> - specifies
          whether the background image should scroll or be fixed, the value can
          be scroll or fixed.
          </p><p>
          <span className="purple">background-size</span> - specifies the size
          of the background image, the values can be: auto, cover, contain or
          set the width and height with length values or percentage.
          </p>
          <p>
          We have a shorthand property for all these properties from above, the
          property is called <span className="purple">background</span>, the
          value for this property is: color image position/size repeat
          attachment. It does not matter if one of the value is missing, (e.g.
          background: red) is allowed.
          </p>
        <br/>
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
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
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
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>I'm a child</span>
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
