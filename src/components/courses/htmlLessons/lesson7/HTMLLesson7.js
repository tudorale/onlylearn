import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson7() {
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

        history.push("/html5/videos");
     
  };
  const previousLesson = () => {
  
        history.push("/html5/container");

  };
  const handleEditor = () => {
   
        history.push("/editor");
     
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const i = `
    <img src="https://source.unsplash.com/random/260x250" alt="Error"/>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Images</h1>
        <p>
          We all love images, in HTML we can add images to our website using the
          <span className="purple">{" <img />"}</span> tag, this tag is
          self-closing which means that you have to add{" "}
          <span className="purple">{'"/"'}</span> before{" "}
          <span className="purple">{'">"'}</span> and needs a special attribute
          called <span className="purple">src</span>, without this attribute
          your image will not be shown.{" "}
        </p>
        <p>
          We can use the <span className="purple">width</span> and{" "}
          <span className="purple">height </span>attributes to set the dimensions
          for our image and the attribute called{" "}
          <span className="purple">alt</span>, the value of this attribute will
          be shown when the source is not recognized or doesn't exist.
        </p>
        <p>
          Below you have an example using Unsplash API for a random image with a
          width of 260px and height of 250px, if the image is not showing please
          wait a few seconds to make the request to the API.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">img</span>
            <span className="inTag"> src</span>
            <span>=</span>
            <span className="inTagValue">
              "https://source.unsplash.com/random/260x250"
            </span>
            <span className="inTag"> alt</span>
            <span>=</span>
            <span className="inTagValue">"Error"</span>
            <span>{" />"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          style={{ height: "270px" }}
          srcDoc={i}
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

export default HTMLLesson7;
