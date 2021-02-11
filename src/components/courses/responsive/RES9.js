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
    
        history.push("/responsive/recommendation");
      
  };
  const previousLesson = () => {

        history.push("/responsive/grid-item");
      
  };
  const handleEditor = () => {
    
        history.push("/editor");
   
  };
  const c = `
  <style>

    .container{
    
      display: grid;
      
      grid-template-columns: 220px 220px 220px;
      
      grid-template-rows: 300px;
      
      grid-template-areas: 'card1 card2 card3';
      
      grid-gap: 50px;
      
      justify-content: center;
      
      margin-top: 100px;
      
      margin-bottom: 50px;
      
      box-sizing: border-box;
    
    }
    
    .card-1, .card-2, .card-3{
    
      background-color: purple;
      
      border-radius: 10px;
      
      color: white;
      
      font-size: 1.3rem;
      
      text-align: center;
      
      padding: 140px 0px;
    
    }
    
    .card-1{
    
      grid-area: card1;
    
    }
    
    .card-2{
    
      grid-area: card2;
    
    }
    
    .card-3{
    
      grid-area: card3;
    
    }
    
    @media only screen and (max-width: 770px) {
      
      .container {
      
        grid-template-columns: 220px 220px;
        
        grid-template-rows: 300px 300px;
        
        grid-template-areas:
        'card1 card2'
        'card3 .';
      
      }
    
    }
    
    @media only screen and (max-width: 520px) {
    
      .container {
      
        grid-template-columns: 240px;
        
        grid-template-rows: 300px 300px 300px;
        
        grid-template-areas:
        'card1'
        'card2'
        'card3';
      
      }
    
    }
    
  </style>
  
  <div class="container">
  
    <div class="card-1">1</div>
    
    <div class="card-2">2</div>
    
    <div class="card-3">3</div>
  
  </div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Grid with media queries</h1>
        <p>
          The <span className="purple">grid layout</span> is responsive even if
          you don't use <span className="purple">media queries</span>, but it
          will break at some point, with the grid layout and media queries you
          can change the layout when it breaks.
        </p>
        <p>
          The easiest way to change the grid layout is using areas, you can
          change how your items will be placed in the actual website with the{" "}
          <span className="purple">grid-template-areas</span> property.
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
            <span className="element class">{".container"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">display</span>
            <span>:</span>
            <span className="value"> grid</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-columns</span>
            <span>:</span>
            <span className="value"> 220px 220px 220px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-rows</span>
            <span>:</span>
            <span className="value"> 300px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-areas</span>
            <span>:</span>
            <span className="value"> 'card1 card2 card3'</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-gap</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">justify-content</span>
            <span>:</span>
            <span className="value"> center</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-top</span>
            <span>:</span>
            <span className="value"> 100px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">margin-bottom</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">box-sizing</span>
            <span>:</span>
            <span className="value"> border-box</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".card-1"}</span>
            <span>,</span>
            <span className="element class">{" .card-2"}</span>
            <span>,</span>
            <span className="element class">{" .card-3"}</span>

            <span>{"{"}</span>
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
            <span className="value"> 10px</span>
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
            <span className="value"> 1.3rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">text-align</span>
            <span>:</span>
            <span className="value"> center</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 140px 0px</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element class">{".card-1"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> card1</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".card-2"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> card2</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".card-3"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> card3</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="imp">@media</span>
            <span className="element"> only</span>
            <span className="imp"> screen</span>
            <span className="element"> and</span>
            <span> (</span>
            <span className="prop">max-width</span>
            <span>:</span>
            <span className="tag"> 770px</span>
           
            <span>)</span>
            <span>{" {"}</span>
          </p>
          <p className="thirthTag">
            <span className="class">.container</span>
            <span>{" {"}</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-columns</span>
            <span>:</span>
            <span className="value"> 220px 220px</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-rows</span>
            <span>:</span>
            <span className="value"> 300px 300px</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-areas</span>
            <span>:</span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'card1 card2'
            </span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'card3 .'
            </span>
            <span>;</span>
          </p>
          <p className="fourthTag">{"}"}</p>

          <p className="style">{"}"}</p>

          <p className="style">
            <span className="imp">@media</span>
            <span className="element"> only</span>
            <span className="imp"> screen</span>
            <span className="element"> and</span>
            <span> (</span>
            <span className="prop">max-width</span>
            <span>:</span>
            <span className="tag"> 520px</span>
            
            <span>)</span>
            <span>{" {"}</span>
          </p>
          <p className="thirthTag">
            <span className="class">.container</span>
            <span>{" {"}</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-columns</span>
            <span>:</span>
            <span className="value"> 240px</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-rows</span>
            <span>:</span>
            <span className="value"> 300px 300px 300px</span>
            <span>;</span>
          </p>
          <p className="fourthTag">
            <span className="prop">grid-template-areas</span>
            <span>:</span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'card1'
            </span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'card2'
            </span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'card3'
            </span>
            <span>;</span>
          </p>
          <p className="fourthTag">{"}"}</p>

          <p className="style">{"}"}</p>

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
            <span className="inTagValue">"container"</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"card-1"</span>
            <span>{">"}</span>1<span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"card-2"</span>
            <span>{">"}</span>2<span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"card-3"</span>
            <span>{">"}</span>3<span>{"<"}</span>
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
          For devices that have a screen width of more than{" "}
          <span className="purple">770px</span> we have a grid layout with 3
          columns and 1 row, each column is 220px and the row is 300px, the
          layout is centered and have a gap of 50px, the area is:
          <br />
          <span className="purple">card</span>{" "}
          <span className="purple">card</span>{" "}
          <span className="purple">card</span>
        </p>
        <p>
          Each grid item have a name, a background color, and other properties
          for styling.
        </p>
        <p>
          The first <span className="purple">breakpoint</span> is at{" "}
          <span className="purple">770px</span>, if the screen width is less
          than
          <span className="purple"> 770px</span> the layout will change into: 2
          columns (220px each) and 2 rows (300px each), and the area is changed
          into: <br />
          <span className="purple">card card</span>
          <br />
          <span className="purple">card</span>
        </p>
        <p>
          The second <span className="purple">breakpoint</span> is at{" "}
          <span className="purple">520px</span>, if the screen width is less
          than 520px the layout will change into: 1 column (240px), 3 rows
          (300px each), and the area is changed into: <br />
          <span className="purple">card</span>
          <br />
          <span className="purple">card</span>
          <br />
          <span className="purple">card</span>
        </p>
        <br />
        <p className="res">
          Result, please resize the result from the bottom right corner, for a
          better understanding please view this lesson on a desktop device.
        </p>
        <iframe
          className="result2"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          style={{
            maxHeight: "500px",
            minHeight: "500px",
            minWidth: "280px",
            maxWidth: "100%",
          }}
        />
        <h3>Remainders</h3>
        <p>
          The <span className="purple">box-sizing</span> property with the value
          of <span className="purple">border-box</span> will make the element
          dimension includes the content, padding and border and the actual
          width and height.
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
