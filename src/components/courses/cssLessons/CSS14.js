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
        history.push("/css3/display");
      
  };

  const handleEditor = () => {
        history.push("/editor");
    
  };
  const previousLesson = () => {
 
        history.push("/css3/shadows");
      
  };
  const c = `<style>

  p{
  
  text-align: center;
  
  font-size: 1.2rem;
  
  color: white;
  
  }
  
  </style>
  
  <p>I'm in center!</p>`;

  const d = `<style>

  .box{
  
  margin: 0 auto;
  
  width: 200px;
  
  height: 150px;
  background-color: purple;
  }
  
  </style>
  
  <div class="box"></div>`;

  const p = `<style>

  .box{
  
  position: absolute;
  
  top: 50%;
  
  left: 50%;
  
  transform: translate(-50%, -50%);
  
  width: 200px;
  
  height: 150px;
  
  background-color: purple;
  
  }
  


  
  </style>
  
  <div class="box"></div>
  
`;

  const f = `<style>

  .text1{
  
  float: right;
  color: white;
  font-size: 1.2rem;
  
  }
  
  .text2{
  
  position: absolute;
  
  right: 0px;
  color: white;
  font-size: 1.2rem;
  top: 50px;
  
  }
  
  </style>
  
  <p class="text1">I'm using float!</p>
  
  <p class="text2">I'm using absolute position!</p>`;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Alignment</h1>
        <p>
          We have different methods to align something on our page, we have a
          specific property for text called{" "}
          <span className="purple">text-align</span>, this property will align
          the center by its value, the values can be{" "}
          <span className="purple">left</span>,{" "}
          <span className="purple">right</span>,{" "}
          <span className="purple">center</span>, and
          <span className="purple"> justify</span>, the default value is left.
        </p>
        <p>
          We have another property called{" "}
          <span className="purple">vertical-align</span> the values for this
          property can be <span className="purple">top</span>,{" "}
          <span className="purple">middle</span>, and{" "}
          <span className="purple"> bottom</span>, this property is setting the
          vertical alignment for an element.
        </p>
        <p>
          The methods from this lesson are very helpful because the elements are
          responsive even if they are in center, when you resize the screen you
          see how the element is in center according to the screen width.
        </p>
        <br />
        <p className="res">Example using text align property.</p>
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
            <span className="prop">text-align</span>
            <span>:</span>
            <span className="value"> center</span>
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
            <span>I'm in center!</span>
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
          We have more methods to center an element, this involves more
          properties.
        </p>
        <p>
          The first method is using <span className="purple">margin</span>{" "}
          property, we can set margin with the value to{" "}
          <span className="purple"> 0 auto</span> to center horizontally an
          element, you have to set a width because the element will take that
          specific width and the remaining space will be split equally between
          the left and right margins.
        </p>
        <br />
        <p className="res">Example.</p>
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
            <span className="prop">margin</span>
            <span>:</span>
            <span className="value"> 0 auto</span>
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
          srcDoc={d}
          title="output"
          style={{ height: "165px" }}
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p>
          The next method is using more properties to center horizontally and
          vertically an element, the properties that we are going to use are{" "}
          <span className="purple">position</span> with the value of{" "}
          <span className="purple">absolute</span>,{" "}
          <span className="purple">transform</span> with the value{" "}
          <span className="purple">translate(-50%, -50%)</span> and we are going
          to use the <span className="purple">top</span> and{" "}
          <span className="purple">left</span> properties with the value of{" "}
          <span className="purple">50%</span>, to center only horizontally you
          should change the top property with a specific value like px, and to
          center only vertically use a specific value for the left property.
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
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> absolute</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 50%</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">left</span>
            <span>:</span>
            <span className="value"> 50%</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">transform</span>
            <span>:</span>
            <span className="value"> translate(-50%, -50%)</span>
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
          srcDoc={p}
          title="output"
          style={{ height: "165px" }}
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p>
          To align an element to the left or to the right we have 2 methods,
          first, we can you use the specific property called{" "}
          <span className="purple"> float</span> with the value of{" "}
          <span className="purple"> left</span> or{" "}
          <span className="purple"> right</span>, and the second method is to
          use the <span className="purple">position</span> property with the
          value of <span className="purple">absolute</span> and the{" "}
          <span className="purple">left</span> and
          <span className="purple"> right</span> property with the value of{" "}
          <span className="purple">0</span> (or 0px).
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
            <span className="element class">{".text1"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">float</span>
            <span>:</span>
            <span className="value"> right</span>
            <span>;</span>
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
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element class">{".text2"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> absolute</span>
            <span>;</span>
          </p>

          <p className="styles">
            <span className="prop">right</span>
            <span>:</span>
            <span className="value"> 0</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
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
            <span className="inTagValue">"text1"</span>
            <span>{">"}</span>
            <span>I'm using float!</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"text2"</span>
            <span>{">"}</span>
            <span>I'm using absolute position!</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={f}
          title="output"
          style={{ height: "115px" }}
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
