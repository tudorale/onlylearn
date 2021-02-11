import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";
import "../../../../main.css";
function HTMLLesson5() {
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
    
        history.push("/html5/container");
      
  };
  const previousLesson = () => {
 
        history.push("/html5/lists");
      
  };
  const handleEditor = () => {
   
        history.push("/editor");
      
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const a = `
    <p style="color: white; font-size: 1.1rem" title="OnlyLearn is all you need">Mouse over me!</p>
    <img src="..." alt="Error" style="color: white; font-size: 1.1rem" />
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Attributes</h1>
        <p>
          Attributes in <span className="purple">HTML</span> are special words,
          they are used inside the opening tag to control the element's
          behavior, the common syntax is:{" "}
          <span className="purple">name="value"</span>, where the name is the
          attribute and the value is the value for that attribute. Some tags
          work only if they have a specific attribute, like the{" "}
          <span className="purple">{"<img />"}</span> tag which without the{" "}
          <span className="purple">{"src"}</span> attribute doesn't work, 'src'
          stands for source and the value for the attribute is the path to the
          image to be displayed. With attributes, you can style an element and
          we are not referring to the 'style' attribute but at the{" "}
          <span className="purple">{"width "}</span>
          and <span className="purple">{"height"}</span> attributes and other
          more.
        </p>
        <p>
          In <span className="purple">HTML</span> are many attributes, but we
          will show you some attributes that are usually used and for every tag
          that you will learn from this moment you will see the attributes that
          are supported by that element.
        </p>
        <p>
          <span className="purple">title</span> - the title attribute basically
          defines some extra information about an element, when you hover over
          the element you will see the value.
        </p>

        <p>
          <span className="purple">hidden</span> - the hidden attribute as the
          name says it will hide the element and is not anymore visible on the
          website.
        </p>
        <p>
          <span className="purple">href</span> - the href attribute specifies
          the URL or the path for an element, you will see this attribute for
          the <span className="purple">{"<a>"}</span> and{" "}
          <span className="purple">{"<link />"}</span> tag which are the most
          relevant. We will talk more about this tags on a specific lesson.
        </p>
        <p>
          <span className="purple">alt</span> - the alt attribute stands for
          alternate and is used in the most cases for the{" "}
          <span className="purple">{"<img />"}</span> tag, if the image cannot
          be displayed for some reason, the value from the alt attribute will be
          displayed.
        </p>
        <p>
          <span className="purple">class</span> - the class attribute specify a
          class for an HTML element, you can add the same class at more
          elements, you usually use this attribute to point to a class name in a
          style sheet or to manipulate or access elements with the specific
          class name in JavaScript.
        </p>
        <p>
          <span className="purple">id</span> - the id attribute is used to
          specify a unique ID for an element, you cannot have more elements with
          the same ID, id attribute is used like the class attribute, for
          styling purpose or manipulation with JS.
        </p>
        <br />
        <p className="res">Here are some examples</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"p"}</span>
            <span className="inTag"> title</span>
            <span>=</span>
            <span className="inTagValue">"OnlyLearn is all you need"</span>
            <span>{">"}</span>
            <span>Mouse over me!</span>
            <span>{"<"}</span>
            <span className="tag">{"/p"}</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"img"}</span>
            <span className="inTag"> src</span>
            <span>=</span>
            <span className="inTagValue">"..."</span>
            <span className="inTag"> alt</span>
            <span>=</span>
            <span className="inTagValue">"Error"</span>
            <span>{" />"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          style={{ height: "100px" }}
          srcDoc={a}
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

export default HTMLLesson5;
