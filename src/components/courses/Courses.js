import React, { useState, useEffect, useContext } from "react";
import "./courses.css";
import Nav from "../navbar/NavC";
import fire from "../services/Firebase";
import { useHistory } from "react-router";
import Footer from "../footer/FooterTwo";
import { useLocation } from "react-router-dom";
import "../../main.css";
import UserContext from "../services/UserContext";

function Courses() {
  // VARIABLES

  const [myError, setMyError] = useState("");

  const [lessonError, setLessonError] = useState("Loading lessons...");

  const userStatus = useContext(UserContext);
  const { user, setUser } = userStatus;

  let location = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    fire.auth().onAuthStateChanged((data) => {
      if (data) {
        setUser(data);
        setMyError("");
      } else {
        setUser("");
      }
    });
  }, [setUser]);

  // LESSONS 
  
  let htmlLessons = [
    {
      title: "Introduction to HTML5",
      path: "/html5/introduction",
      id: 1,
  
    },
    {
      title: "Paragraphs and spans",
      path: "/html5/text&span",
      id: 2,
    
    },
    {
      title: "Headings",
      path: "/html5/headings",
      id: 3,
    },
    {
      title: "Lists",
      path: "/html5/lists",
      id: 4,
    },
    {
      title: "Attributes",
      path: "/html5/attributes",
      id: 5,
    },
    {
      title: "Container",
      path: "/html5/container",
      id: 6,
    },
    {
      title: "Images",
      path: "/html5/images",
      id: 7,
    },
    {
      title: "Videos",
      path: "/html5/videos",
      id: 8,
    },
    {
      title: "Buttons",
      path: "/html5/buttons",
      id: 9,
    },
    {
      title: "Inputs",
      path: "/html5/inputs",
      id: 10,
    },
    {
      title: "Lables",
      path: "/html5/lables",
      id: 11,
    },
    {
      title: "Select and option",
      path: "/html5/select&option",
      id: 12,
    },
    {
      title: "Forms",
      path: "/html5/forms",
      id: 13,
    },
    {
      title: "Tables",
      path: "/html5/tables",
      id: 14,
    },
    {
      title: "Links",
      path: "/html5/links",
      id: 15,
    },
    {
      title: "Styling",
      path: "/html5/styling",
      id: 16,
    },
    {
      title: "Comments",
      path: "/html5/comments",
      id: 17,
    },
    {
      title: "Layout",
      path: "/html5/layout",
      id: 18,
    },
    {
      title: "Recommendation",
      path: "/html5/recommendation",
      id: 19,
    },
  ]


  
  
  const cssLessons = [
    {
      title: "Introduction",
      path: "/css3/introduction",
      id: 20,
    },
    {
      title: "Priority",
      path: "/css3/priority",
      id: 21,
    },
    {
      title: "Colors",
      path: "/css3/colors",
      id: 22,
    },
    {
      title: "Dimensions",
      path: "/css3/dimensions",
      id: 23,
    },
    {
      title: "Units",
      path: "/css3/units",
      id: 24,
    },
    {
      title: "Font",
      path: "/css3/font",
      id: 25,
    },
    {
      title: "Padding",
      path: "/css3/padding",
      id: 26,
    },
    {
      title: "Border",
      path: "/css3/border",
      id: 27,
    },
    {
      title: "Margin",
      path: "/css3/margin",
      id: 28,
    },
    {
      title: "Box model",
      path: "/css3/box-model",
      id: 29,
    },
    {
      title: "Position",
      path: "/css3/position",
      id: 30,
    },
    {
      title: "Transform",
      path: "/css3/transform",
      id: 31,
    },
    {
      title: "Shadows",
      path: "/css3/shadows",
      id: 32,
    },
    {
      title: "Alignment",
      path: "/css3/alignment",
      id: 33,
    },
    {
      title: "Display",
      path: "/css3/display",
      id: 34,
    },
    {
      title: "Decoration",
      path: "/css3/decoration",
      id: 35,
    },
    {
      title: "Opacity and visibility",
      path: "/css3/opacity&visibility",
      id: 36,
    },
    {
      title: "Overflow",
      path: "/css3/overflow",
      id: 37,
    },
    {
      title: "Outline",
      path: "/css3/outline",
      id: 38,
    },
    {
      title: "Combinators",
      path: "/css3/combinators",
      id: 39,
    },
    {
      title: "Word",
      path: "/css3/word",
      id: 40,
    },
    {
      title: "Document tree",
      path: "/css3/document-tree",
      id: 41,
    },
    {
      title: "Z-index",
      path: "/css3/z-index",
      id: 42,
    },
    {
      title: "Rules",
      path: "/css3/rules",
      id: 43,
    },
    {
      title: "Animations",
      path: "/css3/animations",
      id: 44,
    },
    {
      title: "Pseudo classes",
      path: "/css3/pseudo-classes",
      id: 45,
    },
    {
      title: "Pseudo elements",
      path: "/css3/pseudo-elements",
      id: 46,
    },
    {
      title: "Comments",
      path: "/css3/comments",
      id: 47,
    },
    {
      title: "Transitions",
      path: "/css3/transitions",
      completed: false,
      id: 48,
    },
    {
      title: "Variables",
      path: "/css3/variables",
      id: 49,
    },
    {
      title: "Functions",
      path: "/css3/functions",
      id: 50,
    },
    {
      title: "Filter",
      path: "/css3/filter",
      id: 51,
    },
    {
      title: "Cursor",
      path: "/css3/cursor",
      id: 52,
    },
    {
      title: "Recommendation",
      path: "/css3/recommendation",
      id: 53,
    },
  ]

  const resLessons = [
    {
      title: "Introduction",
      path: "/responsive/introduction",
      id: 54,
    },
    {
      title: "Media queries",
      path: "/responsive/media-queries",
      id: 55,
    },
    {
      title: "Flexbox",
      path: "/responsive/flexbox",
      id: 56,
    },
    {
      title: "Flex items",
      path: "/responsive/flex-items",
      id: 57,
    },
    {
      title: "Flexbox with media queries",
      path: "/responsive/flexbox&media-queries",
      id: 58,
    },
    {
      title: "Grid layout",
      path: "/responsive/grid",
      id: 59,
    },
    {
      title: "Grid container",
      path: "/responsive/grid-container",
      id: 60,
    },
    {
      title: "Grid item",
      path: "/responsive/grid-item",
      id: 61,
    },
    {
      title: "Grid with media queries",
      path: "/responsive/grid&media-queries",
      id: 62,
    },
    {
      title: "Recommendation",
      path: "/responsive/recommendation",
      id: 63,
    },
  ]


  let status = false;
  let status2 = false;
  let status3 = false;

  const handleDropDown = () => {
    status = !status;
    let content = document.querySelector(".content1");
    let arrow = document.querySelector(".arrow1");
    if (user) {
      if (!status) {
        content.style.display = "none";
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.fill = "white";
      } else {
        content.style.display = "flex";
        arrow.style.transform = "rotate(0deg)";
        arrow.style.fill = "#276fc2";
      }
    } else {
      setMyError("* You have to be logged in to see the content");
    }
  };
  const handleDropDown2 = () => {
    status2 = !status2;
    let content = document.querySelector(".content2");
    let arrow = document.querySelector(".arrow2");
    if (user) {
      if (!status2) {
        content.style.display = "none";
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.fill = "white";
      } else {
        content.style.display = "flex";
        arrow.style.transform = "rotate(0deg)";
        arrow.style.fill = "#276fc2";
      }
    } else {
      setMyError("* You have to be logged in to see the content");
    }
  };

  const handleDropDown3 = () => {
    status3 = !status3;
    let content = document.querySelector(".content3");
    let arrow = document.querySelector(".arrow3");
    if (user) {
      if (!status3) {
        content.style.display = "none";
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.fill = "white";
      } else {
        content.style.display = "flex";
        arrow.style.transform = "rotate(0deg)";
        arrow.style.fill = "#276fc2";
      }
    } else {
      setMyError("* You have to be logged in to see the content");
    }
  };

  const history = useHistory();
  const handleRedirect = (path) => {
    if (user) {
      history.push(path);
       
    } else {
      setMyError("* You need to be logged in to start learning");
    }
  };

  const handleRedirectCss = (path) => {
    if (user) {
    
      history.push(path);
       
    } else {
      setMyError("* You need to be logged in to start learning");
    }
  };

  const handleRedirectResponsive = (path) => {
    if (user) {
      history.push(path);
       
    } else {
      setMyError("* You need to be logged in to start learning");
    }
  };

  return (
    <>
      <div className="courses">
        <div className="loading"></div>
        <Nav />
        <div className="headline">
          <h1>Courses</h1>
          <p className="cNeed">{myError}</p>
        </div>
        <div className="coursesContent">
          <div
            className="course-1"
            onClick={handleDropDown}
          
          >
            <h2>
              <span>#1 </span> HTML5 the Basics
            </h2>

            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              className="arrow1"
              viewBox="0 0 451.847 451.847"
            >
              <path
                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
              />
            </svg>
          </div>
          <div className="content1">
            {!htmlLessons ? (
              <p id="error">{lessonError}</p>
            ) : (
              htmlLessons.map((data) => (
                <div className="htmlLesson" key={data.id}>
                  <div className="point"  key={data.path}></div>
                  <p key={data.title} onClick={() => handleRedirect(data.path)}>
                    {data.title}
                  </p>
                </div>
              ))
            )}
          </div>

          <div
            className="course-2"
            onClick={handleDropDown2}
          
          >
            <h2>
              <span>#2 </span> CSS3 is Fun
            </h2>

            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              className="arrow2"
              viewBox="0 0 451.847 451.847"
            >
              <path
                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
              />
            </svg>
          </div>
          <div className="content2">
            {!cssLessons ? (
              <p id="error2">{lessonError}</p>
            ) : (
              cssLessons.map((data) => (
                <div className="cssLesson" key={data.id}>
                  <div className="point" key={data.path}></div>
                  <p
                    key={data.title}
                    onClick={() => handleRedirectCss(data.path)}
                  >
                    {data.title}
                  </p>
                </div>
              ))
            )}
          </div>

          <div
            className="course-3"
            onClick={handleDropDown3}
           
          >
            <h2>
              <span>#3 </span> Responsive design
            </h2>
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              className="arrow3"
              viewBox="0 0 451.847 451.847"
            >
              <path
                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
              />
            </svg>
          </div>
          <div className="content3">
            {!resLessons ? (
              <p id="error3">{lessonError}</p>
            ) : (
              resLessons.map((data) => (
                <div className="resLesson" key={data.id}>
                  <div className="point" key={data.path}></div>
                  <p
                    key={data.title}
                    onClick={() => handleRedirectResponsive(data.path)}
                  >
                    {data.title}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="course-4">
            <h2>
              <span>#4 </span>Coming soon
            </h2>
            <div className="progress"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Courses;
