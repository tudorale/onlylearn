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
    
        history.push("/css3/variables");
      
  };

  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  const previousLesson = () => {

        history.push("/css3/comments");
     
  };
  const c = `
  <style>

button{

color: white;

font-size: 1.2rem;

width: 120px;

height: 40px;

background-color: purple;

border: none;

transition: all 2s ease-in-out;

}

button:hover{

background-color: red;

}

</style>

<button>Hover me!</button>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Transition</h1>
        <p>
          <span className="purple">CSS Transitions</span> allows you to change
          the property values smoothly, or at a given duration.
        </p>
        <p>
          To add a transition to an element, you have to specify two things: the
          <span className="purple"> CSS</span> property that you add the effect
          and the duration, without these two things the effect will not work, a
          transition effect could occur when a user hover over an element or
          other interactions with the element.
        </p>
        <h3>
          The first property is the{" "}
          <span className="purple"> transition-property</span>
        </h3>
        <p>
          Is specifying the name of the CSS property that you want to add the
          effect, the values for this property can be:
        </p>
        <p>
          <span className="purple">none</span> - no property will get the
          transition effect.
        </p>
        <p>
          <span className="purple">all</span> - default value, all properties
          will get the transition effect.
        </p>
        <p>
          <span className="purple">the property name</span> - define the element
          that the transition effect is for, or more CSS properties separated by
          a comma.
        </p>
        <h3>
          The next property is called{" "}
          <span className="purple">transition-duration</span>
        </h3>
        <p>
          Is specifying how many seconds or milliseconds a transition takes to
          complete, the default value is 0s, meaning there will be no effect,
          the value must be in seconds or milliseconds.
        </p>
        <h3>
          The <span className="purple">transition-timing-function</span>{" "}
          property
        </h3>
        <p>
          Specifies the speed of the transition effect, this property allows the
          transition to change his speed.
        </p>
        <p>The values can be:</p>
        <p>
          <span className="purple">ease</span> - default value, the effect will
          start slow, then fast, then end slowly.
        </p>
        <p>
          <span className="purple">ease-in</span> - the effect will have a slow
          start.
        </p>
        <p>
          <span className="purple">ease-out</span> - the effect will end slowly.
        </p>
        <p>
          <span className="purple">ease-in-out</span> - the effect will start
          slow and will end slow.
        </p>
        <p>
          <span className="purple">cubic-bezier(v,v,v,v)</span> - define your
          own values for the speed.
        </p>
        <h3>
          The last property is <span className="purple">transition-delay</span>
        </h3>
        <p>
          Allows you to specify when the transition effect will start, the value
          must be defined in seconds or milliseconds, the value is defining the
          time to wait before the transition effect will start, the default
          value will be 0s (no delay).
        </p>
        <p>
          The shorthand property for all these properties is{" "}
          <span className="purple">transition</span>, the syntax is:
          transition-property, transition-duration, transition-timing-function,
          transition-delay. The first two are required.
        </p>
        <br />
        <p className="res">
          Example, the background of the color is smoothly changed when you
          mouse over.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element">{"button"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 120px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 40px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">border</span>
            <span>:</span>
            <span className="value"> none</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">transition</span>
            <span>:</span>
            <span className="value"> all 2s ease-in-out</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"button"}</span>
            <span>:</span>
            <span className="pseudo">hover</span>
            <span>{"{"}</span>
          </p>

          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> red</span>
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
            <span className="tag">button</span>
            <span>{">"}</span>
            <span>Hover me!</span>
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          frameBorder="0"
          scrolling="no"
          sandbox="allow-scripts"
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
