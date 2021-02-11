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
        history.push("/css3/opacity&visibility");
      
  };

  const handleEditor = () => {
  
        history.push("/editor");
      
  };
  const previousLesson = () => {
        history.push("/css3/display");
     
  };

  const c = `

  <style>

  p{
  
  text-decoration: underline cyan double;
  
  font-size: 1.2rem;
  
  color: white;
  
  }
  
  </style>
  
  <p>I have a decoration!</p>
  `;

  const l = `<style>

  ul{
  
  list-style: upper-roman;
  
  font-size: 1.2rem;
  
  color: white;
  
  }
  
  </style>
  
  <ul>
  
  <li>bread</li>
  
  <li>water</li>
  
  <li>meat</li>
  
  </ul>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Decoration</h1>
        <p>
          In this lesson, we will talk about the decoration for a text and the
          decoration for a list with CSS properties, when we want to underline a
          text or to make it with a line through we can use some specific HTML
          tags, but with <span className="purple">CSS</span> we can do that with the{" "}
          <span className="purple">text-decoration</span> property. This
          property is actually a shorthand property for{" "}
          <span className="purple"> text-decoration-line</span> that is
          required, <span className="purple"> text-decoration-style</span> and{" "}
          <span className="purple"> text-decoration-color</span>.
          </p><p>
          The values for the shorthand property must be in the order: the text
          decoration line that is required, the color for the text decoration
          and the style. 
          </p>
          <h3>The <span className="purple">text-decoration-line</span> property</h3>
          <p>Is setting the type of the decoration you want for the text</p>
          <p>
          For this property we  have the following values: <br />
          </p><p>
          <span className="purple">none</span> - default, no line under the
          text. </p><p>
          </p><p>
          <span className="purple">underline</span> - a line will be under the
          text.
          </p><p>
          
          <span className="purple">over</span> - a line over the text.
          </p><p>
          <span className="purple">line-through</span> - a line through the
          text.
          </p><p>
          And the two values that are common to you and these two values are
          mostly everywhere when we talk about values for a CSS property,{" "}
          <span className="purple">initial</span> and{" "}
          <span className="purple">inherit</span>.
          </p>
          <h3>The <span className="purple">text-decoration-color</span> property</h3>
          <p>Is specifying the color for the text decoration (underline, overline, ...)</p>
          <p>
          For this property, you can use the name of the color or
          RGB, HEX, and so on.
          </p><p>
          For the style, we have different values the default one is{" "}
          <span className="purple">solid</span>.
          </p><p>
          We can have a <span className="purple">dashed</span>,{" "}
          <span className="purple">double</span>,{" "}
          <span className="purple">dotted</span>, and{" "}
          <span className="purple">wavy</span> line, but this is not required.
        </p>
        <br/>
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">text-decoration</span>
            <span>:</span>
            <span className="value"> underline cyan double</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
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
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>I have a decoration!</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p>
          For lists we have the <span className="purple">list-style</span>{" "}
          property which is a shorthand for{" "}
          <span className="purple"> list-style-type</span>,{" "}
          <span className="purple">list-style-position</span> and{" "}
          <span className="purple">list-style-image</span>.
          </p>
          <h3>The <span className="purple">list-style-type</span> property</h3>
          <p>
          For the type of the marker which is in front of each element we have different values but the most important are:
          </p><p>
          <span className="purple">disc/circle</span> - default, the marker is a
          circle.
          </p><p>
          <span className="purple">none</span> - without marker.
          </p><p>
          <span className="purple">square</span> - the marker is a square.
          </p><p>
          <span className="purple">upper-alpha/lower-alpha</span> - the marker
          is with alphabet letters. (A,B,C,D, etc.)
          </p><p>
          <span className="purple">upper-roman/lower-roman</span> - the marker
          is with roman numbers. (I, II, III, IV, etc.)
          </p>
          <h3>The <span className="purple">list-style-position</span> property</h3>
          <p>
          For the position we can have two values:{" "}
          <span className="purple">inside</span>, the marker will be inside the
          list item and <span className="purple">outside</span>, this is the
          default the markers will be outside the list item.
          </p>
          <h3>The <span className="purple">list-style-image</span> property</h3>
          <p>
          To add a image as a marker you should use the{" "}
          <span className="purple">url("path.png")</span> value or the value of{" "}
          <span className="purple">none</span>, no image will be displayed and
          the type will define the marker.
        </p>
<br/>
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"ul"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">list-style</span>
            <span>:</span>
            <span className="value"> upper-roman</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
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
            <span className="tag">ul</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">li</span>
            <span>{">"}</span>
            <span>bread</span>
            <span>{"<"}</span>
            <span className="tag">/li</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">li</span>
            <span>{">"}</span>
            <span>water</span>
            <span>{"<"}</span>
            <span className="tag">/li</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">li</span>
            <span>{">"}</span>
            <span>beans</span>
            <span>{"<"}</span>
            <span className="tag">/li</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/ul</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={l}
          style={{ height: "100px" }}
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

export default CSS1;
