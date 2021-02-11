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

        history.push("/css3/cursor");
     
  };

  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const previousLesson = () => {
  
        history.push("/css3/functions");
    
  };
  const c = `
  <style>

.box{

background-color: purple;

width: 250px;

height: 200px;

filter: invert(100%);

}

</style>

<div class="box"></div>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Filter</h1>
        <p>
          The <span className="purple">filter</span> property allows you to
          define visual effects, if you want to add multiple filters to an
          element, separate each filter with a space, this property is used
          often for images.
          </p><p>
          The values for this property can be:
          </p><p>
          <span className="purple">none</span> - default value, no effects.
          </p><p>
          <span className="purple">brightness(%)</span> - adjusts the brightness
          of the image.
          </p><p>
          <span className="purple">contrast(%)</span> - adjusts the contrast of
          the image.
          </p><p>
          <span className="purple">blur(px)</span> - apply a blur effect to the
          image.
          </p><p>
          <span className="purple">greyscale(%)</span> - converts the image to
          grayscale, negative values are not allowed.
          </p><p>
          <span className="purple">invert(%)</span> - inverts the colors in the
          image, negative values are not allowed.
          </p><p>
          <span className="purple">opacity(%)</span> - set the opacity level for
          the image, (transparency).
          </p><p>
          <span className="purple">saturate(%)</span> - saturates the image,
          negative values are not allowed.
          </p><p>
          <span className="purple">sepia(%)</span> - converts the image to sepia
          effect, negative values are not allowed.
          </p><p>
          <span className="purple">drop-shadow(h,v,b,c)</span> - apply a drop
          shadow effect to the image, h - required, pixel value for the
          horizontal shadow, v - required, pixel value for the vertical shadow,
          b - optional, blur for the shadow, must be in pixels, c - optional,
          color for the shadow.
          </p><p>
          <span className="purple">hue-rotate(deg)</span> - apply hue rotation
          to the image, maximum value is 360deg.
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
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
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
            <span className="value"> 250px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 200px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">filter</span>
            <span>:</span>
            <span className="value"> invert(100%)</span>
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
          style={{ height: "215px" }}
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
