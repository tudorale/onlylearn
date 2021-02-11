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
        history.push("/css3/decoration");
    
  };

  const handleEditor = () => {

    
        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/alignment");
      
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Display</h1>
        <p>
          The <span className="purple">display</span> property specifies if or
          how an element is displayed, this is the most important property for
          controlling layouts.
          </p><p>
          We have different values for this property but the most important are:
          </p><p>
          <span className="purple">block</span> - default, starts on a new line
          and takes the full width available, example of block elements:{" "}
          {"<p>, <div>, <h1> - <h6>"}.<br />
          </p><p>
          <span className="purple">inline</span> - default, does not start on a
          new line and takes only as much width is necessary, the height and
          width properties will have no effect, example of inline elements:{" "}
          {"<span>, <a>"}.<br />
          </p><p>
          <span className="purple">inline-block</span> - the element is
          formatted as an inline element but you can apply height and width
          values to it.
          </p><p>
          <span className="purple">none</span> - the element is removed.
          </p><p>
          <span className="purple">flex</span> - display an element as a flex
          container. <br />
          </p><p>
          <span className="purple">grid</span> - display an element as a grid
          container. <br />
          </p><p>
          You can override the value for this property, and for the flex and
          grid values we will talk more in the responsive lessons.
        </p>

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
