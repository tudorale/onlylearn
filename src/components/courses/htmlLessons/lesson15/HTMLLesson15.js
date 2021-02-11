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
    
        history.push("/html5/recommendation");
      
  
  };
  const previousLesson = () => {
   
        history.push("/html5/comments");
      
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
        <h1>Layout</h1>
        <p>
          As we said a few more lessons ago, in{" "}
          <span className="purple">{"HTML"}</span> are some tags that are
          meant for creating layouts, you will have your website in a certain
          way, you may want to start with the header then navigation, your main
          area, some articles if you want and the footer. Below you have the
          tags that are used in this way, also you can have all your layers in
          the <span className="purple">{"<div>"}</span> tag, but this is not
          actually good, you may want to use this tag for example when in your
          page in the main area you want to position more elements at once.
        </p>
        <p>
          <span className="purple">{"<header>"}</span> - your website header,
          you can add here for example a phone number, email etc.
        </p>
        <p>
          <span className="purple">{"<nav>"}</span> - your website navigation,
          here you can add your logo, links and some buttons or a search input.
        </p>
        <p>
          <span className="purple">{"<main>"}</span> - your main area, here you
          can add something that attract the user and give some indications
          where should go, like a scroll icon if you have more content below.
        </p>
        <p>
          <span className="purple">{"<article>"}</span> - this is an independent
          container, this should contain comments, forum post, news etc.
        </p>
        <p>
          <span className="purple">{"<footer>"}</span> - this defines the footer
          of website, this should contain copyright information, contact
          information, sitemap, author information etc.
        </p>
        <p>
          <span className="purple">{"<section>"}</span> - this tag defines a
          section in your website, you can add for example cards.
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

export default HTMLLesson12;
