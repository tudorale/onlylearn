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
      history.push("/css3/priority");
    
  };

  const handleEditor = () => {
      history.push("/editor");
     
  };
  const c = `
  <style>

p{
color: purple;
font-size: 1.15rem;
}

</style>

<p>CSS is fun!</p>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>First contact with CSS3</h1>
        <p>
          A new journey has begun!, First, <span className="purple">CSS3</span> is a better version of
          <span className="purple"> CSS2.1</span> and stands for Cascading Style Sheets. This new version brings us a lot of new properties that are very useful,
          like rounded corners, gradients for the background, shadows, and makes the responsiveness much easier.
        </p>
        <p>
          As you saw in the name we have something called "style sheet", we have that syntax because with this language we are able to
          style the document written in<span className="purple"> HTML</span>. Basically with{" "}
          <span className="purple">CSS</span> you can give life to your website
          and will not be any more just some black text on a white background.
        </p>
        <p>
          Your <span className="purple">CSS</span> code can be written in 3 ways,
          first, you can use inline-styling with the attribute called{" "}
          <span className="purple">style</span> (e.g. style="color: red"), the
          second way is to put your code between the{" "}
          <span className="purple">{"<style>"}</span> tag and the last way is to
          make a separate file with the termination ".css" and link it in your
          <span className="purple">{" HTML"}</span> document with the{" "}
          <span className="purple">{"<link />"}</span> tag. Along this course we
          will use the second way because is much easier.
        </p>
        <p>
          To style a specific element you have to select that element with a specific selector and add
          curly brackets, and between those curly brackets you add your{" "}
          <span className="purple"> CSS </span>
          code, you have more methods to select an element or more elements in
          <span className="purple"> CSS</span>.
        </p>
        <p>
          You can style an element or more elements with some specific methods
          called "selectors", you can use the element selector method, using the
          name of the tag or using the following:
        </p>
        <p>
          <span className="purple">{"id"}</span> - ID selector, using the id
          attribute, an ID is unique within the document, you use the "#" symbol
          before the name of the id.
        </p>
        <p>
          <span className="purple">{"class"}</span> - class selector, using the
          class attribute for one element or multiple elements in the document,
          you have to use "." before the name of the class, when you use the
          same class for more elements, when you style using the class you style
          more elements at once.
        </p>
        <p>
          <span className="purple">{"*"}</span> - selects every element in
          the document.
        </p>
        <p>
          And we have other methods using pseudo classes, but we will talk about
          this later.
        </p>
        <p>
          The syntax to style something is:{" "}
          <span className="purple">{"selector{ property:value }"}</span>
        </p>
        <br />
        <p className="res">
          Example using the color property on  all "p" elements in the
          document.
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
            CSS is fun!
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
        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            Next lesson
          </button>
          <button className="practice" onClick={handleEditor}>
            Practice
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CSS1;
