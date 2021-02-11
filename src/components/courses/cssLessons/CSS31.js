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
  
        history.push("/css3/filter");
    
  };

  const handleEditor = () => {
   
        history.push("/editor");
    
  };
  const previousLesson = () => {
   
        history.push("/css3/variables");
      
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Functions</h1>
        <p>
          <span className="purple">CSS Functions</span> are used as a value for{" "}
          <span className="purple">CSS</span> properties.
          </p><p>
          Some of the <span className="purple">CSS</span> functions:
          </p><p>
          <span className="purple">calc()</span> - perform calculations to
          determine the value, (e.g. width: calc(500px + 10%).
          </p><p>
          <span className="purple">attr()</span> - return the value of an
          attribute of the selected element.
          </p><p>
          <span className="purple">var()</span> - insert the value of a
          variable.
          </p><p>
          <span className="purple">url()</span> - allows you to link other
          resources to load them, can include images, fonts or other
          stylesheets.
          </p><p>
          <span className="purple">rgb()</span> - defines colors using
          Red-Green-Blue model.
          </p><p>
          <span className="purple">rgba()</span> - defines colors using
          Red-Green-Blue-Alpha model.
          </p><p>
          <span className="purple">hsl()</span> - defines colors using the
          Hue-Saturation-Lightness model.
          </p><p>
          <span className="purple">hsla()</span> - defines colors using the
          Hue-Saturation-Lightness-Alpha model.
          </p><p>
          <span className="purple">linear-gradient()</span> - set a linear
          gradient as the background, you have to define at least two
          color, (e.g. linear-gradient(red,blue)).
          </p><p>
          <span className="purple">radial-gradient()</span> - set a radial
          gradient as the background, here also you have to define at
          least two colors.
          </p><p>
          <span className="purple">repeating-linear-gradient()</span> - repeats
          a linear gradient.
          </p><p>
          <span className="purple">repeating-radial-gradient()</span> - repeats
          a radial gradient.
          </p><p>
          We have other functions, the pseudo classes, some of them, are
          considered as functions, you will see in the next lesson other
          functions for the filter property, but you don't need to know all of
          them for the moment.
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
