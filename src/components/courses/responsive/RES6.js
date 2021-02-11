import React, { useEffect, useContext } from "react";
import "./mainRes.css";
import Navbar from "../../navbar/Nav3";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/FooterTwo";
import UserContext from "../../services/UserContext";
import fire from "../../services/Firebase";
import "../../../main.css";
import grid from "./grid.png";

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
    
        history.push("/responsive/grid-container");
    
  };
  const previousLesson = () => {
 
        history.push("/responsive/flexbox&media-queries");
      
  };
  const handleEditor = () => {

        history.push("/editor");
    
  };

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Grid Layout</h1>
        <p>
          The <span className="purple">CSS Grid Layout</span> is used to make
          grid layouts with rows and columns, make it easier to design a
          responsive web page having full control over the layout.
        </p>
        <p>
          {" "}
          A grid layout is made from a parent element and one or more child
          elements, to make a container a grid layout you have to use the{" "}
          <span className="purple">display</span> property and the value of{" "}
          <span className="purple">grid</span>. All the children of the grid
          container will become grid items.
        </p>{" "}
        <p>
          A grid layout is made from <span className="purple">rows</span> and{" "}
          <span className="purple">columns</span>, the space between each column
          and row is called <span className="purple">gap</span>. You can add gap
          using the following properties:
        </p>
        <p>
          <span className="purple">grid-column-gap</span> - sets the gap between
          the columns.
        </p>{" "}
        <p>
          <span className="purple">grid-row-gap</span> - sets the gap between
          the rows.
        </p>
        <p>
          <span className="purple">grid-gap</span> or only{" "}
          <span className="purple">gap</span> - shorthand property for both of
          the properties from above, the first value is the gap for the rows and
          the second value is for the columns, also you can set one value for
          both rows and columns.
        </p>
        <br />
        <p>Below you have an image of a grid layout to understand better.</p>
        <br />
        <img src={grid} className="gridImage" alt="" />
        <br />
        <p>
          The lines 1,2,3,4 from the top are the{" "}
          <i>
            <span className="purple">column lines</span>
          </i>{" "}
          and the lines 1,2,3 from the left are the{" "}
          <i>
            <span className="purple">row lines</span>
          </i>
          .
        </p>
        <p>
          In this lesson you learned about the grid layout and what are gaps and
          how to add them. In the next lesson we will learn about the container
          and what properties can we use for the grid container.{" "}
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

export default RES;
