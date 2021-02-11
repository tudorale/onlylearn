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
        history.push("/css3/transform");
     
  };

  const handleEditor = () => {
        history.push("/editor");
     
  };
  const previousLesson = () => {
        history.push("/css3/box-model");
    
  };
  const c = `
  <style>

.box2{

width: 200px;

height: 150px;

background-color: purple;

position: relative;

top: 60px;

}

.box{

width: 200px;

height: 150px;

background-color: cyan;

}

</style>

<div class="box"></div>

<div class="box2"></div>
  `;

  const a = `
  <style>

.box2{

width: 200px;

height: 150px;

background-color: purple;

position: absolute;

top: 20px;
left: 30px;
}

.box{

width: 200px;

height: 150px;

background-color: cyan;

}

</style>

<div class="box"></div>

<div class="box2"></div>
  `;

  const f = `
  <style>

.box{

width: 200px;

height: 150px;

background-color: purple;

position: fixed;

top: 0;
left: 0;

}

p{

  color: white;
  
  }

</style>

<div class="box"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius porta quam ut lacinia. Aenean finibus at velit et tempus. Phasellus nec maximus magna, at auctor purus. Curabitur tempor tortor vitae faucibus laoreet. Maecenas eu convallis augue, id vehicula neque. Nullam volutpat orci eu porttitor tincidunt. Maecenas eu dignissim felis. Cras auctor lectus in vulputate dignissim. Integer sed semper magna, ac eleifend augue. Nullam accumsan, dui sit amet iaculis pulvinar, dui ipsum maximus leo, quis efficitur enim diam eget tellus. Fusce molestie mollis justo, vitae finibus nunc rhoncus fermentum.

Curabitur rhoncus, erat non convallis condimentum, velit nulla venenatis risus, a semper sapien dolor egestas eros. Vivamus at turpis sed nulla laoreet varius eget vitae orci. Quisque vel enim iaculis, venenatis dui vel, congue leo. Etiam suscipit ante a sodales malesuada. Aenean in massa nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ut feugiat leo. Duis a sem posuere, laoreet mi non, bibendum neque.

Praesent vitae erat vehicula, pretium nunc et, ullamcorper nibh. Vivamus turpis nulla, ultrices pellentesque mauris sed, sagittis ornare mi. Aliquam non pulvinar nisl, et scelerisque tortor. Nunc leo nibh, malesuada ut consequat nec, accumsan et augue. Aliquam vulputate nisl iaculis, hendrerit ligula at, venenatis erat. Nulla tortor odio, posuere quis aliquet id, aliquam non massa. Suspendisse nulla diam, eleifend sed nisi vitae, tempor pellentesque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce euismod rhoncus posuere. Nunc rutrum, ligula luctus rutrum porta, eros mauris viverra elit, vel pellentesque dolor sapien sed ante. Donec vitae sem vel eros sollicitudin tristique. Cras dapibus, leo ac commodo cursus, orci diam viverra dolor, eget porttitor velit nibh eu diam. Fusce dictum, lorem non tristique vulputate, dolor felis commodo metus, a tincidunt purus mauris at neque. Curabitur consequat metus vel leo ultricies ultrices. Morbi euismod lacinia massa, eu ultricies tellus interdum et.

Morbi in faucibus arcu, et fringilla sem. Fusce sit amet magna et est facilisis facilisis. Nunc at nisi eros. Cras lacinia enim nec molestie viverra. Donec vulputate sem nibh, id imperdiet metus consectetur dapibus. Mauris vitae ipsum tellus. Aliquam in commodo tellus, id imperdiet nunc.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a lorem quis nisl ultricies tempus quis at purus. Mauris id laoreet nibh, at rutrum ipsum. Aliquam erat volutpat. Cras nec porttitor nunc, sed auctor diam. Etiam hendrerit ultricies pretium. Donec sit amet sapien id leo scelerisque vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel mi quam. Aenean consectetur justo ante, in faucibus nisi dapibus non. Etiam viverra lacus nunc, sed condimentum nunc aliquam finibus. Fusce nec nisi eu enim varius sodales. Morbi viverra nisi id justo vehicula, at porta nisl malesuada. Phasellus imperdiet nec urna eu scelerisque. Nunc sollicitudin ipsum cursus ligula tristique pretium. Aliquam accumsan in velit pharetra vehicula.

Fusce eleifend, nisi vitae tempus consequat, urna magna commodo erat, ac ultricies ipsum nisi a neque. Aenean eu risus ante. Fusce aliquam, diam vitae vehicula tristique, libero ligula tincidunt ipsum, vel facilisis ante nulla sit amet nibh. Proin pellentesque fringilla felis nec vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla consequat ligula, lobortis facilisis diam consectetur id. Suspendisse bibendum nec felis quis condimentum. Curabitur eu sagittis mi. Cras venenatis sapien non dolor consequat posuere.

Fusce sodales vitae dui eget convallis. Fusce porttitor, metus quis cursus faucibus, est turpis sodales nulla, et suscipit quam orci quis justo. Mauris vitae dolor a lectus dictum feugiat. Duis feugiat nisi vel nunc condimentum consequat. Quisque quis scelerisque massa, ut varius ex. Aenean finibus ultricies quam, vel dictum leo suscipit id. Mauris a risus nec sem ornare laoreet ut non justo.

Cras vestibulum vulputate lorem at eleifend. Nam libero nulla, interdum vel lacus sed, tincidunt vulputate eros. Morbi a velit in nibh condimentum porttitor. Duis ac odio tristique, consectetur dolor ac, mollis velit. Vestibulum.</p>
  `;
  const s = `
  <style>

.box{

width: 200px;

height: 150px;

background-color: purple;

position: sticky;

top: 0;

}

p{

color: white;

}

</style>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius porta quam ut lacinia. Aenean finibus at velit et tempus. Phasellus nec maximus magna, at auctor purus. Curabitur tempor tortor vitae faucibus laoreet. Maecenas eu convallis augue, id vehicula neque. Nullam volutpat orci eu porttitor tincidunt. Maecenas eu dignissim felis. Cras auctor lectus in vulputate dignissim. Integer sed semper magna, ac eleifend augue. Nullam accumsan, dui sit amet iaculis pulvinar, dui ipsum maximus leo, quis efficitur enim diam eget tellus. Fusce molestie mollis justo, vitae finibus nunc rhoncus fermentum.

Curabitur rhoncus, erat non convallis condimentum, velit nulla venenatis risus, a semper sapien dolor egestas eros. Vivamus at turpis sed nulla laoreet varius eget vitae orci. Quisque vel enim iaculis, venenatis dui vel, congue leo. Etiam suscipit ante a sodales malesuada. Aenean in massa nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ut feugiat leo. Duis a sem posuere, laoreet mi non, bibendum neque.</p>
<div class="box"></div>

<p>Praesent vitae erat vehicula, pretium nunc et, ullamcorper nibh. Vivamus turpis nulla, ultrices pellentesque mauris sed, sagittis ornare mi. Aliquam non pulvinar nisl, et scelerisque tortor. Nunc leo nibh, malesuada ut consequat nec, accumsan et augue. Aliquam vulputate nisl iaculis, hendrerit ligula at, venenatis erat. Nulla tortor odio, posuere quis aliquet id, aliquam non massa. Suspendisse nulla diam, eleifend sed nisi vitae, tempor pellentesque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce euismod rhoncus posuere. Nunc rutrum, ligula luctus rutrum porta, eros mauris viverra elit, vel pellentesque dolor sapien sed ante. Donec vitae sem vel eros sollicitudin tristique. Cras dapibus, leo ac commodo cursus, orci diam viverra dolor, eget porttitor velit nibh eu diam. Fusce dictum, lorem non tristique vulputate, dolor felis commodo metus, a tincidunt purus mauris at neque. Curabitur consequat metus vel leo ultricies ultrices. Morbi euismod lacinia massa, eu ultricies tellus interdum et.

Morbi in faucibus arcu, et fringilla sem. Fusce sit amet magna et est facilisis facilisis. Nunc at nisi eros. Cras lacinia enim nec molestie viverra. Donec vulputate sem nibh, id imperdiet metus consectetur dapibus. Mauris vitae ipsum tellus. Aliquam in commodo tellus, id imperdiet nunc.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a lorem quis nisl ultricies tempus quis at purus. Mauris id laoreet nibh, at rutrum ipsum. Aliquam erat volutpat. Cras nec porttitor nunc, sed auctor diam. Etiam hendrerit ultricies pretium. Donec sit amet sapien id leo scelerisque vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel mi quam. Aenean consectetur justo ante, in faucibus nisi dapibus non. Etiam viverra lacus nunc, sed condimentum nunc aliquam finibus. Fusce nec nisi eu enim varius sodales. Morbi viverra nisi id justo vehicula, at porta nisl malesuada. Phasellus imperdiet nec urna eu scelerisque. Nunc sollicitudin ipsum cursus ligula tristique pretium. Aliquam accumsan in velit pharetra vehicula.

Fusce eleifend, nisi vitae tempus consequat, urna magna commodo erat, ac ultricies ipsum nisi a neque. Aenean eu risus ante. Fusce aliquam, diam vitae vehicula tristique, libero ligula tincidunt ipsum, vel facilisis ante nulla sit amet nibh. Proin pellentesque fringilla felis nec vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla consequat ligula, lobortis facilisis diam consectetur id. Suspendisse bibendum nec felis quis condimentum. Curabitur eu sagittis mi. Cras venenatis sapien non dolor consequat posuere.

Fusce sodales vitae dui eget convallis. Fusce porttitor, metus quis cursus faucibus, est turpis sodales nulla, et suscipit quam orci quis justo. Mauris vitae dolor a lectus dictum feugiat. Duis feugiat nisi vel nunc condimentum consequat. Quisque quis scelerisque massa, ut varius ex. Aenean finibus ultricies quam, vel dictum leo suscipit id. Mauris a risus nec sem ornare laoreet ut non justo.

Cras vestibulum vulputate lorem at eleifend. Nam libero nulla, interdum vel lacus sed, tincidunt vulputate eros. Morbi a velit in nibh condimentum porttitor. Duis ac odio tristique, consectetur dolor ac, mollis velit. Vestibulum.</p>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Position</h1>
        <p>
          The <span className="purple">position</span> property is important for
          your website, this specifies the type of positioning method used for
          an element, the type can be static, relative, absolute, sticky, and
          fixed.
          </p>
          <p>
          <span className="purple">static</span> - default value, the element is
          rendered in order as they appear in the document.
          </p><p>
          <span className="purple">relative</span> - the element is positioned
          relative to its normal position.
          </p><p>
          <span className="purple">absolute</span> - the element is positioned
          relative to its first position and you have full control over the
          element.
          </p><p>
          <span className="purple">fixed</span> - the element is fixed on a
          specific position, if you scroll, the element is still fixed in that
          position.
          </p><p>
          <span className="purple">sticky</span> - the element is positioned
          based on the user's scroll position, it is positioned relative until
          the user reaches the element, then the element it sticks in a specific
          place, like the position fixed.
          </p><p>
          <span className="purple">initial</span> - set to the default value.
          </p><p>
          <span className="purple">inherit</span> - inherits the property value
          from his parent.
          </p>
          <p>
          After you set the position method you can use the{" "}
          <span className="purple">top</span>,{" "}
          <span className="purple">right</span>,{" "}
          <span className="purple">bottom </span>
          and <span className="purple">left</span> properties to determine the
          final location of the element, these properties work for position
          relative, absolute, sticky and fixed, and must be set the position
          method first, the value for these properties can be the length values
          (px, cm, pt), a number (e.g. 0) and percentage.
          </p>
          
          <p>
          Using these properties for the position relative, the element it will
          be adjusted away from its normal position, for the position absolute
          it's not depending on the normal position, it uses the document body
          and you have full control over the element position, even can be over
          other elements.
          </p>
        <br/>
        <p className="res">
          Example with position relative, the purple box that has position
          relative and is with 60px away from the top.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box2"}</span>
            <span>{"{"}</span>
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
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> relative</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 60px</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
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
            <span className="value"> cyan</span>
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
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box2"</span>
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
          style={{ height: "380px" }}
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p className="res">
          Example with position absolute, here, the purple box with position
          absolute will ignore the other elements and will be over the cyan box
          and away with 20px from the top of the document and 30px away from
          left.
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">style</span>
            <span>{">"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box2"}</span>
            <span>{"{"}</span>
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
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> absolute</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 20px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">left</span>
            <span>:</span>
            <span className="value"> 30px</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".box"}</span>
            <span>{"{"}</span>
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
            <span className="value"> cyan</span>
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
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box2"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={a}
          title="output"
          style={{ height: "190px" }}
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
        />
        <p className="res">
          Example with position fixed, here, the purple box will be on top
          everytime, even if you scroll, top with the value of 0 means that the
          element will be away from the top with 0 ( will be exactly on the top)
          the same for left, you can use this value for bottom and right too.
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
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> fixed</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 0</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">left</span>
            <span>:</span>
            <span className="value"> 0</span>
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
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"box"</span>
            <span>{">"}</span>
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Dummy text for the example</span>
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
          style={{ height: "300px" }}
          sandbox="allow-scripts"
          frameBorder="0"
        />
        <p className="res">
          Example with position sticky, the element will stick to the top when
          you reach the element.
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
          <p className="styles">
            <span className="prop">position</span>
            <span>:</span>
            <span className="value"> sticky</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">top</span>
            <span>:</span>
            <span className="value"> 0</span>
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
            <span>Dummy text for the example</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
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
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">p</span>
            <span>{">"}</span>
            <span>Dummy text for the example</span>
            <span>{"<"}</span>
            <span className="tag">/p</span>
            <span>{">"}</span>
          </p>
        </div>
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={s}
          title="output"
          style={{ height: "300px" }}
          sandbox="allow-scripts"
          frameBorder="0"
        />
        <p>
          * The position sticky is supported only in Firefox, Safari, and Chrome
          Canary (56+).
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

export default CSS1;
