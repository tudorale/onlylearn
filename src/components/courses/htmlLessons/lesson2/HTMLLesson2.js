import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";
import "../../../../main.css";
import Footer from "../../../footer/FooterTwo";
function HTMLLesson2() {
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const p = `
  <html>
  <head></head>
  <body><p style="color: white; font-size: 1.2rem;">This is a paragraph</p></body>
  </html>
  `;
  const s = `
  <html>
  <head></head>
  <body><p style="color: white; font-size: 1.2rem;">This is <span style="color: crimson">Awesome</span></p></body>
  </html>
  `;

  const nextLesson = () => {
    
        history.push("/html5/headings");
      
  };
  const handleEditor = () => {
  
        history.push("/editor");
     
  };

  const previousLesson = () => {
   
        history.push("/html5/introduction");
      
  };
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Paragraphs and span</h1>
        <p>
          First of all you can write text in the{" "}
          <span className="purple">body</span> tag and without writing it in a
          certain tag, it is not recommended but it is good to know.
        </p>
        <p>
          For paragraphs we have a special tag{" "}
          <span className="purple">{"<p>"}</span> it also comes with a closing
          tag <span className="purple">{"</p>"}</span>, make sure to always
          close the tag if the element comes with a closing tag because are some
          tags that are self-closing (e.g{" "}
          <span className="purple">{"<link />"}</span>), between{" "}
          <span className="purple">{"<p>"}</span> you can write text then you
          can select it in <span className="purple">CSS</span> so you can modify
          it, we will learn this along the way.
        </p>
        <br />
        <p className="res">Example using the paragraph tag</p>
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
            <span>{"Paragraphs"}</span>
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
            <span className="tag">{"p"}</span>
            <span>{">"}</span>
            <span>{"This is a paragraph"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/p"}</span>
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
        <div className="pR">
          <iframe
            className="result"
            srcDoc={p}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <p>
          The <span className="purple">{"<span>"}</span> tag is used in the most
          cases to isolate a word or a exact part from a text, is used most of
          the time with <span className="purple">CSS</span>, you can isolate a
          word from a paragraph and in <span className="purple">CSS </span>
          you can style it separatly.
        </p>
        <p className="res">
          Example using the span tag with <span className="purple">CSS</span>{" "}
          (you may not know what the style attribut does but in short you can
          use inline-styling and add a color to something with the "style"
          attribute, you will learn this soon).
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
            <span>{"Span"}</span>
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
            <span className="tag">{"p"}</span>
            <span>{">"}</span>
            <span>{"This is "}</span>
            <span>{"<"}</span>
            <span className="tag">{"span "}</span>
            <span className="inTag">style</span>
            <span>=</span>
            <span className="inTagValue">"color: crimson"</span>
            <span>{">"}</span>
            <span>Awesome</span>
            <span>{"<"}</span>
            <span className="tag">{"/span"}</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">{"/p"}</span>
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
          className="result"
          srcDoc={s}
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

export default HTMLLesson2;
