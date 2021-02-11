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
    
        history.push("/css3/functions");
      
  };

  const handleEditor = () => {

        history.push("/editor");
    
  };
  const previousLesson = () => {
   
        history.push("/css3/transition");
    
  };
  const c = `
  <style>

:root{

--main: white;

--secondary: purple;

--font: 1.2rem;

}

button{

color: var(--main);

background-color: var(--secondary);

font-size: var(--font);

width: 120px;

height: 40px;
border:none;
}
p{

color: var(--main);

font-size: var(--font);

}

</style>

<button>Variables</button>

<p>Lorem ipsum</p>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Variables</h1>
        <p>
          <span className="purple">CSS Variables</span> are very useful for a
          big application, the <span className="purple">var()</span> function is
          used to insert the value of a <span className="purple">CSS</span>{" "}
          variable.
        </p>
        <p>
          You can create variables with local or global scope, you can change
          the variables with <span className="purple">JavaScript</span> or based
          on media queries, a good example where you can use variables is when
          you have a design with 2-3 colors and instead of copy and paste the
          same colors, you can place them in the document's root and use
          variables to add the color to the elements, is very useful because
          when you want to change the color for all the elements that have a
          specific variable, you can make one change in the root section with a
          new color and all the elements will have that color.
        </p>
        <p>
          First, to create a variable with global scope, you have to declare it
          inside the <span className="purple">:root</span> selector, this
          selector matches the document's root, if you want a local scope,
          declare it inside the selectors that is going to use it.
        </p>
        <p>
          Inside the root selector you must set the property with two dashes in
          front of the name of the variable, and the value for the property is
          the variable value, (e.g. --main: red, we created a variable called
          "main" which contain the value of "red").
        </p>
        <p>
          Now, to use that variable you have to use the{" "}
          <span className="purple">var()</span> function, the value between the
          brackets must be the <span className="purple">name</span> of the
          variable that is declared inside the root selector and must start with
          two dashes, that is a required value, but you have an optional one,
          after the name of the variable you can add a comma, and a{" "}
          <span className="purple">value</span>, if the variable is not found
          the property will take that value, (e.g. color: var(--main, green), if
          the "main" variable is not found the color will be green).
        </p>
        <br />
        <p className="res">
          Example, when you want to change the colors, the font-size for the
          button and text, you only need to change it in the root section.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span>:</span>
            <span className="pseudo">{"root"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span>--main</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span>--secondary</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span>--font</span>
            <span>:</span>
            <span className="value"> 1.2rem</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element">{"button"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="class"> var</span>
            <span>(--main)</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="class"> var</span>
            <span>(--secondary)</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="class"> var</span>
            <span>(--font)</span>
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
            <span className="prop">border</span>
            <span>:</span>
            <span className="value"> none</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element">{"p"}</span>
            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="class"> var</span>
            <span>(--main)</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="class"> var</span>
            <span>(--font)</span>
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
            <span>Variables</span>
            <span>{"<"}</span>
            <span className="tag">/button</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Lorem ipsum</span>
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
          style={{ height: "100px" }}
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
