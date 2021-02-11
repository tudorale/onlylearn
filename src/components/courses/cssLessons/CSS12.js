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
        history.push("/css3/shadows");
      
  };

  const handleEditor = () => {

        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/position");
     
  };
  const c = `

  <style>

  .box{
  background-color: purple;
  width: 200px;
  height: 150px;
  transform: rotate(-45deg);
  }
  
  </style>
  
  <div class="box"></div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Transform</h1>
        <p>
          The <span className="purple">transform</span> property is applying 2D
          or 3D transformation to an element, you can rotate, scale, skew, move,
          etc., elements.
          </p>
          <p>
          The values that can be applied to the{" "}
          <span className="purple">transform</span> property:
          </p>
          
          <p>
          <span className="purple">none</span> - no transformation.
          </p>

          <p>
          <span className="purple">rotate(angle)</span> - 2D rotation, the angle
          for the rotation is defined in the 'angle' parameter.
          </p>
          <p>
          <span className="purple">rotate3d(x,y,z,angle)</span> - 3D rotation,
          you have also individuals 3D rotation, <i>rotateX(angle)</i>,{" "}
          <i>rotateY(angle) </i>
          and <i>rotateZ(angle)</i>.
          </p><p>
          <span className="purple">scale(x,y)</span> - 2D scale transformation,
          you can also scale individual using <i>scaleX(x)</i>, <i>scaleY(y)</i>
          , <i>scaleZ(z)</i> and <i>scale3d(x,y,z)</i> for 3D scale
          transformation.
          </p><p>
          <span className="purple">skew(x - angle, y-angle)</span> - 2D skew
          transformation along the X and Y axis, you can individualise X and Y
          using <i>skewX(angle)</i> and <i>skewY(angle)</i>.
          </p><p>
          <span className="purple">translate(x,y)</span> - 2D translation,
          individualise this using <i>translateX(x)</i> and <i>translateY(y)</i>{" "}
          , to make a 3D translation only for the Z axis: <i>translateZ(z)</i>{" "}
          and for 3D to all axis translation <i>translate3d(x,y,z)</i>.
          </p><p>
          <span className="purple">matrix(v,v,v,v,v,v)</span> - 2D
          transformation using a matrix with 6 values.
          </p><p>
          <span className="purple">matix3d(v * 16)</span> - 3D transformation,
          using a matrix with 16 values, "v * 16" is meaning 'v' for 16 times.
          </p><p>
          <span className="purple">perspective(n)</span> - 3D perspective view
          for a 3D element.
          </p><p>
          <span className="purple">initial</span> - set to its default value.
          </p><p>
          <span className="purple">inherit</span> - inherits the property from
          its parent element.
          </p><p>
            * For some of these you can use negative values.
        </p>
        <br/>
        <p className="res">Example using rotation.</p>
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
            <span className="prop">transform</span>
            <span>:</span>
            <span className="value"> rotate(-45deg)</span>
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
          style={{ height: "220px" }}
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
