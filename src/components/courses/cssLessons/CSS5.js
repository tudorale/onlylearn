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
   
        history.push("/css3/font");
      
  };

  const handleEditor = () => {
    
        history.push("/editor");
     
  };
  const previousLesson = () => {
   
        history.push("/css3/dimensions");
      
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Units</h1>
        <p>
          In <span className="purple">CSS</span> we have different units for
          expressing a length, the <span className="purple">CSS</span>{" "}
          properties that take length values are width, height, margin, padding,
          font-size etc. We will learn about font in the next lesson.
        </p>

        <p>
          We have absolute length that are fixed and they will appear as exactly
          that size, this are not recommended for use on screen or you can use
          it if the output medium is known, the absolute length units are:
        </p>

        <p>
          <span className="purple">cm</span> - centimeters
        </p>

        <p>
          <span className="purple">mm</span> - millimeters
        </p>

        <p>
          <span className="purple">in</span> - inches
        </p>

        <p>
          <span className="purple">px</span> - pixels
        </p>

        <p>
          <span className="purple">pc</span> - picas
        </p>

        <p>
          <span className="purple">pt</span> - points
        </p>

        <p>
          And we have relative lengths that is recommended to use, these values
          specify a length relative to another length property, the relative
          lenght units are:
        </p>

        <p>
          <span className="purple">rem</span> - relative to font-size of the
        </p>
        <p>
          <span className="purple">em</span> - relative to font-size of the
          element
        </p>
        <p>
          <span className="purple">vw</span> - relative to 1% of the width of
          the viewport
        </p>
        <p>
          <span className="purple">vh</span> - relative to 1% of the height of
          the viewport
        </p>
        <p>
          <span className="purple">%</span> - relative to the parent element
        </p>
        <p>
          <span className="purple">vmin/vmax</span> - relative to 1% of
          viewport's smaller/larger dimension
        </p>
        <p>
          <span className="purple">ch</span> - relative to the width of the zero
        </p>
        <p>
          <span className="purple">ex</span> - relative to the x-height of the
          current font
        </p>

        <p>
          The most used are em,rem,vw,vh, %, and px sometimes, and that's what we
          are going to use, also, an important thing is that you can use
          negative lengths for some <span className="purple">CSS</span>{" "}
          properties.
        </p>
        <p>An example with px and % units you saw in the previous lesson.</p>

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
