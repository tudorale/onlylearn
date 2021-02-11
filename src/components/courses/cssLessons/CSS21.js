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
  
        history.push("/css3/document-tree");
  
  };

  const handleEditor = () => {

        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/combinators");
     
  };

  const c = `
  <style>

p{

word-break: break-all;

word-spacing: 10px;

color: white;

font-size: 1.2rem;

}

</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Word</h1>
        <p>We have different properties related to words, these are:</p>
        <h3>
          The <span className="purple">word-break</span> property
        </h3>
        <p>Specifies how words should break when reaching the end of a line.</p>{" "}
        <p>The values for this property are:</p>{" "}
        <p>
          <span className="purple">normal</span> - default value, default line
          break rules.
        </p>{" "}
        <p>
          <span className="purple">keep-all</span> - words should not break when
          the text is Chinese/Japanese/Korean, other texts behavior will be with
          the value of "normal".
        </p>{" "}
        <p>
          <span className="purple">break-all</span> - to prevent overflow, word
          will be broken at any character.
        </p>{" "}
        <p>
          <span className="purple">break-word</span> - the same as break-all but
          the word will be broken at arbitrary points.
        </p>
        <h3>
          The <span className="purple">word-spacing</span> property
        </h3>
        <p>Increases or decreases the white space between words.</p>{" "}
        <p>
          The value can be <span className="purple">normal</span>, the default
          space between words or <span className="purple">length values</span>{" "}
          (px, cm, em, pt, etc), negative values are allowed.
        </p>
        <h3>
          The <span className="purple">word-wrap</span> property,
        </h3>
        <p>
          Allows long words to be able to be broken, the values can be{" "}
          <span className="purple">normal</span>, break words only at some
          allowed points, and <span className="purple">break-word</span> this
          allows unbreakable words to be able to be broken.
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
            <span className="element">{"p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">word-break</span>
            <span>:</span>
            <span className="value"> break-all</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">word-spacing</span>
            <span>:</span>
            <span className="value"> 10px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
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
            <span>{">"}</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </span>
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
          style={{ height: "80px" }}
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
