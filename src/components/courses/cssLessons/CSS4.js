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
        history.push("/css3/units");
      
  };

  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const previousLesson = () => {
  
        history.push("/css3/colors");
     
  };
  const c = `
  <style>

.container{
    width: 100%;
    height: 150px;
    background-color: purple;
}
</style>
<div class="container"></div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Dimensions</h1>
        <p>
          In <span className="purple">CSS</span> you can set dimensions to an
          element using the <span className="purple">width</span> and{" "}
          <span className="purple">height</span> property. These properties do
          not include padding, borders, margins.
          </p><p>
          You have different values for these properties:
          </p><p>
          <span className="purple">auto</span> - default, the browser calculates
          the height and width based on the content.
          </p><p>
          <span className="purple">length</span> - defines the height and width
          in px,cm etc. ( next lesson ).<br />
          </p><p>
          <span className="purple">%</span> - defines the height and width in
          percent of the containing block.
          </p><p>
          <span className="purple">fit-content</span> - the width will be based
          on the content.
          </p><p>
          <span className="purple">initial</span> - set the height and width to
          default value.
        </p><p>
          <span className="purple">inherit</span> - the height and width will be
          inherited from the parent value.
          </p><p>
          You have two more properties that are related to dimensions,{" "}
          <span className="purple">max-width</span> is used to set the maximum
          width of an element, this can be specified in length values and the{" "}
          <span className="purple">min-width</span> property is used to set the
          minimum width of an element, and for the height is the same.
          </p><p>
          For now we will use only pixels and percent as the length value,
          this two are the most used for dimensions.
        </p>
        <br/>
        <p className="res">
          Example using the <span className="purple">{"<div>"}</span> tag, the
          container took the width from the containing block and the height of
          150px;
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
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 100%</span>
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
            <span className="inTagValue">"container"</span>
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
          style={{ height: "170px" }}
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
