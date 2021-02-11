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
  
        history.push("/responsive/grid&media-queries");
    
  };
  const previousLesson = () => {
  
        history.push("/responsive/grid-container");
   
  };
  const handleEditor = () => {
   
        history.push("/editor");
     
  };
  const c = `
  <style>

.container{

display: grid;

grid-template-columns: auto auto;

grid-template-rows: auto auto;
grid-gap: 50px;

}

.item1, .item2, .item3{

color: white;

text-align: center;

background-color: purple;

font-size: 1.3rem;

padding: 50px;

}

.item1{

grid-column-start: 1;

grid-row-start: 2;
justify-self: end;

}

.item2{

grid-column-start: 2;

grid-row-start: 1;


}

</style>


<div class="container">

<div class="item1">1</div>

<div class="item2">2</div>

</div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Grid item</h1>
        <p>
          A <span className="purple">grid item</span> is the child element from
          a <span className="purple">grid container</span>, every child element
          from a <span className="purple">grid container</span> will be a{" "}
          <span className="purple">grid item</span>, you can style the grid
          items, giving them the possibility to span multiple{" "}
          <span className="purple">columns</span> or{" "}
          <span className="purple">rows</span> (or both).
        </p>
        <h3>
          The <span className="purple">grid-column-start</span>,{" "}
          <span className="purple">grid-column-end</span>,{" "}
          <span className="purple">grid-row-start</span> and{" "}
          <span className="purple">grid-row-end</span> properties
        </h3>
        <p>
          Defines the grid item's location, the
          <span className="purple"> grid-column-start</span> and{" "}
          <span className="purple">grid-row-start</span> properties defines on
          which column / row the item will start.
        </p>
        <p>
          The <span className="purple">grid-column-end</span> and{" "}
          <span className="purple">grid-row-end</span> properties will define on
          which line (column or row line) the item will end or how many columns
          or rows an item will span.
        </p>
        <p>View the "Grid Layout" lesson to see what are the grid lines.</p>
        <p>The values that can be used for the properties from above:</p>
        <p>
          <span className="purple">
            <i>column</i>{" "}
          </span>
          /
          <span className="purple">
            {" "}
            <i>row</i>{" "}
          </span>
          - defines on which column or row the item will start, the columns and
          rows are defined with numbers, view the "Gird Layout" lesson, value
          for the <i>start</i> properties.
        </p>
        <p>
          <span className="purple">
            <i>line </i>
          </span>
          - defines on which line the item will end, value for the <i>end</i>{" "}
          properties.
        </p>
        <p>
          <span className="purple">auto</span> - the default value, defines auto
          placement in the grid, or a default span by one.
        </p>
        <p>
          <span className="purple">
            span <i>n</i>
          </span>{" "}
          - the item will span across the provided number{" "}
          <span className="purple">
            <i>n</i>
          </span>
          .{" "}
        </p>
        <h3>
          The <span className="purple">grid-column</span> and{" "}
          <span className="purple">grid-row</span> properties
        </h3>
        <p>
          These two properties are shorthand for{" "}
          <span className="purple">grid-column-start</span> and{" "}
          <span className="purple">grid-column-end</span> respectively{" "}
          <span className="purple">grid-row-start</span> and{" "}
          <span className="purple">grid-row-end</span>.
        </p>
        <p>Values for these shorthand properties:</p>
        <p>
          <span className="purple">
            <i>column</i>
          </span>{" "}
          or{" "}
          <span className="purple">
            <i>row</i>
          </span>{" "}
          /{" "}
          <span className="purple">
            <i>end line </i>
          </span>{" "}
          - the column or row where the item will start and the line where the
          item will end, we use <i>column</i> for the{" "}
          <span className="purple">grid-column</span> property and <i>row</i>{" "}
          for the <span className="purple">grid-row</span> property.
        </p>
        <p>
          <span className="purple">
            <i>column</i>
          </span>{" "}
          or{" "}
          <span className="purple">
            <i>row</i>
          </span>{" "}
          /{" "}
          <span className="purple">
            span <i>n</i>
          </span>{" "}
          - the column or row where the item will start and how much you want
          the item to span, based on the provided number <i>n</i>, we use{" "}
          <i>column</i> for the <span className="purple">grid-column</span>{" "}
          property and <i>row</i> for the{" "}
          <span className="purple">grid-row</span> property.
        </p>
        <p>Make sure to separate the values with the "/" symbol.</p>
        <h3>
          The <span className="purple">grid-area</span> property
        </h3>
        <p>
          Defines a name for the item, that name can be used for the{" "}
          <span className="purple">grid-template-areas</span> property, also,
          this property can be used as a shorthand for the following properties:{" "}
          <span className="purple">grid-row-start</span>,{" "}
          <span className="purple">grid-column-start</span>,{" "}
          <span className="purple">grid-row-end</span>,{" "}
          <span className="purple">grid-column-end</span>.
        </p>
        <p>Values for this property:</p>
        <p>
          <span className="purple">
            <i>name</i>
          </span>{" "}
          - a name (text) for the grid item, can be anything you want.
        </p>
        <p>
          <span className="purple">row-start</span> /{" "}
          <span className="purple">column-start</span> /{" "}
          <span className="purple">row-end</span> /{" "}
          <span className="purple">column-end</span> - a row where the item will
          start / a column where the item will start / a <i>row line</i> where
          the item will end / a <i>column line</i> where the item will end, or
          for the last two properties you can use the span value.{" "}
        </p>

        <h3>
          The <span className="purple">justify-self</span> and{" "}
          <span className="purple">align-self</span> property
        </h3>
        <p>
          Aligns the grid item inside a cell, the first property,{" "}
          <span className="purple">justify-self</span>, aligns the item along
          the row axis, where <span className="purple">align-self </span>
          property aligns the item along the column axis.
        </p>
        <p>
          The value applies only to a grid item inside a single cell, also, the{" "}
          <span className="purple">align-self</span> property will override the{" "}
          <span className="purple">align-items </span> property from the grid
          container, if is found.
        </p>
        <p>The values for these two properties:</p>
        <p>
          <span className="purple">start</span> - aligns the grid item at the
          start of the cell.
        </p>
        <p>
          <span className="purple">end</span> - aligns the grid item at the end
          of the cell.
        </p>
        <p>
          <span className="purple">stretch</span> - the default value, the grid
          item will fill the whole cell.
        </p>
        <p>
          <span className="purple">center</span> - aligns the grid item in the
          center of the cell.
        </p>
        <br />
        <p className="res">Example</p>
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
            <span className="value"> auto auto</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">grid-template-rows</span>
            <span>:</span>
            <span className="value"> auto auto</span>
            <span>;</span>
          </p>

          <p className="styles">
            <span className="prop">grid-gap</span>
            <span>:</span>
            <span className="value"> 50px</span>
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
            <span className="prop">grid-column-start</span>
            <span>:</span>
            <span className="value"> 1</span>
            <span>;</span>
          </p>

          <p className="styles">
            <span className="prop">grid-row-start</span>
            <span>:</span>
            <span className="value"> 2</span>
            <span>;</span>
          </p>
          <p className="styles">
            <span className="prop">justify-self</span>
            <span>:</span>
            <span className="value"> end</span>
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
            <span className="prop">grid-column-start</span>
            <span>:</span>
            <span className="value"> 2</span>
            <span>;</span>
          </p>

          <p className="styles">
            <span className="prop">grid-row-start</span>
            <span>:</span>
            <span className="value"> 1</span>
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

          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">/div</span>
            <span>{">"}</span>
          </p>
        </div>
        <h3>
          <span className="purple">Code</span> explanation
        </h3>
        <p>
          The layout has 2 columns and 2 rows and a gap between them of 50px.
        </p>
        <p>
          The box number 1 will start on the column 1 and row 2, this box have
          the property <span className="purple">justify-self</span> with the
          value of <span className="purple">end</span> meaning that the box will
          be aligned at the end of the cell.
        </p>
        <p>
          The box number 2 will start on the column 2 and row 1, this box have
          the default value (stretch) for the{" "}
          <span className="purple">justify-self</span> property, filling the
          whole cell.
        </p>
        <br />
        <p className="res">
          Result, for a better understanding please view this lesson on a
          desktop device.
        </p>
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
