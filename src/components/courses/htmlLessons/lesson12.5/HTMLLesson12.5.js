import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson12() {
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

  const nextLesson = () => {
 
        history.push("/html5/styling");
     
  };
  const previousLesson = () => {

        history.push("/html5/tables");
     
  };
  const handleEditor = () => {
   
        history.push("/editor");
    
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const t = `
  <a href="https://www.onlylearn.com/" target="_blank" style="font-size: 1.2rem">Visit the home page</a>


  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Links</h1>
        <p>
          <span className="purple">{"HTML"}</span> links are hyperlinks, with
          them you can click on a text to jump to another page or another
          website, when you move the mouse over a link, the mouse arrow will
          turn into a little hand that specifies that you can click on him.
        </p>
        <p>
          The tag that defines hyperlinks is the{" "}
          <span className="purple">{"<a>"}</span> tag. The most important
          attribute for this element and without this attribute doesn't work
          correctly is <span className="purple">href</span>, which indicates the
          link's destination, the value between the opened tag and the closed
          one is the text that will be visible to the reader. When the link is
          unvisited will be underlined and blue, if you visited that link will
          be underlined and purple and if is active will be red.
        </p>
        <p>
          This tag has another attribute called{" "}
          <span className="purple">target</span> the value of this attribute can
          be <span className="purple">{'"_blank"'}</span> if you want the
          document to be opened in a new tab,{" "}
          <span className="purple">{'"_self"'}</span> is the default, will be
          opened in the same window,{" "}
          <span className="purple">{'"_parent"'}</span>, this value will open
          the document in the parent frame and the last one is{" "}
          <span className="purple">{'"_top "'}</span>
          this will open the document in the full body of the window.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">a</span>
            <span className="inTag"> href</span>
            <span>=</span>
            <span className="inTagValue">"https://www.onlylearn.com/"</span>
            <span className="inTag"> target</span>
            <span>=</span>
            <span className="inTagValue">"_blank"</span>
            <span>{">"}</span>
            Visit the home page
            <span>{"<"}</span>
            <span className="tag">/a</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={t}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p>
          We have another tag that is related to links, that is the{" "}
          <span className="purple">{"<link />"}</span> tag, which is used to define a
          relationship between the current page and an external resource, this
          element contains only attributes that's why is self-closing, this tag
          is more often used to link your page with the external style sheets (
          CSS files ). The most important and required attribute is{" "}
          <span className="purple">{"rel"}</span>, this attribute specifies the
          relationship between the current document and the linked document. And
          the <span className="purple">{"href"}</span> attribute that specifies
          the location of the linked document.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">link</span>
            <span className="inTag"> rel</span>
            <span>=</span>
            <span className="inTagValue">"stylesheet"</span>
            <span className="inTag"> href</span>
            <span>=</span>
            <span className="inTagValue">"css/style.css"</span>
            <span>{" />"}</span>
          </p>
        </div>
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

export default HTMLLesson12;
