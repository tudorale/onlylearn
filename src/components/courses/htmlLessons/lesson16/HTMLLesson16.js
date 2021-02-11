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
  
        history.push("/css3/introduction");
      
  };

  const handleEditor = () => {

        history.push("/editor");
    
  };

  const previousLesson = () => {
   
        history.push("/html5/comments");
      
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Recommendation</h1>
        <p>
          This is the final lesson on the <span className="purple">HTML5</span>{" "}
          journey, We hope you learned something, maybe you knew all of this,
          but this website is for beginners, now what we recommend you is to
          make a website from scratch, if you don't know what type of website,
          We recommend you to make yourself a portfolio, you may not have
          content for it but you can add dummy text, use all your knowledge, if
          you want to make something and don't know how, don't skip it, search
          on google the answer, with practice you will learn to be a good
          <span className="purple"> web developer.</span>
        </p>
        <p>
          Maybe when you finish it, it will look ugly, because is just text on
          white background, but is a start, now you can start learning{" "}
          <span className="purple">CSS3</span>, you may think this is boring and
          is not funny, but as you learn{" "}
          <span className="purple">{"CSS3"}</span> your mind will be changed.
        </p>
        <p>
          With <span className="purple">{"CSS3"}</span> you can do a lot of
          stuff, like animations, give life to your website!, don't stop right
          here, click the button and let's start a new{" "}
          <span className="purple">journey</span>.
        </p>
        <p>
          Also, we have to mention that we didn't show you all the tags that are
          in <span className="purple">HTML</span>, there are more, we only
          showed you what we thought was necessary and essential for you. We
          didn't want to fill your mind with not essential things.
        </p>

        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            New journey
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
