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
        history.push("/css3/alignment");
     
  };

  const handleEditor = () => {
  
        history.push("/editor");
      
  };
  const previousLesson = () => {
        history.push("/css3/transform");
    
  };
  const s = `<style>

  .box{
  
  box-shadow: 10px 10px 5px yellow;
  
  background-color: white;
  
  width: 200px;
  
  height: 150px;
  
  }
  
  </style>
  
  <div class="box"></div>`;
  const c = `

  <style>

p{

text-shadow: 2px 2px 5px yellow;

font-size: 1.3rem;
color: white;

}

</style>

<p>I'm a text with shadow!</div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Shadows</h1>
        <p>
          With <span className="purple">CSS</span> you can add the shadow effect
          to an element and to text, the properties are:{" "}
          <span className="purple">box-shadow</span> and{" "}
          <span className="purple">text-shadow</span>.
        </p>
        <h3>
          The <span className="purple">text-shadow</span> property
        </h3>
        <p>
          Allows you to apply shadow to text, the value for this is the
          horizontal shadow, the vertical shadow, blur and color, you can add
          more than one shadow to text separated by a comma.
        </p>
        <p>
          It's not necessary all the 4 values, you can add only the horizontal
          and the vertical shadows and the effect will work.
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
            <span className="element">{"p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">text-shadow</span>
            <span>:</span>
            <span className="value"> 2px 2px 5px yellow</span>
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
            <span>I'm a text with shadow!</span>
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
        <h3>
          The <span className="purple">box-shadow</span> property
        </h3>
        <p>
          Is applying shadow to elements, you can use the simple way, only
          specify the horizontal shadow and the vertical shadow, like the text
          shadow property you can add blur and color to your shadow, in the same
          order, and also can add more effects separate by a comma.
        </p>
        <p className="res">Example</p>
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
            <span className="prop">box-shadow</span>
            <span>:</span>
            <span className="value"> 10px 10px 5px yellow</span>
            <span>;</span>
          </p>

          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> white</span>
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
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={s}
          style={{ height: "190px" }}
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
