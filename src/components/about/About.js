import React, { useEffect, useContext } from "react";
import "./about.css";
import { useLocation } from "react-router-dom";
import Nav from "../navbar/NavA";
import Footer from "../footer/FooterTwo";
import UserContext from "../services/UserContext";
import fire from "../services/Firebase";

function About() {
 
  let location = useLocation();

  const userStatus = useContext(UserContext);
  const { setUser } = userStatus;

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

 
  return (
    <>
      <div className="aboutPage">
        <Nav />
        <div className="aboutContent" >
          <div className="aboutText">
            <h2>What is OnlyLearn?</h2>
            <p>
              OnlyLearn is your start point, a platform where you can learn the
              basics of web development for free, you will learn how to make a
              responsive website from zero, all you need to know about making a
              website and in the end you will be able to make a full website
              from scratch. OnlyLearn was started on December, 2020 by{" "}
              <a
                href="https://tudorale.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tudor Alexandru</a>, but the idea of a website like this was conceived in September the same year. On this website you won't learn something advanced, this is your
              start point, if you don't know where to start you came in the
              right place. After that you can go deep in this field and start a
              career.
            </p>
          </div>
          <div className="aboutText2">
            <h2>Why should you use it?</h2>
            <p>
              OnlyLearn is collecting only the login credentials, you can read
              the Privacy Policy if you want, it is completely free and no one
              forces you to learn, you can learn according to your schedule and
              when you feel good, it has a simple UI/UX and is easy to use, you
              can ask questions on email at any time and someone will answer to
              you, along the way we will add new courses for more programming
              languages. We believe that the information to learn must be free
              and accessible for anyone. The lessons are not just some text
              about something, the lessons are crated using a simple language,
              without expressions you will not understand at first.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
