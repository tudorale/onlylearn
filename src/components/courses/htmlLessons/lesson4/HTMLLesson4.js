import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";
import "../../../../main.css";
function HTMLLesson4() {
  const history = useHistory();
  let location = useLocation();
  const userStatus = useContext(UserContext);
  const { user, setUser } = userStatus;
  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
      fire.auth().signOut();
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

  const ul = `
    <ul style="color: white; font-size: 1.1rem">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
    
  `;
  const ol = `
  <ol style="color: white; font-size: 1.1rem">
      <li>item</li>
      <li>item</li>
      <li>item</li>
  </ol>
  
`;
  const nextLesson = () => {
   
        history.push("/html5/attributes");
      
  };
  const previousLesson = () => {
   
        history.push("/html5/headings");
    
  };
  const handleEditor = () => {
    
        history.push("/editor");
     
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Ordered and unordered list</h1>
        <h2>Ordered list</h2>
        <p>
          You can use a ordered list in your website using{" "}
          <span className="purple">{"<ol>"}</span> tag, this element also has a
          closing tag <span className="purple">{"</ol>"}</span>, between these
          elements you must use the <span className="purple">{"<li>"}</span> tag
          which represents the item from the list, this one also have a closing
          tag: <span className="purple">{"</li>"}</span>.
        </p>
        <p className="res">Here is an example for a ordered list</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"ol"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"/ol"}</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          style={{ height: "100px" }}
          srcDoc={ol}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <h2>Unordered list</h2>
        <p>
          Unordered lists are pretty much the same as the ordered one's, as you
          can see in the example above when you use ordered lists,for each
          element in that list is added the index in front of it. On unordered
          list that index is not anymore added and you have a marker in front of
          each element ( you can change that with a special attribute called
          "type", we will learn more about that on Attributes lesson, you can
          also,change the type at the ordered list).
        </p>
        <p>
          To use the unordered list you have to type the{" "}
          <span className="purple">{"<ul>"}</span> tag and close it, between
          these elements you use the same tag you used in the ordered list:{" "}
          <span className="purple">{"<li>"}</span>, make sure to close it.
        </p>
        <p className="res">Here is an example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"ul"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">{"li"}</span>
            <span>{">"}</span>
            <span>item</span>
            <span>{"<"}</span>
            <span className="tag">{"/li"}</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">{"/ul"}</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          style={{ height: "100px" }}
          srcDoc={ul}
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

export default HTMLLesson4;
