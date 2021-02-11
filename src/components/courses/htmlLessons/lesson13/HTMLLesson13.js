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
    
        history.push("/html5/comments");
      
  };
  const previousLesson = () => {
  
        history.push("/html5/links");
      
  };
  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const t = `
  <u style="color: white; font-size: 1.1rem; display: block">underlined</u>

<b style="color: white; font-size: 1.1rem; display: block">bold</b>

<i style="color: white; font-size: 1.1rem; display: block">italic</i>

<s style="color: white; font-size: 1.1rem; display: block">strike through</s>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Styling</h1>
        <p>
          To style elements in your website you need to know{" "}
          <span className="purple">{"CSS"}</span> and your{" "}
          <span className="purple">{"CSS "}</span>
          code will be added between the{" "}
          <span className="purple">{"<style>"}</span> tag. Now, we will not use
          this tag, we will use it when we will learn{" "}
          <span className="purple">{"CSS"}</span>, in{" "}
          <span className="purple">{"HTML"}</span> exist some tags for small
          styling, with <span className="purple">{"CSS"}</span> you can do more
          and more easier. This tags must be used in front of the text that we
          want to style, and you need to close after your specific
          word/paragraph.
          </p>
          <p>
          <span className="purple">{"<u>"}</span> - we use this tag when we want
          to underline a paragraph/word.
          </p><p>
          <span className="purple">{"<b>"}</span> - we use this tag when we want
          a paragraph/word bold.
          </p><p>
          <span className="purple">{"<i>"}</span> - we use this tag when we want
          a paragraph/word italic.
          </p><p>
          <span className="purple">{"<s>"}</span> - this tag specifies that the
          text/word is no longer correct/relevant.
          </p>
          <p>
          And are a few more (big, small, etc.) but they are not supported in{" "}
          <span className="purple">{"HTML5"}</span>, 
          </p>
        <br/>
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">u</span>
            <span>{">"}</span>
            underlined
            <span>{"<"}</span>
            <span className="tag">/u</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">b</span>
            <span>{">"}</span>
            bold
            <span>{"<"}</span>
            <span className="tag">/b</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">i</span>
            <span>{">"}</span>
            italic
            <span>{"<"}</span>
            <span className="tag">/i</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">s</span>
            <span>{">"}</span>
            strike through
            <span>{"<"}</span>
            <span className="tag">/s</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={t}
          title="output"
          style={{ height: "105px" }}
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
