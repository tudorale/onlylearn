import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson11() {
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
   
        history.push("/html5/tables");
     
  };
  const previousLesson = () => {
   
        history.push("/html5/select&option");
    
  };
  const handleEditor = () => {
   
        history.push("/editor");
  
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const f = `
  <form>

<label for="nameInput" style="color: white; font-size: 1.1rem">Your name</label>

<input type="name" id="nameInput" style="height: 20px"/>

<button type="submit" style="display: block; height: 25px; margin-top: 15px">Send</button>

</form>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Forms</h1>

        <p>
          When you make a contact page or you use inputs the best way to do that
          is wrapping the inputs, labels in the{" "}
          <span className="purple">{"<form>"}</span> tag. In this element you
          need to have a button with the <span className="purple">type</span> of
          <span className="purple"> submit</span>, when the button is clicked
          your page will refreshing and the inputs will be cleared.
        </p>
        <p>
          {" "}
          You can prevent the default event with{" "}
          <span className="purple">JavaScript</span> if you don't want this to
          happen. Also, if you have a <span className="purple">button</span> in
          between the form tag is not necessary to put that type of{" "}
          <span className="purple">submit</span>, and you can use the button
          without any type, and the button will work the same as the submit
          type.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">form</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">label</span>
            <span className="inTag"> for</span>
            <span>=</span>
            <span className="inTagValue">"nameInput"</span>
            <span>{">"}</span>
            Your name
            <span>{"<"}</span>
            <span className="tag">/label</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">input</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"name"</span>
            <span className="inTag"> id</span>
            <span>=</span>
            <span className="inTagValue">"nameInput"</span>
            <span>{" />"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">button</span>
            <span className="inTag"> type</span>
            <span>=</span>
            <span className="inTagValue">"submit"</span>
            <span>{">"}</span>
            Send
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/form</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">
          Result ( here, the button will not do anything, security reasons,
          because the result is rendered with iframe )
        </p>
        <iframe
          className="result"
          srcDoc={f}
          title="output"
          style={{ height: "90px" }}
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

export default HTMLLesson11;
