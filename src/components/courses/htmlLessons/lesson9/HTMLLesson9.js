import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson9() {
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
    
        history.push("/html5/labels");
      
  };
  const previousLesson = () => {

        history.push("/html5/buttons");
      
    
  };
  const handleEditor = () => {

        history.push("/editor");
  
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const i = `
  <div style="display: flex; flex-direction: column; width: 270px">
  <input type="name" placeholder="Your name" style=" height: 20px"/>

  <input type="email" placeholder="Your email" style="margin-top: 15px; height: 20px"/>
  
  <input type="password" placeholder="Your password" style="margin-top: 15px; height: 20px"/>
  
  <input type="checkbox" style="margin-top: 15px; height: 20px"/>
  
  <input type="radio" style="margin-top: 15px; height: 20px"/>
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Inputs</h1>
        <p>
          Sometimes on your wbesite you need inputs, maybe for a contact section
          or for a login page, when we need that we will use the{" "}
          <span className="purple">{"<input />"}</span> tag, is a self-closing
          tag as you see, this tag needs some attributes to work correctly.
        </p>
        <p>
          In <span className="purple">HTML</span> are more types of inputs like:
          name, email, password where you can type something or like checkbox or
          radio inputs. To make a different input you need to use the{" "}
          <span className="purple">type</span> attribute with the value you
          want. This element supports global and events attributes but also some
          specific attributes like <span className="purple">required</span>,
          this attribute is usually used when you have a form and if the input
          is not filled you can't submit the form, for this attribute you need a
          button with the type of submit in the actual form.
        </p>
        <p>
          Another attribute that is a super useful is{" "}
          <span className="purple">placeholder</span>, this attribute is setting
          a text inside the input, when the user is focusing and typing in the
          input the placeholder will be removed.<br></br>
          For the input with the type of checkbox or radio you can have the
          attribute called <span className="purple">checked</span>, as the name
          says, your input will be already checked when the page is opened.
        </p>
        <br />
        <p className="res">Example with all the types of inputs</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"name"</span>
            <span className="inTag"> placeholder</span>
            <span>=</span>
            <span className="inTagValue">"Your name"</span>
            <span>{" />"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"email"</span>
            <span className="inTag"> placeholder</span>
            <span>=</span>
            <span className="inTagValue">"Your email"</span>
            <span>{" />"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"password"</span>
            <span className="inTag"> placeholder</span>
            <span>=</span>
            <span className="inTagValue">"Your password"</span>
            <span>{" />"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"checkbox"</span>
            <span>{" />"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"radio"</span>
            <span>{" />"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={i}
          style={{ height: "200px" }}
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

export default HTMLLesson9;
