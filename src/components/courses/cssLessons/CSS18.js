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

        history.push("/css3/outline");
      
  };

  const handleEditor = () => {
        history.push("/editor");
     
  };
  const previousLesson = () => {

        history.push("/css3/opacity&visibility");
    
  };

  const c = `
  <style>

  .box{
  
  overflow: auto;
  
  width: 100%;
  
  height: 250px;
  
  
  }
  p{
      color: white;
      font-size: 1.2rem;
  }
  
  </style>
  
  <div class="box">
  
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium eu tortor porta varius. Morbi a cursus nunc. Nunc sit amet nulla scelerisque, scelerisque nunc nec, dignissim mi. In hac habitasse platea dictumst. Proin eget magna nec quam laoreet ultricies. Etiam suscipit, ante et ultricies finibus, quam ex volutpat lectus, eget volutpat leo ipsum non felis. Quisque fringilla erat ut fermentum convallis. Morbi finibus, purus vitae fringilla eleifend, massa ipsum rutrum risus, quis pretium erat nibh in lectus. Suspendisse ac ante iaculis, molestie massa ac, porttitor mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum et ante eget vehicula. Pellentesque tincidunt placerat odio, in pharetra dui efficitur dignissim. Aliquam erat volutpat. Mauris a felis sed metus egestas porttitor id sit amet turpis. Aliquam nec venenatis dolor.

Fusce pharetra enim nec vulputate pulvinar. Nulla viverra euismod lorem, et efficitur dolor imperdiet id. Cras sed ipsum eget ligula lobortis accumsan at molestie nibh. In ultricies justo nec vehicula convallis. Vestibulum id dui sed massa tristique bibendum. Sed rutrum, est eget lacinia ornare, enim nulla semper nisl, ac ultrices justo elit ac lacus. Phasellus ac vestibulum magna, eu commodo ex. Nam dapibus justo quis aliquam tristique. Pellentesque facilisis velit ut dignissim euismod. Duis faucibus porttitor aliquam.

Aliquam semper, erat eget volutpat tempor, massa mi auctor nunc, vitae semper turpis nibh quis libero. In vel turpis eu nisl vehicula porta. Integer in augue neque. Vivamus luctus a quam a rhoncus. Nunc nec quam sed velit tempor porttitor vitae eu nibh. Proin tortor metus, hendrerit sit amet nisl sit amet, lacinia congue mi. Vivamus et pulvinar velit. Nunc sem orci, vestibulum ac porttitor nec, egestas sit amet mauris. Maecenas ac blandit diam. Aenean nisl orci, accumsan et tristique at, lacinia eu lectus. Vestibulum vitae cursus felis, id tincidunt ante. Morbi sed lacus vel enim hendrerit vehicula. Nam faucibus magna nunc, eu dictum dolor cursus sit amet. Nulla placerat in tellus id ultricies. Nam elementum odio nisi, nec accumsan leo malesuada eget. Suspendisse sodales ipsum justo, ac mattis tellus aliquet faucibus.

Sed quis iaculis elit. Donec tristique maximus fringilla. Duis a felis facilisis eros tincidunt tempus ac sed ante. Vivamus orci sem, ullamcorper a est vitae, ornare finibus tellus. Sed quis turpis eu elit dapibus tempus non ut neque. Sed sagittis augue ipsum, non interdum magna sodales non. Sed interdum tortor in placerat semper. Fusce placerat ex vel vulputate ullamcorper. Curabitur a erat consectetur, vehicula tortor at, finibus lacus. Fusce pretium lectus tellus, eu euismod arcu mollis vel. Vivamus mattis nunc in scelerisque bibendum. Donec porta, felis convallis mollis dignissim, tortor ante euismod nunc, non blandit nibh purus sed arcu. In in tristique risus. Praesent nec lectus nec justo convallis scelerisque.</p>  
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Overflow</h1>
        <p>
          The <span className="purple">overflow</span> property is specifying
          what should happen if the content is overflowing an element.
        </p>
        <p>
          More exactly is specifies whether to clip the content or to add scrollbars
          when an element's content is too big to fit in the specific
          dimensions. This property is working on a block element with a
          specified height.
        </p>
        <p>The values for this property are:</p>
        <p>
          <span className="purple">visible</span> - default value, the overflow
          is not clipped, the content will render outside the element.
        </p>
        <p>
          <span className="purple">hidden</span> - the overflow is clipped, the
          rest of the content that is not fitting will be invisible
        </p>
        <p>
          <span className="purple">scroll</span> - the overflow is clipped, but
          a scrollbar is added on X axis or Y axis or both to see the rest of
          the content.{" "}
        </p>
        <p>
          <span className="purple">auto</span> - if the overflow is clipped, a
          scrollbar will appear to see the rest of the content.
        </p>
        <p>
          If you want to control the overflowing on the left and right you can
          use the <span className="purple">overflow-x</span> property and the
          values are the same (visible,hidden,scroll,auto).
        </p>
        <p>
          And to control the overflowing on the top and bottom you can use the{" "}
          <span className="purple">overflow-y</span> property with the same
          values (visible,hidden, auto, scroll).
        </p>
        <br />
        <p className="res">
          Example using overflow auto, the box has a specific height and the
          content is not fitting, a scrolling mechanism is provided, if the
          overflow is hidden, you will see only the content that is fitting in
          the height of the box (250px) and the rest of the content will be
          invisible. If the width was smaller on the X axis will appear a
          scrolling mechanism too.
        </p>
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
            <span className="prop">overflow</span>
            <span>:</span>
            <span className="value"> auto</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 100%</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 250px</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="element ">{"p"}</span>
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
          </p>
          <p className="secondTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Dummy text for the example</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>

        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          style={{ height: "270px" }}
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
