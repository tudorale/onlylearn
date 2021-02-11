import React, { useEffect, useContext } from "react";
import "../mainHTML.css";
import "../../../../main.css";
import Navbar from "../../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/FooterTwo";
import UserContext from "../../../services/UserContext";
import fire from "../../../services/Firebase";

function HTMLLesson11() {
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
  
        history.push("/html5/forms");
     
  };
  const previousLesson = () => {
   
        history.push("/html5/labels");
     
  };
  const handleEditor = () => {
  
        history.push("/editor");
     
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const f = `
  <select name="electronics" style="height: 25px;">
<optgroup label="Phones">

<option value="iphone">Iphone 12</option>

<option value="samsung">Samsung S20</option>

<option value="xiaomi">Xiaomi Redmi 6A</option>

</optgroup>

<optgroup label="Laptops">

<option value="hp">HP Probook 6540b</option>

<option value="asus">Asus M509DA</option>

</optgroup>

</select>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Select and option</h1>
        <p>
          With the <span className="purple">{"<select>"}</span> and{" "}
          <span className="purple">{"<option>"}</span> tags you can make a drop
          down list, the main tag for the drop down list is the{" "}
          <span className="purple">{"<select>"}</span> tag, between this tag you
          should use the <span className="purple">{"<option>"}</span> tag which
          defines the available options in the drop down list.
        </p>
        <h3>
          Attributes for the <span className="purple">{"<select>"}</span> tag
        </h3>
        <p>
          <span className="purple">name</span> - set a name for the list.
        </p>
        <p>
          <span className="purple">form</span> - specify the form that the list
          belongs to.
        </p>
        <p>
          <span className="purple">disabled</span> - the list will be disabled.
        </p>
        <p>
          <span className="purple">autofocus</span> - the list will get
          automatically focus when the page is loaded.
        </p>
        <p>
          <span className="purple">required</span> - the user must select a
          value before submitting the form.
        </p>
        <p>
          <span className="purple">size</span> - defines a number of visible
          options.
        </p>
        <p>
          <span className="purple">multiple</span> - the user can select
          multiple options at once.
        </p>
        <h3>
          The <span className="purple">{"<option>"}</span> tag
        </h3>
        <p>
          Is defining an available option in the drop down list, this element can
          be used without any attributes but is recommended to use the{" "}
          <span className="purple">value</span> attribute when you need to send
          the data from the form.
        </p>
        <p>
          Beside the <span className="purple">value</span> attribute we can also
          have the following attributes:
        </p>
        <p>
          The <span className="purple">selected</span> attribute specifies that
          the option is pre-selected, the value for this attribute must be "
          <span className="purple">selected</span>".
        </p>
        <p>
          The <span className="purple">label</span> attribute will define a
          short text for an option.
        </p>
        <p>
          The <span className="purple">disabled</span> attribute specifies that
          an option cannot be selected, the value must be "
          <span className="purple">disabled</span>".
        </p>
        <h3>
          Beside these two tags we can have the{" "}
          <span className="purple">{"<optgroup>"}</span> tag
        </h3>
        <p>
          This tag is used to group related options, before the first option
          from this tag the value from the <span className="purple">label</span>{" "}
          attribute will appear as a bold text.
        </p>
        <br />
        <p className="res">Example</p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">select</span>
            <span className="inTag"> name</span>
            <span>=</span>
            <span className="inTagValue">"electronics"</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">optgroup</span>
            <span className="inTag"> label</span>
            <span>=</span>
            <span className="inTagValue">"Phones"</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">option</span>
            <span className="inTag"> value</span>
            <span>=</span>
            <span className="inTagValue">"iphone"</span>
            <span>{">"}</span>
            <span>Iphone 12</span>
            <span>{"<"}</span>
            <span className="tag">/option</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">option</span>
            <span className="inTag"> value</span>
            <span>=</span>
            <span className="inTagValue">"samsung"</span>
            <span>{">"}</span>
            <span>Samsung S20</span>
            <span>{"<"}</span>
            <span className="tag">/option</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">option</span>
            <span className="inTag"> value</span>
            <span>=</span>
            <span className="inTagValue">"xiaomi"</span>
            <span>{">"}</span>
            <span>Xiaomi Redmi 6A</span>
            <span>{"<"}</span>
            <span className="tag">/option</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">/optgroup</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">optgroup</span>
            <span className="inTag"> label</span>
            <span>=</span>
            <span className="inTagValue">"Laptops"</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">option</span>
            <span className="inTag"> value</span>
            <span>=</span>
            <span className="inTagValue">"hp"</span>
            <span>{">"}</span>
            <span>HP Probook 6540b</span>
            <span>{"<"}</span>
            <span className="tag">/option</span>
            <span>{">"}</span>
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">option</span>
            <span className="inTag"> value</span>
            <span>=</span>
            <span className="inTagValue">"asus"</span>
            <span>{">"}</span>
            <span>Asus M509DA</span>
            <span>{"<"}</span>
            <span className="tag">/option</span>
            <span>{">"}</span>
          </p>

          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">/optgroup</span>
            <span>{">"}</span>
          </p>

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/select</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={f}
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

export default HTMLLesson11;
