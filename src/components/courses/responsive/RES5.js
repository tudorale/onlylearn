import React, { useEffect, useContext } from "react";
import "./mainRes.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";

function RES() {
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

        history.push("/responsive/grid");
    
  };
  const previousLesson = () => {
   
        history.push("/responsive/flex-items");
      
  };
  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const c = `
  <style>

  * {
  
  color: white;
  
  font-family: Arial;
  
  }
  
  nav {
  
  width: 100%;
  
  background-color: purple;
  
  height: 60px;
  
  }
  
  nav h1 {
  
  padding: 15px;
  
  }
  
  .container {
  
  display: flex;
  
  flex-direction: row;
  
  justify-content: space-around;
  
  margin-top: 80px;
  
  }
  
  .box1, .box2, .box3 {
  
  padding: 100px;
  
  background-color: purple;
  
  border-radius: 5px;
  
  font-size: 1.5rem;
  
  text-align: center;
  
  }
  
  @media only screen and (max-width: 700px) {
  
  .container {
  
  flex-direction: column;
  
  margin-top: 50px;
  
  }
  
  .box1, .box2, .box3 {
  
  padding: 30px;
  
  margin-top: 20px;
  
  }
  
  }
  
  </style>
  
  
  <nav>
  
  <h1>Logo</h1>
  
  </nav>
  
  <div class="container">
  
  <div class="box1">1</div>
  
  <div class="box2">2</div>
  
  <div class="box3">3</div>
  
  </div>
  
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Flexbox with media queries</h1>
        <p>
          As we said <span className="purple">flexbox</span> is used in the most
          of the time for responsive layouts, you can't make a layout responsive
          without <span className="purple">media queries</span>, in this lesson
          we will see how we can make a layout changing with flexbox on a
          specific breakpoint.{" "}
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"*"}</span>
            <span>{" {"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-family</span>
            <span>:</span>
            <span className="value"> Arial</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"nav"}</span>
            <span>{" {"}</span>
          </p>

          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 100%</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 60px</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"nav h1"}</span>
            <span>{" {"}</span>
          </p>
          <p className="styles">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 15px</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="class">{".container"}</span>
            <span>{" {"}</span>
          </p>
          <p className="styles">
            <span className="prop">display</span>
            <span>:</span>
            <span className="value"> flex</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">flex-direction</span>
            <span>:</span>
            <span className="value"> row</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">justify-content</span>
            <span>:</span>
            <span className="value"> space-around</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-top</span>
            <span>:</span>
            <span className="value"> 80px</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box1"}</span>
            <span>,</span>
            <span className="element class">{" .box2"}</span>
            <span>,</span>
            <span className="element class">{" .box3"}</span>
            <span>{" {"}</span>
          </p>
          <p className="styles">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 100px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border-radius</span>
            <span>:</span>
            <span className="value"> 5px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.5rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">text-align</span>
            <span>:</span>
            <span className="value"> center</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="secondTag">
            <span className="imp">@media</span>
            <span className="element"> only</span>
            <span className="imp"> screen</span>
            <span className="element"> and</span>
            <span> (</span>
            <span className="prop">max-width</span>
            <span>:</span>
            <span className="tag"> 700px</span>
       
            <span>)</span>
            <span>{" {"}</span>
          </p>
          <p className="thirthTag">
            <span className="class">.container</span>
            <span>{" {"}</span>
          </p>
          <p className="fourthTag">
            <span className="prop">flex-direction</span>
            <span>:</span>
            <span className="value"> column</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">margin-top</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
          </p>
          <p className="thirthTag">{"}"}</p>
          <p className="fourthTag">
            <span className="element class">{".box1"}</span>
            <span>,</span>
            <span className="element class">{" .box2"}</span>
            <span>,</span>
            <span className="element class">{" .box3"}</span>
            <span>{" {"}</span>
          </p>
          <p className="fourthTag">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 30px</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">margin-top</span>
            <span>:</span>
            <span className="value"> 20px</span>
            <span>;</span>
          </p>
          <p className="thirthTag">{"}"}</p>
          <p className="secondTag">{"}"}</p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>
          <br />
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">nav</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">h1</span>
            <span>{">"}</span>
            <span>Logo</span>
            <span>{"<"}</span>
            <span className="tag">/h1</span>
            <span>{">"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/nav</span>
            <span>{">"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"container"</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box1"</span>
            <span>{">"}</span>
            <span>1</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box2"</span>
            <span>{">"}</span>
            <span>2</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box3"</span>
            <span>{">"}</span>
            <span>3</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>
        <h3>
          <span className="purple">Code</span> explanation
        </h3>
        <p>
          We set for the whole document the color of white and a specific font,
          now we are focusing on the container, we have a{" "}
          <span className="purple">flexible container</span> with the default
          direction (row) and the items from the container have space around
          them.
        </p>
        <p>
          The <span className="purple">flex items</span> have properties for
          styling, like background color and the dimension is defined by the
          padding.
        </p>
        <p>
          We have only one <span className="purple">breakpoint</span>, if the
          screen width of the device is less than{" "}
          <span className="purple">700px</span> the container direction will
          change into{" "}
          <span className="purple">
            <i>column</i>
          </span>
          , meaning that the items from it will be stacked from top to bottom,
          the items will be smaller with a margin of 20px from top.
        </p>
        <br />
        <p className="res">
          Result, if you are on phone you will already see the styles from the
          breakpoint, for a better understanding please view this lesson on a
          desktop device.
        </p>
        <iframe
          className="result2"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
          style={{
            maxHeight: "500px",
            minHeight: "500px",
            minWidth: "280px",
            maxWidth: "100%",
          }}
        />
        <p>Remainders:</p>{" "}
        <p>
          The <span className="purple">*</span> selector will select all the
          elements in the document.
        </p>
        <p>
          To select more elements at once you can separate the selector with a
          comma, (e.g. div, p, span).
        </p>{" "}
        <p>
          We think you know that but the{" "}
          <span className="purple">{"<style>"}</span> tag must be in the{" "}
          <span className="purple">{"<head>"}</span> tag, in the code for the
          example we didn't put the syntax for the web page, if you want to use
          that code please put the style in the head tag and rest of the code in
          the body.
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

export default RES;
