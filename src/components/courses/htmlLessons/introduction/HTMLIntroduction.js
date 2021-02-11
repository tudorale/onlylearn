import React, { useContext, useEffect } from "react";
import "./htmlintroduction.css";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import UserContext from "../../../services/UserContext";
import { useLocation } from "react-router-dom";
import fire from "../../../services/Firebase";
import "../../../../main.css";
import Footer from "../../../footer/FooterTwo";

function HTMLIntroduction() {
  const history = useHistory();
  const location = useLocation();
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

  const doneIntroduction = () => {

        history.push("/html5/text&span");
    
      
  };

  const editor = () => {
        history.push("/editor");
     
  };
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Introduction to HTML5</h1>
        <p>
          <span className="purple">HTML5</span> it is a new version of
          the language <span className="purple">HTML</span>, with new elements,
          attributes, and more tools for creating a powerful web site.
        </p>
        <p>
          To have more sense to you, <span className="purple">HTML </span>
          stands for HyperText Markup Language and is the structure of the
          website, "Hypertext" refers to links that connect web pages to one
          another, either within a single website or between websites.
        </p>
        <p>
          Theory is boring but you need to know it. You will learn all you need to know
          about <span className="purple">HTML5</span> and how to make a website from scratch.
        </p>
        <p>
          Below you have the <span className="purple">HTML</span> syntax
          ( also called boilerplate) for a website.{" "}
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
            <span>{"The title for your website"}</span>
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
        <div className="explanation">
          <p>
            <span className="purple">{"<!DOCTYPE html>"}</span> - Is a
            declaration and is an "information" to the browser about what
            document type to expect.
          </p>
          <p>
            <span className="purple">{"<html>"}</span> - Represents the root of
            an HTML document and contains all the HTML elements ( except for the
            declaration ).
          </p>
          <p>
            <span className="purple">{"<head>"}</span> - Contains the metadata
            about the HTML document ( data about data ).
          </p>
          <p>
            <span className="purple">{"<meta>"}</span> - Defines metadata about
            an HTML document. Metadata is information about data, in our case
            charset specifies the characther encoding.
          </p>
          <p>
            <span className="purple">{"<title>"}</span> - Defines the title of
            the document. The title must be text-only, and it is shown in the
            browser tab.
          </p>
          <p>
            <span className="purple">{"<body>"}</span> - Defines the body of the
            website, this tag contains all the content of the page, text, images, etc.
          </p>
          <p>
            And when you use "<span className="purple">/</span>" before a tag
            means that you close it and all of your code should be between the
            open tag and the closed one
          </p>
        </div>
        <p>You will learn more elements for your webesite along the way!</p>
        <div className="buttons">
          <button onClick={() => doneIntroduction()} className="nextL">
            Next lesson
          </button>
          <button className="practice" onClick={editor}>
            Practice
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HTMLIntroduction;
