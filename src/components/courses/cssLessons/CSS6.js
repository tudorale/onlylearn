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
        history.push("/css3/padding");
     
  };

  const handleEditor = () => {
        history.push("/editor");
     
  };
  const previousLesson = () => {

        history.push("/css3/units");
     
  };
  const c = `
  <style>

.text{

font-size: 1.2rem;

font-weight: 600;

font-family: "Arial";
color: white;

}

</style>

<p class="text">Lorem ipsum</p>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Font</h1>
        <p>
          We all want to style our text on the website, we can do that with some
          font properties:
        </p>
        <h3>
          The <span className="purple">font-style</span> property
        </h3>
        <p>
          Set different font styles the values for this property can be{" "}
          <span className="purple">italic</span>,{" "}
          <span className="purple">oblique</span>,{" "}
          <span className="purple">normal</span>,
          <span className="purple">initial</span>,{" "}
          <span className="purple">inherit</span>.
        </p>
        <h3>
          The <span className="purple">font-size</span> property
        </h3>
        <p>
          Set the font size for the text, you can use different units for the
          value, check the "Units" lesson.
        </p>
        <h3>
          The <span className="purple">font-family</span> property
        </h3>
        <p>
          Specify the font for an element or whole document, if the browser does
          not support the first font from the value it tries the next font, so
          you can have more fonts as the value, separate by a comma, make sure
          to add the name of the font in quotation marks if the name is more
          than a word.
        </p>
        <h3>
          The <span className="purple">font-variant</span> property
        </h3>
        <p>
          Specifies whether a text should be displayed in small caps or not, the
          values can be <span className="purple">normal</span> or{" "}
          <span className="purple">small-caps</span>.
        </p>
        <h3>
          The <span className="purple">font-weight</span> property
        </h3>
        <p>
          Set how thick or thin the text should be, the values can be{" "}
          <span className="purple">normal</span>,{" "}
          <span className="purple">bold</span>,{" "}
          <span className="purple">bolder</span>,{" "}
          <span className="purple">lighter</span>, or from{" "}
          <span className="purple">100</span> to{" "}
          <span className="purple">900</span>.
        </p>
        <h3>
          The <span className="purple">line-height</span> property
        </h3>
        <p>
          Set the height of a line, you can use{" "}
          <span className="purple">length values</span>.
        </p>
        <p>
          And are a few more but these are the most important, and the most used
          units are rem or em, because these units help you at making responsive
          designs, and we will use the rem units along the way.
        </p>
        <p>
          For the font family property you can use for the value the name of the
          font that you have installed on your machine or you can use{" "}
          <span className="purple">@import</span> to import the font that you
          want or the <span className="purple">{"<link />"} tag</span>, always
          use these 2 methods when you upload your website on the world wide
          web, we will learn more about imports on a separate lesson.
        </p>
        <br />
        <p className="res">
          Example using some of the <span className="purple">CSS</span>{" "}
          properties from this lesson.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element class">{".text"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-weight</span>
            <span>:</span>
            <span className="value"> 500</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-family</span>
            <span>:</span>
            <span className="value"> "Arial"</span>
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
            <span className="tag">p</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"text"</span>
            <span>{">"}</span>
            <span>Lorem ipsum</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
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
