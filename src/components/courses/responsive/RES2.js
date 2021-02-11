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
        history.push("/responsive/flexbox");
      
  };
  const previousLesson = () => {
    
        history.push("/responsive/introduction");
   
  };
  const handleEditor = () => {
   
        history.push("/editor");
    
  };
  const handleCSS = () => {
  
        history.push("/css3/@import&@keyframes&@media");
     
  };

  const c = `
  <style>

  p{
  
  color: purple;
  
  font-size: 1.25rem;
  
  }
  
  @media only screen and (max-width: 700px) {
  
  p {
  
  color: white;
  
  font-size: 1.1rem;
  
  };
  
  };
  
  </style>
  
  <p>Resize the result from the bottom right corner.</p>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Media queries</h1>
        <p>
          <span className="purple">Media queries</span> are the most important
          when we talk about responsive, this technique was introduced in{" "}
          <span className="purple">CSS3</span>, it uses the{" "}
          <span className="purple">@media</span> rule, we talked about this in a
          special lesson when we learned <span className="purple">CSS3</span>,
          click{" "}
          <span
            className="purple"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleCSS}
          >
            here
          </span>{" "}
          to see the syntax for this rule.
          <br />
          <br />
          The <span className="purple">@media</span> rule is used for media
          queries, to apply different styles based on the media type.
          <br />
          Media queries can be used to check different things: width and height
          of the viewport, orientation, resolution.
          <br />
          The media queries are used in most of the time for responsive
          websites, you can use the media queries to specify that certain style
          are only for printed documents or for screen renders, (print, screen).
          <br />
          <br />
          When you start to design a website you can choose between{" "}
          <span className="purple">mobile first</span> and{" "}
          <span className="purple">desktop first</span>, mobile first means
          designing for mobile before desktop or any other device, and desktop
          first means designing for desktop before mobile, it is up to you how
          you want to start designing your website.
          <br />
          <br />
          There are many devices with different screens, and you have to make your website responsive for each device,
          you can do that creating a <span className="purple">breakpoint</span> for each device.{" "}
          <br />
          We have different breakpoints for different categories, these are for
          mobile first.
          <br />
          <br />
          small devices ( {">"} 600px) - the{" "}
          <span className="purple">min-width</span> will be 600px.
          <br />
          <br />
          medium devices ( {">"} 780px) - the{" "}
          <span className="purple">min-width</span> will be 780px.
          <br />
          <br />
          large devices ( {">"} 992) - the{" "}
          <span className="purple">min-width</span> will be 992px.
          <br />
          <br />
          extra large devices ( {">"} 1200px) - the{" "}
          <span className="purple">min-width</span> will be 1200px.
          <br />
          <br />
          But, you can add as many breakpoints you want, if an element will
          break at 710px you can add a breakpoint there and fix the element.
          When you make a design with desktop first method you will use{" "}
          <span className="purple">max-width</span> and the width where the
          design is start breaking.
          <br />
          The minimum screen width for a responsive design is 320px, less than
          320px is not necessary.
        </p>
        <br />
        <p className="res">
          Example, if you are on phone or a screen with the width less than
          700px you will see the styles from the breakpoint.{" "}
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
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.25rem</span>
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
            <span className="element">p</span>
            <span>{" {"}</span>
          </p>
          <p className="fourthTag">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.1rem</span>
            <span>;</span>
          </p>
          <p className="thirthTag">{"}"}</p>
          <p className="secondTag">{"}"}</p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/style</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            Resize the result from the bottom right corner.
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result2"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
          style={{
            maxHeight: "70px",
            minHeight: "70px",
            minWidth: "280px",
            maxWidth: "100%",
          }}
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

export default RES;
