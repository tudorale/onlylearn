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
        history.push("/css3/transition");
     
  };

  const handleEditor = () => {

        history.push("/editor");
      
  };
  const previousLesson = () => {
  
        history.push("/css3/pseudo-elements");
      
  };
  const c = `
  <style>

/* Single-line comment */
/*
Multi-line
comment
*/
p{

color: white;

font-size: 1.2rem;

}

</style>

<p>Lorem ipsum.</p>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Comments</h1>
        <p>
          Comments are used to explain the code, comments are helping you when
          you edit the source code at a later date, these comments are ignored by
          the browser and only can be readed if you open the source code in
          browser or in a text editor.
          </p><p>
          The comments are placed inside the CSS code and it starts with{" "}
          <span className="purple">{"/*"}</span> and ends with{" "}
          <span className="purple">{"*/"}</span>.
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
            <span className="comment">
              {"/*"} Single-line comment {"*/"}
            </span>
            <br />
            <span className="comment">
              {"/*"} <br />
              Multi-line <br /> comment <br />
              {"*/"}
            </span>
            <br />

            <span className="element">{"p"}</span>
            <span>{"{"}</span>
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
            <span>Lorem ipsum.</span>
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
