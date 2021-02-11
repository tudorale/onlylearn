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

        history.push("/html5/links");
      
  };
  const previousLesson = () => {
 
        history.push("/html5/forms");
      
  };
  const handleEditor = () => {
    
        history.push("/editor");
     
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const t = `
  <table border style="color: white; width: 100%;margin-top: 15px; border: 1px solid white">

<tr>

<th>Name</th>

<th>Age</th>

</tr>

<tr>

<td>Justin</td>

<td>15</td>

</tr>
<tr>

<td>Mike</td>

<td>17</td>

</tr>

</table>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Tables</h1>
        <p>
          Tables in <span className="purple">{"HTML"}</span> are pretty easy to
          make, the container that will wrap all the specific tags for the table
          is <span className="purple">{"<table>"}</span>. Each row from the
          table is defined with the tag <span className="purple">{"<tr>"}</span>
          , for the first row that represents the title for each column we will
          use the tag <span className="purple">{"<th>"}</span> between the{" "}
          <span className="purple">{"<tr>"}</span> tag. And for other rows we
          will use the same tag, <span className="purple">{"<tr>"}</span> but
          between this element we will use the{" "}
          <span className="purple">{"<td>"}</span> tag. The text from the{" "}
          <span className="purple">{"<th>"}</span> tag is bold and center and
          the one from <span className="purple">{"<td>"}</span> is normal and
          left aligned.
        </p>
        <p>
          When you make a table it has no border, you can make a border using
          the <span className="purple">{"border"}</span> attribute on the table
          tag, you can set the width for the border if you want or you can style
          it with the style attribute but for now we don't want to use{" "}
          <span className="purple">CSS</span>. For the{" "}
          <span className="purple">{"<th>"}</span> tag you have 2 attributes:
        </p>
        <p>
          <span className="purple">rowspan</span> - make a cell span more than
          one row.
        </p>
        <p>
          <span className="purple">colspan</span> - make a cell span more than
          one column.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">table</span>
            <span className="inTag"> border</span>
            <span className="inTag"> width</span>
            <span>=</span>
            <span className="inTagValue"> "100%"</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">tr</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">th</span>
            <span>{">"}</span>
            Name
            <span>{"<"}</span>
            <span className="tag">/th</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">th</span>
            <span>{">"}</span>
            Age
            <span>{"<"}</span>
            <span className="tag">/th</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">/tr</span>
            <span>{">"}</span>
          </p>

          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">tr</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">td</span>
            <span>{">"}</span>
            Justin
            <span>{"<"}</span>
            <span className="tag">/td</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">td</span>
            <span>{">"}</span>
            15
            <span>{"<"}</span>
            <span className="tag">/td</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">/tr</span>
            <span>{">"}</span>
          </p>

          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">tr</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">td</span>
            <span>{">"}</span>
            Mike
            <span>{"<"}</span>
            <span className="tag">/td</span>
            <span>{">"}</span>
          </p>
          <p className="thirthTag">
            <span>{"<"}</span>
            <span className="tag">td</span>
            <span>{">"}</span>
            17
            <span>{"<"}</span>
            <span className="tag">/td</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">/tr</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/table</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={t}
          title="output"
          style={{ height: "110px" }}
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

export default HTMLLesson12;
