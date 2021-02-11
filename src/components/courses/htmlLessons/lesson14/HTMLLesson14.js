import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson12() {
  const history = useHistory();
  let location = useLocation();
  const userStatus = useContext(UserContext);
  const { user, setUser } = userStatus;
  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
      fire.auth().signOut();
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

  const nextLesson = () => {
 
        history.push("/html5/layout");
      
  };
  const previousLesson = () => {
   
        history.push("/html5/styling");
     
  };
  const handleEditor = () => {
  
        history.push("/editor");
      
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const t = `
  <!-- This is a paragraph that indicates the date when the website was started -->

  <p style="color: white; font-size: 1.2rem">22 September, 2020</p>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Comments</h1>
        <p>
          When we will work with big applications and we have more pages or when
          you upload your code online and other people can see it, you want to
          use comments, why? because in the first situation,{" "}
          <span className="purple">{" comments"}</span> are used as information,
          when you take a break from work and come after a few days you may
          forget what a specific code does, or in the second situation when
          someone sees your code you need to specify what does a line of code to
          make that person understand it.
        </p>
        <p>
          To add a comment you need to use at the start this tag:{" "}
          <span className="purple">{"<!-- "}</span> and you close it with this
          tag <span className="purple">{"--> "}</span> and between this two you
          add your comment. These comments are not visible on the website, you
          can see it only on your code or in the source code of the website.
        </p>
        <br/>
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="declaration">
            <span className="declaration">
              {
                "<!-- This is a paragraph that indicates the date when the website was started -->"
              }
            </span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            22 September, 2020
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={t}
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

export default HTMLLesson12;
