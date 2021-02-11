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
      history.push("/css3/colors");
     
  };

  const handleEditor = () => {

      history.push("/editor");
      
  };
  const previousLesson = () => {
      history.push("/css3/introduction");
      
  };
  const c = `
  <style>

  p{
  
  color: cyan;
  font-size: 1.15rem;
  
  }
  
  .main{
  
  color: purple;
  font-size: 1.15rem;
  
  }
  
  </style>
  
  <p class="main">CSS is fun!</p>
  `;
  const i = `
  <style>

  p{
  
  color: cyan;
  
  }
  
  .main{
  
  color: purple;
  
  }
  
  #unique{
  
  color: lightgreen;
  font-size: 1.15rem;
  
  }
  
  </style>
  
  <p class="main" id="unique">CSS is fun!</p>
  `;

  const d = `
  <style>

  p{
  
  color: cyan;

  }
  
  .main{
  
  color: purple !important;
  font-size: 1.15rem;
  
  }
  
  #unique{
  
  color: lightgreen;

  
  }
  
  </style>
  
  <p class="main" id="unique">CSS is fun!</p>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Priority</h1>
        <p>
          In <span className="purple">CSS</span> you have an important rule for
          selectors that is based on priority. If you have a paragraph with a
          class and you want the style that paragraph by taking the type
          selector method (using the element's tag) it will work, if you are
          using the class selector method it will have more priority than
          the type selector, there is another method to style an element that is
          the ID Selector, the ID is a very restrictive attribute, you can have
          only one id on an element and it must be unique.
          </p><p>
          Since the ID is unique it has the strongest priority level, if you are
          using this method your element will have the styles of it.
          </p><p>
          But in <span className="purple">CSS</span> exist another method that
          can be above the ID method and have the strongest priority level, that
          is using the <span className="purple">!important</span> after the
          value of the CSS property.
          </p><p>
          This rule is forcing the browser to use the specific style, this
          indicates that this style is the most important and must be applied
          over the other style.
        </p>
        <br/>
        <p className="res">
          Example with the type and the class selector, class selector {">"}{" "}
          type selector.
        </p>
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
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".main"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> purple</span>
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
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"main"</span>
            <span>{">"}</span>
            CSS is fun!
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p>
          Note: To use the value of the class attribute to style the element(s)
          with that class you use (.) before the name of the class.
        </p>
        <br/>
        <p className="res">
          Result, the style from the class selector was applied.
        </p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />

        <p className="res">
          Example with the all 3 methods, ID selector {">"} class selector {">"}{" "}
          type selector.
        </p>
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
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".main"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element id">{"#unique"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> lightgreen</span>
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
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"main"</span>
            <span className="inTag"> id</span>
            <span>=</span>
            <span className="inTagValue">"unique"</span>
            <span>{">"}</span>
            CSS is fun!
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p>
          Note: To use the value of the ID attribute to style the element with
          that ID you have to use (#) before the name of the ID.
        </p>
        
        <p className="res">
          Result, the style from the ID selector was applied.
        </p>
        <iframe
          className="result"
          srcDoc={i}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p className="res">
          Example with the all 3 methods using the "!important" rule, !important{" "}
          {">"} ID selector {">"} class selector {">"} type selector.
        </p>
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
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".main"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> purple !important</span>
         
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element id">{"#unique"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> lightgreen</span>
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
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"main"</span>
            <span className="inTag"> id</span>
            <span>=</span>
            <span className="inTagValue">"unique"</span>
            <span>{">"}</span>
            CSS is fun!
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p>
          Make sure when you use this rule to add the (!) before the important
          word and this syntax have to be inside the value of the CSS property.
        </p>
        <p className="res">
          Result, the style from the class selector with the important rule
          applied on the color property was applied to the element.
        </p>
        <iframe
          className="result"
          srcDoc={d}
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
