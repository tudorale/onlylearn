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
   
        history.push("/css3/z-index");
     
  };

  const handleEditor = () => {
        history.push("/editor");
     
  };
  const previousLesson = () => {
    
        history.push("/css3/word");
     
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Document tree</h1>
        <p className="res">
          Let's see a basic syntax for a document for a better understanding
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">body</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">ul</span>
            <span>{">"}</span>
          </p>
          <p className="fourthTag">
            <span>{"<"}</span>
            <span className="tag">li</span>
            <span>{">"}</span>
            <span>Item 1</span>
            <span>{"<"}</span>
            <span className="tag">/li</span>
            <span>{">"}</span>
          </p>
          <p className="fourthTag">
            <span>{"<"}</span>
            <span className="tag">li</span>
            <span>{">"}</span>
            <span>Item 2</span>
            <span>{"<"}</span>
            <span className="tag">/li</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">/ul</span>
            <span>{">"}</span>
          </p>

          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/body</span>
            <span>{">"}</span>
          </p>
        </div>
        <p>
          On the document tree we have some names for some specific elements.
          </p> <p>
          The <span className="purple">ancestor</span> is the element that is
          found further up in the document tree, and the levels are not a factor, in our example the "body" tag is the ancestor.
          </p> <p>
          The <span className="purple">descendant</span> is referring to any
          element that is connected but lower down the document tree, no matter
          how many levels lower, in our example the "ul" tag is the descendant.
          </p> <p>
          
          The <span className="purple">parent</span> and{" "}
          <span className="purple">child</span>, a parent is the element that is
          directly above and connected to an element in the document tree, our
          parent is the "div" tag. The child is an element that is directly
          below and connected to an element in the document tree, in our example
          the child for the "div" is the "ul" tag.
          </p> <p>A <span className="purple">sibling</span> is the element that
          shares the same parent with another element, in our example a sibling
          is the "li" tag, where the parent is the "ul" tag.
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
