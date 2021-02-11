import React, { useEffect, useContext } from "react";
import "./mainCSS.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";
import box from "./boxmodel.png";

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
        history.push("/css3/position");
     
  };

  const handleEditor = () => {
        history.push("/editor");
    
  };
  const previousLesson = () => {
        history.push("/css3/margin");
      
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Box model</h1>
        <p>
          This is not a property but is a thing you need to know when making
          designs and layouts, the <span className="purple">box model</span> is
          actually a box that wraps around every{" "}
          <span className="purple">HTML</span> element, this box is containing
          the margins, borders, padding, and content.
        </p>
        <p>
          You must know about this because if you have a job interview as a web
          developer, a question about the box model will be on the list of
          questions that you are supposed to answer.
        </p>
        <p>
          The box model is helping you to calculate the actual width and height
          of an element if you have margins, padding or borders, and is helping you to understand better how to align an element.
        </p>
        <p>
          The width of an element is calculated like this: the width of the
          element + right padding + left padding + right border + left border +
          left margin + right margin, and to calculate the height you use top
          and bottom instead of left and right width.
        </p>
        <br />
        <p className="res">How a box model looks like</p>
        <img src={box} alt="" className="boxmodel" />
        <p>
          We talked a bit about the <span className="purple">box-sizing</span>{" "}
          property but we will mention this property here too, this property
          defines how the height and width of an element are calculated.
        </p>
        <p>The values for this property can be:</p>
        <p>
          <span className="purple">content-box</span> - default value, the
          height and width includes only the content, border and padding are not
          included.
        </p>
        <p>
          <span className="purple">border-box</span> - the width and height
          properties includes the content, padding and border.
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
