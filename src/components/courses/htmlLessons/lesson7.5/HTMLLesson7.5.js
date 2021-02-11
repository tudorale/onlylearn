import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson8() {
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
   
        history.push("/html5/buttons");
      
  };
  const previousLesson = () => {

        history.push("/html5/images");
      
  };
  const handleEditor = () => {
   
        history.push("/editor");
    
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Videos</h1>
        <p>
          You can show a video on your web page using the{" "}
          <span className="purple">{"<video>"}</span> tag. Between this tag you
          should use the <span className="purple">{"<source>"}</span> tag which
          is defining the source and the type of the video, you can set more
          videos with different formats and the browser will choose the first
          recognized format.
        </p>
        <h3>
          Attributes for the <span className="purple">{"<video>"}</span> tag.
        </h3>
        <p>
          The <span className="purple">{"autoplay"}</span> attribute will start
          the video automatically.
        </p>
        <p>
          The <span className="purple">{"src"}</span> attribute specifies the
          URL of the video.
        </p>
        <p>
          The <span className="purple">{"loop"}</span> attribute will start the
          video again and again every time it is finished.
        </p>
        <p>
          The <span className="purple">{"muted"}</span> attribute will specify
          that the audio of the video should be muted.
        </p>
        <p>
          The <span className="purple">{"controls"}</span> attribute will add
          controls to the video, ex: play, pause button.
        </p>

        <p>
          You should use the <span className="purple">{"width"}</span> and{" "}
          <span className="purple">{"height"}</span> attribute to set dimensions
          for the video.
        </p>
        <br />
        <p>
          You can set a text between this tag, that text will be displayed if
          the video is not supported/found.
        </p>
        <p>The video formats that are supported: WebM, OGG and MP4.</p>
        <br />
        <p className="res">Syntax</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">video</span>
            <span className="inTag"> width</span>
            <span>=</span>
            <span className="inTagValue">"500"</span>
            <span className="inTag"> height</span>
            <span>=</span>
            <span className="inTagValue">"500"</span>
            <span className="inTag"> autoplay</span>
            <span className="inTag"> controls</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">source</span>
            <span className="inTag"> src</span>
            <span>=</span>
            <span className="inTagValue">"test.mp4"</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"video/mp4"</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            This text will be visible if the browser does not support the video.
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/video</span>
            <span>{">"}</span>
          </p>
        </div>

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

export default HTMLLesson8;
