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
  
        history.push("/responsive/media-queries");
     
  };

  const handleEditor = () => {
 
        history.push("/editor");
     
  };
  const c = `
  <style>
  *{
    font-family: Arial;
  }
    nav{
      width: 100%;
      height: 67px;
      background-color: purple;
      color: white;
    }
    nav h1{
      padding: 20px;
      padding-left: 25px;
    }
    .content{
      color: white;
      font-size: 1.2rem;
      padding: 30px;
    }
    .cards{
      display: grid;
      grid-template-columns: 300px 300px;
      justify-content: center;
      grid-gap: 80px;
      margin-bottom: 50px;
      grid-template-areas: "card1 card2";
    }
    .card-1{
      height: 320px;
      background-color: purple;
      border-radius: 5px;
      grid-area: card1;
    }
    .card-2{
      height: 320px;
      background-color: purple;
      border-radius: 5px;
      grid-area: card2;

    }

    .foo{
      height: 70px;
      width: 100%;
      background-color: purple;
    
    }
    @media only screen and (max-width: 730px){
      
      .cards{
        grid-template-columns: 300px;
        grid-template-areas: 
        "card1"
        "card2";
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        align-content: center;
        align-items: center;
       
      }
      
     }
     @media only screen and (max-width: 550px){
      
      .cards{
        grid-template-columns: 250px;
      
       
      }
      
     }
  </style>
  <nav>
  <h1>Logo</h1>
  </nav>
  <div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut turpis vel eros tincidunt luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas dignissim semper dolor eu pretium. Etiam at pulvinar magna, quis aliquam sapien. Vestibulum id sagittis erat. Nam et sollicitudin nulla, sed ornare orci. Praesent rhoncus lectus fringilla urna posuere ornare. Praesent dignissim pulvinar tincidunt. Aliquam ac tellus metus. Integer sit amet purus sit amet ante scelerisque finibus.
  
  </div>
  <div class="cards">
    <div class="card-1"></div>
    <div class="card-2"></div>
  </div>
  <div class="foo"></div>
  `;
  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Introduction</h1>
        <p>
          A <span className="purple">responsive design</span> is the most needed
          for your website, nowadays most people are using phones, if you don't
          have a responsive design on your website it may look unprofessional
          and you don't want that.
          <br />
          <br />
          When we talk about responsive we think about how your page should look
          on all devices, responsive designs uses only{" "}
          <span className="purple">HTML</span> and{" "}
          <span className="purple">CSS</span> or with some help from libraries
          like <span className="purple">Bootstrap</span>.
          <br />
          <br />
          The web page can be viewed using different devices: tablets, phones,
          desktops and your web page should look good on all these devices and
          should be easy to use.
          <br />
          <br />
          When we make our page responsive for other devices we will shrink,
          resize, move or even hide elements to make it look good on any screen.
          <br />
          <br />
          To make a website responsive you have different tools, the main tool
          is using media queries, with{" "}
          <span className="purple">media queries</span> you can control how an
          element should look based on the screen width (view the next lesson)
          and with help from <span className="purple">flexbox</span> and the{" "}
          <span className="purple">grid</span> system.
          <br />
          <br />
          The <span className="purple">viewport</span> is the user's visible
          area when he is on the website, the viewport is based on the device screen.
          <br />
          <br />
          You can have full control over the viewport through the{" "}
          <span className="purple">{"<meta>"}</span> tag, you should include
          always the code below in your web page, ( in the{" "}
          <span className="purple">{"head"}</span> tag ).
          <br />
        </p>
        <div className="exParagraph">
          <p className="mainTag">
            <span>{"<"}</span>
            <span className="tag">meta</span>
            <span className="inTag"> name</span>
            <span>=</span>
            <span className="inTagValue">"viewport"</span>
            <span className="inTag"> content</span>
            <span>=</span>
            <span className="inTagValue">
              "width=device-width, initial-scale=1.0"
            </span>
            <span>{"/>"}</span>
          </p>
        </div>
        <p>
          The <span className="purple">width=device-width</span> value sets the
          width of the page based on the screen width of the device.
          <br />
          <br />
          The <span className="purple">initial-scale=1.0</span> value sets the
          initial zoom when the page is loaded by the browser.
          <br />
          <br />A good thing to remember, if your web page has horizontal
          scroll means that something is not good in your page, the user has to
          scroll only vertically through the website. If you want to have a slider with cards for example, you will have horizontal scroll, but you can fix that bug with an absolute position and a specific width, on the mobile phones the user can scroll horizontal but only in that section with cards.
          <br />
        </p>
        <p className="res">
          Below you have an example of a responsive layout, please resize the
          iframe using the little symbol from the bottom right corner. If you
          are already on a phone or a smaller device you will see a different
          result, try it on desktop.
        </p>

        <iframe
          className="result2"
          srcDoc={c}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          style={{
            maxHeight: "600px",
            minHeight: "600px",
            minWidth: "280px",
            maxWidth: "100%",
          }}
        />
        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            Next lesson
          </button>
          <button className="practice" onClick={handleEditor}>
            Practice
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RES;
