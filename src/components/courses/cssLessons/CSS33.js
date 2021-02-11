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

        history.push("/css3/recommendation");
     
  };

  const handleEditor = () => {
    
        history.push("/editor");
      
  };
  const previousLesson = () => {

        history.push("/css3/filter");
     
  };
  const c = `
  <style>

.box{

background-color: purple;

width: 250px;

height: 200px;

cursor: pointer;

}

</style>

<div class="box"></div>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Cursor</h1>
        <p>
          The <span className="purple">cursor</span> property specifies how the
          mouse cursor should be displayed when is over an element. in <span className="purple">CSS</span> you
          have many values for this property but we will show you the most
          important.
          </p><p>
          <span className="purple">auto</span> - default, the browser is setting
          the cursor.
          </p><p>
          <span className="purple">default</span> - default cursor.
          </p><p>
          <span className="purple">grab</span> - indicates that something can be
          grabbed.
          </p><p>
          <span className="purple">grabbing</span> - indicates that something is
          grabbed.
          </p><p>
          <span className="purple">none</span> - no cursor is rendered for the
          element.
          </p><p>
          <span className="purple">pointer</span> - the cursor is a pointer,
          indicates a link.
          </p><p>
          <span className="purple">zoom-in</span> - indicates that something can
          be zoomed in.
          </p><p>
          <span className="purple">zoom-out</span> - indicates that something
          can be zoomed out.
          </p><p>
          <span className="purple">copy</span> - indicates that something can be
          copied.
          </p><p>
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
            <span className="prop">cursor</span>
            <span>:</span>
            <span className="value"> pointer</span>
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
        <p className="res">Result, put your cursor over the box</p>
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
