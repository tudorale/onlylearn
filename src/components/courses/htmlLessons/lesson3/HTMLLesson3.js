import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";
import "../../../../main.css";
function HTMLLesson3() {
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

  const h = `
    <h1 style="color: white">This is a h1 tag</h1>
    <h2 style="color: white">This is a h2 tag</h2>
    <h3 style="color: white">This is a h3 tag</h3>
    <h4 style="color: white">This is a h4 tag</h4>
    <h5 style="color: white">This is a h5 tag</h5>
    <h6 style="color: white">This is a h6 tag</h6>
    
  `;

  const nextLesson = () => {

        history.push("/html5/lists");
    
  };
  const previousLesson = () => {

        history.push("/html5/text&span");
     
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
        <h1>Headings</h1>
        <p>
          In <span className="purple">HTML</span> are 6 tags for the main
          subject / heading, these are from{" "}
          <span className="purple">{"<h1>"}</span> to
          <span className="purple">{" <h6>"}</span>,{" "}
          <span className="purple">{"<h1>"}</span> represents the most important
          heading and <span className="purple">{"<h6>"}</span> represents the
          least important heading.
        </p>
        <p>
          You should use only one <span className="purple">{"<h1>"}</span> tag
          per page because that represent the main subject/heading for to whole
          page, you should also use after the main heading the{" "}
          <span className="purple">{"<h2>"}</span> tag and so on. This tags
          supports event attributs and also the global ones.
        </p>
        <p className="res">
          There is actually no much talk about this tags, so let's see an
          example.
        </p>
        <div className="exParagraph">
          <p className="declaration mainTag">{"<!DOCTYPE html>"}</p>
          <p className="mainTag">
            {" "}
            <span>{"<"}</span>
            <span className="tag">{"html"}</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">{"head"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{`meta`}</span>
            <span className="inTag">{` charset`}</span>
            <span>{`=`}</span>
            <span className="inTagValue">{`"UTF-8"`}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"title"}</span>
            <span>{">"}</span>
            <span>{"Headings"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/title"}</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">{"/head"}</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">{"body"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h1"}</span>
            <span>{">"}</span>
            <span>{"This is a h1 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h1"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h2"}</span>
            <span>{">"}</span>
            <span>{"This is a h2 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h2"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h3"}</span>
            <span>{">"}</span>
            <span>{"This is a h3 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h3"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h4"}</span>
            <span>{">"}</span>
            <span>{"This is a h4 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h4"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h5"}</span>
            <span>{">"}</span>
            <span>{"This is a h5 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h5"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"h6"}</span>
            <span>{">"}</span>
            <span>{"This is a h6 tag"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/h6"}</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">{"/body"}</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"/html"}</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result resultMedium"
          srcDoc={h}
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

export default HTMLLesson3;
