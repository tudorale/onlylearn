import React, { useEffect, useContext } from "react";
import "./mainCSS.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";

function CSS1() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const nextLesson = () => {
  
        history.push("/css3/overflow");
      
  };

  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const previousLesson = () => {

        history.push("/css3/decoration");
    
  };

  const c = `
  <style>

  .box{
  
  visibility: hidden;
  
  width: 200px;
  
  height: 150px;
  
  background-color:purple;
  
  }
  
  .box2{
  
  opacity: 0.1;
  
  width: 200px;
  
  height: 150px;
  
  background-color:cyan;
  
  }</style>

  <div class="box"></div>
  
  <div class="box2"></div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Opacity and visibility</h1>
        <h3>The <span className="purple">opacity</span> property</h3>
        <p>
          Is setting
          the opacity level for an element, the value can be a number from 0.0
          that is fully transparent to 1.0 that is fully opaque.
        </p>
        <p>
          It's good to remember that when you use the opacity property to add
          transparency to the background of an element, all of its child elements
          will become transparent as well, you can use RGBA values instead.{" "}
        </p>
        <h3>The <span className="purple">visibility</span> property</h3>
        <p>
          Specifies
          whether an element should be visible or not, if you set an element
          hidden that element will take space on the page, use the display property with the
          value of none to remove an element from the website layout.
        </p>
        <p>
          The values are <span className="purple">visible</span> that is the
          default one, and <span className="purple">hidden</span>, the element
          is hidden but still takes space. We have a special property for the
          table rows or columns. called <span className="purple">collapse</span>
          , this value removes a row or column but it does not affect the table
          layout.
        </p>
        <br />
        <p className="res">
          Example with both properties, the first box is hidden but the space is
          taken by the element, you can't really see it but is there, that's why
          the second box is not aligned first.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">visibility</span>
            <span>:</span>
            <span className="value"> hidden</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 200px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 150px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value">purple</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element class">{".box2"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">opacity</span>
            <span>:</span>
            <span className="value"> 0.1</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 200px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 150px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value">cyan</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box"</span>
            <span>{">"}</span>

            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box2"</span>
            <span>{">"}</span>

            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          style={{ height: "325px" }}
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

export default CSS1;
