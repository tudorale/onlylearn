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
   
        history.push("/responsive/grid-item");
    
  };
  const previousLesson = () => {
    
        history.push("/responsive/grid");
      
  };
  const handleEditor = () => {
   
        history.push("/editor");
     
  };
  const c = `
  <style>

.container{

display: grid;

grid-template-columns: auto auto auto;

grid-template-rows: auto auto;

grid-template-areas:
'item1 item2 item2'
'item3 item3 item3';

grid-row-gap: 50px;

justify-content: space-between;

}

.item1, .item2, .item3{

color: white;

text-align: center;

background-color: purple;

font-size: 1.3rem;

padding: 50px;

}

.item1{

grid-area: item1;

}

.item2{

grid-area: item2;

}

.item3{

grid-area: item3;

}

</style>


<div class="container">

<div class="item1">1</div>

<div class="item2">2</div>

<div class="item3">3</div>

</div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Grid Container</h1>
        <p>
          To make an element a <span className="purple">grid container</span>{" "}
          you have to set the property <span className="purple">display</span>{" "}
          with the value of <span className="purple">grid</span> or{" "}
          <span className="purple">inline-grid</span>, the grid container will
          transform the items from it into{" "}
          <span className="purple">grid items</span> ( view the next lesson ),
          the grid items will be placed inside{" "}
          <span className="purple">columns</span> and{" "}
          <span className="purple">rows</span>.
        </p>
        <p>
          We have different properties for the grid container, what properties
          can we use?
        </p>

        <h3>
          The <span className="purple">grid-template-columns</span> property
        </h3>
        <p>
          Is one of the most important property when we talk about grid system,
          this property is specifying the number of columns and for each column
          you can add the width for it, the value is sparated with a space, each
          value defines the width for the respective column, (e.g.
          grid-template-columns: 300px 250px 300px; a layout with 3 columns, the
          first column is 300px, the second is 250px and the third one is 300px)
        </p>
        <p>
          If you have a layout with 3 items and more than 3 items are found in
          the layout, the grid will automatically add a new row to the layout
          for the new items.
        </p>
        <p>
          The values for the{" "}
          <span className="purple">grid-template-columns</span> property can be:
        </p>
        <p>
          <span className="purple">none</span> - default value, columns are
          created if they are needed.
        </p>
        <p>
          <span className="purple">auto</span> - the size of the columns is set
          by the size of grid item.
        </p>
        <p>
          <span className="purple">length values</span> - set the width of the
          column using length values, (px, em, cm, %).
        </p>
        <p>
          <span className="purple">
            repeat(<i>n</i>, <i>w</i>)
          </span>{" "}
          - the function repeat will make <i>n</i> columns with the width of{" "}
          <i>w</i>.
        </p>
        <p>
          You can use also functions for the value like{" "}
          <span className="purple">max-content</span>,{" "}
          <span className="purple">min-content</span> and so on, but for now you
          will use only the values from above.
        </p>
        <h3>
          The <span className="purple">grid-template-rows</span> property
        </h3>
        <p>
          Another important property for the grid layout, this property defines
          the number of rows and the height for each row in the grid layout, the
          values are separated with a space and each value define a row with the
          respective height, (e.g. grid-template-rows: 200px 250px; two rows in
          the layout, first row is 200px and the second row is 250px).
        </p>
        <p>
          The values for this property are the same as for the{" "}
          <span className="purple">grid-template-columns</span> property but
          instead of "columns" we have "rows" and instead of "width" we have
          "height".
        </p>

        <h3>
          The <span className="purple">grid-template-areas</span> property
        </h3>
        <p>
          Specifies areas in the grid layout, first, you have to name the grid
          items using the <span className="purple">grid-area</span> property, we
          will talk about this property in the next lesson, and then you have to
          use the names from the grid items to make your layout with this
          property.
        </p>
        <p>
          The area is defined between apostrophes or quotation marks, you can
          use a period (.) to refer to a grid item with no name.
        </p>
        <p>
          The syntax for this property:{" "}
          <span className="purple">grid-template-ares: 'footer footer .';</span>{" "}
          behind we have a grid layout with 3 columns, the grid item with the
          area name of footer will take 2 columns.
        </p>
        <h3>
          The <span className="purple">grid-template</span> property
        </h3>
        <p>
          Is a shorthand property for the properties from above, more exactly
          the order is: <span className="purple">grid-template-rows</span>,{" "}
          <span className="purple">grid-template-columns</span> and{" "}
          <span className="purple">grid-template-areas</span>
        </p>
        <p>
          The syntax is: <span className="purple">grid-template-rows</span> /{" "}
          <span className="purple">grid-template-columns</span>{" "}
          <span className="purple">grid-template-areas</span>, you have to
          separate the rows and columns with the "/" sign and after the columns
          you have to define the area layout, you don't have to use all these 3
          properties, you can set only rows and columns or only the area.
        </p>
        <h3>
          The <span className="purple">justify-content</span> property
        </h3>
        <p>
          Aligns the grid items (the content) inside the grid container, the
          alignment is made along the row axis (inline row).
        </p>
        <p>The values that can be used for this property:</p>
        <p>
          <span className="purple">center</span> - aligns the grid items in the
          center of the grid container.
        </p>
        <p>
          <span className="purple">start</span> - aligns the grid items at the
          start of the grid container.
        </p>
        <p>
          <span className="purple">end</span> - aligns the grid items at the end
          of the grid container.
        </p>
        <p>
          <span className="purple">stretch</span> - resizes (stretch) the grid
          items to fill the grid container.
        </p>
        <p>
          <span className="purple">space-around</span> - place an equal amount
          of space between each grid item, the items will have space after and
          before the item.{" "}
        </p>
        <p>
          <span className="purple">space-between</span> - place an equal amount
          of space between each grid item, the space will be only between the
          items, without space after and before the item.
        </p>
        <p>
          <span className="purple">space-evenly</span> - the items will have an 
          equal amount of space between and around them, similar to the{" "}
          <span className="purple">space-around</span> property.
        </p>
        <h3>
          The <span className="purple">align-content</span> property
        </h3>
        <p>
          Is similar to the <span className="purple">justify-content</span>{" "}
          property, which will align the grid items (content) inside the grid
          container, but the alignment is along the column axis (block column).
        </p>
        <p>
          The values for this property are the same as for the{" "}
          <span className="purple">justify-content</span> property.
        </p>
        <br />
        <p>
          And are a few more properties for the grid container, like the gap
          properties that we talked in the previous lesson, but are more, we
          only showed you only the properties that we think are necessary for
          you, and that's the website about, "the information you need", we
          don't want to fill your mind for now, in the future advanced courses
          will be added.
        </p>
        <br />
        <p className="res">
          Example, the grid layout from this example is also responsive.
        </p>
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
            <span className="value"> auto auto auto</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-rows</span>
            <span>:</span>
            <span className="value"> auto auto</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-areas</span>
            <span>:</span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'item1 item2 item2'
            </span>
            <br />
            <span className="value" style={{ marginLeft: "15px" }}>
              {" "}
              'item3 item3 item3'
            </span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-row-gap</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">justify-content</span>
            <span>:</span>
            <span className="value"> space-between</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".item1"}</span>
            <span>,</span>
            <span className="element class">{" .item2"}</span>
            <span>,</span>
            <span className="element class">{" .item3"}</span>

            <span>{"{"}</span>
          </p>
          <p className="styles">
            <span className="prop">color</span>
            <span>:</span>
            <span className="value"> white</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">text-align</span>
            <span>:</span>
            <span className="value"> center</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">background-color</span>
            <span>:</span>
            <span className="value"> purple</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">font-size</span>
            <span>:</span>
            <span className="value"> 1.3rem</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">padding</span>
            <span>:</span>
            <span className="value"> 50px</span>
            <span>;</span>
          </p>

          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".item1"}</span>
            <span>{"{"}</span>
          </p>

          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> item1</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".item2"}</span>
            <span>{"{"}</span>
          </p>

          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> item2</span>
            <span>;</span>
          </p>
          <p>
            <span className="bc">{"}"}</span>
          </p>

          <p className="style">
            <span className="element class">{".item3"}</span>
            <span>{"{"}</span>
          </p>

          <p className="styles">
            <span className="prop">grid-area</span>
            <span>:</span>
            <span className="value"> item3</span>
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
          <br />
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
            <span className="inTagValue">"item1"</span>
            <span>{">"}</span>1<span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"item2"</span>
            <span>{">"}</span>2<span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
          <p className="frontTag">
            <span>{"<"}</span>
            <span className="tag">div</span>
            <span className="inTag"> class</span>
            <span>=</span>
            <span className="inTagValue">"item3"</span>
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
        <p className="res">Result</p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          scrolling="no"
          style={{ height: "320px" }}
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

export default RES;
