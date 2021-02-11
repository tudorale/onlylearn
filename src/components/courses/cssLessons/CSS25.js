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
        history.push("/css3/pseudo-classes");
      
  };

  const handleEditor = () => {

        history.push("/editor");
     
  };
  const previousLesson = () => {
 
        history.push("/css3/rules");
      
  };
  const c = `

  <style>

.box{

width: 250px;

height: 200px;

background-color: white;

animation: rainbow 3s linear infinite alternate;

}

@keyframes rainbow{

0%{ background-color: blue; }

25%{ background-color: cyan; }

50%{ background-color: purple; }

75%{ background-color: orange; }

100%{ background-color: red; }

}

</style>

<div class="box"></div>`;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Animations</h1>
        <p>
          With <span className="purple">CSS Animations</span> you can animate an
          element, changing the style from that element gradually to another
          style, you can change as many CSS properties you want, as many times
          you want, to use animations, you have to specify a keyframe for the
          animation, keyframes hold what style an element will change at  a certain
          time.
        </p>{" "}
        <p>
          We talked about the keyframe rule in the last lesson, let's also see
          here what is a keyframe, the{" "}
          <span className="purple">@keyframes</span> rule is holding the CSS
          styles, the animation will gradually change at a certain time the
          style for the element based on the CSS code inside the keyframe, to
          make an animation work you have to bind it to the element, you can do
          that with <span className="purple">animation-name</span> property. The
          value for the animation name is the name for the keyframe, both names
          must be the same!.
        </p>{" "}
        <h3>
          The <span className="purple">animation-duration</span> property
        </h3>
        <p>
          After we set the name for the animation we have to set the duration,
          we do that with the <span className="purple">animation-duration</span>{" "}
          property, which is defining how long an animation should take to
          complete one cycle. If this property is not specified, no animation
          will occur, because the default value is 0s. The value for this
          property can be specified in seconds or milliseconds.
        </p>{" "}
        <h3>
          The <span className="purple">animation-delay</span> property
        </h3>
        <p>
          With these two properties ({" "}
          <span className="purple">animation-name</span>,{" "}
          <span className="purple">animation-duration</span> ) you can make an
          animation, but we have more properties that help you to control the
          animation, the is <span className="purple">animation-delay</span>{" "}
          property is specifying a delay for the start of an animation. A good
          thing to remember is you can use negative values, if you use negative
          values, the animation will start as if it had already started for the
          number of seconds that you set.
        </p>{" "}
        <h3>
          The <span className="purple">animation-iteration-count</span> property
        </h3>
        <p>
          Is specifying the number of time an animation should run, the values
          for this property can be <span className="purple">infinite</span>, the
          animation is played infinite times, or a{" "}
          <span className="purple">number</span>, the default value is 1.
        </p>{" "}
        <h3>
          The <span className="purple">animation-direction</span> property
        </h3>
        <p>
          Defines how an animation should be played, the values for this
          property can be:
        </p>{" "}
        <p>
          <span className="purple">normal</span> - the default value (forwards).
        </p>{" "}
        <p>
          <span className="purple">reverse</span> - the animation is played in
          reverse (backwards.)
        </p>{" "}
        <p>
          <span className="purple">alternate</span> - the animation is played
          forwards then backwards.
        </p>{" "}
        <p>
          <span className="purple">alternate-reverse</span> - the animation is
          played backwards then forwards.
        </p>{" "}
        <h3>
          The <span className="purple">animation-timing-function</span> property
        </h3>
        <p>
          Is specifying the speed/effect for the animation. The values for this
          property can be:{" "}
        </p>{" "}
        <p>
          <span className="purple">ease</span> - specifies an animation with
          slow start, then fast, then end slowly, this is the default.
        </p>{" "}
        <p>
          <span className="purple">ease-in</span> - the animation will have a slow
          start.
        </p>{" "}
        <p>
          <span className="purple">ease-out</span> - the animation will have a slow
          end.
        </p>{" "}
        <p>
          <span className="purple">ease-in-out</span> - the animation will have a
          slow start and slow end.
        </p>{" "}
        <p>
          <span className="purple">linear</span> - the animation will have the same
          speed from start to end.
        </p>{" "}
        <p>
          <span className="purple">cubic-bezier(v,v,v,v)</span> - define your
          own values.
        </p>{" "}
        <h3>
          The <span className="purple">animation-fill-mode</span> property
        </h3>
        <p>
          The animation is not affecting the element before the first keyframe
          is played or after the last keyframe, and that's what we want, but if you want to change this you can use the{" "}
          <span className="purple">animation-fill-mode</span> property and override the behavior.
        </p>{" "}
        <p>
          <span className="purple">none</span> - default value, the animation
          will not apply any styles to the element after/before the animation.
        </p>{" "}
        <p>
          <span className="purple">forwards</span> - the element will retain the
          style values that are set by the last keyframe.
        </p>{" "}
        <p>
          <span className="purple">backwards</span> - the element will get the
          style values that are set by the first keyframe.
        </p>{" "}
        <p>
          <span className="purple">both</span> - the animation will follow the
          rules for both forwards and backwards.
        </p>
        <h3>
          The <span className="purple">animation</span> property
        </h3>
        <p>
          We think you noticed that these properties are long and many, the{" "}
          <span className="purple">animation</span> property is the shorthand
          property for all 6 properties. The order doesn't really matter but we
          recommend you to use this order: name, duration, timing function,
          delay, iteration count, direction.
        </p>
        <p>
          You don't have to use all 6 properties, you can use what you need, but
          to make an animation work you have to set the name and
          duration, remember that without a keyframe your animation can not work.
        </p>
        <br />
        <p className="res">Example using the shorthand method.</p>
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
            <span className="prop">width</span>
            <span>:</span>
            <span className="value"> 250px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">height</span>
            <span>:</span>
            <span className="value"> 200px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">animation</span>
            <span>:</span>
            <span className="value"> rainbow 3s linear infinite alternate</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>
          <p className="style">
            <span className="class">@keyframes </span>
            <span className="class">rainbow</span>
            <span>{"{"}</span>
          </p>
          <p className="secondTag">
            <span className="element">0%</span>
            <span>{"{ "}</span>
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> blue</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">25%</span>
            <span>{"{ "}</span>
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> cyan</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">50%</span>
            <span>{"{ "}</span>
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">75%</span>
            <span>{"{ "}</span>
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> orange</span>
            <span>;</span>
            <span>{" }"}</span>
          </p>

          <p className="secondTag">
            <span className="element">100%</span>
            <span>{"{ "}</span>
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> red</span>
            <span>;</span>
            <span>{" }"}</span>
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
          srcDoc={c}
          title="output"
          style={{ height: "220px" }}
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
