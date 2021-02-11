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
  
        history.push("/responsive/introduction");
    
  };

  const handleEditor = () => {

        history.push("/editor");
    
  };
  const previousLesson = () => {

        history.push("/css3/cursor");
  
  };

  const c = `
  <style>
    .button1{
        width: 120px;
        height: 40px;
        background-color: lightgreen;
        color: white;
        font-size: 1.3rem;
        border: 2px solid green;
        border-radius: 10px;
    }
    .button2{
        width: 120px;
        height: 40px;
        background-color: #005e1a;
        color: white;
        font-size: 1.2rem;
        border: 2px solid #005e1a;
        border-radius: 4px;
        display: block;
        margin-top: 15px;
    }
  </style>
  <button class="button1">Not good</button>
  <button class="button2">Good</button>
  `;

  const s = `
  <style>
    .card{
        width: 270px;
        height: 350px;
        background-color: white;
        border-radius: 5px;
        position: relative;
        
    }
    .img{
        
        width: 270px;
        height: 150px;
        background-color: grey;
        border-radius: 5px;
    }
    .card p{
        font-size: 1.2rem;
    }
    .card button{
        width: 120px;
        height: 40px;
        background-color: red;
        color: white;
        font-size: 1.2rem;
        border: 2px solid red;
        border-radius: 4px;
        display: block;
        margin-top: 15px;
    }

    .card2{
        width: 270px;
        height: 350px;
        background-color: white;
        border-radius: 5px;
        margin-top: 30px;
        position: absolute;
        font-family: Arial;
    }
    .img2{
        width: 250px;
        height: 150px;
        background-color: grey;
        margin-top: 10px;
        margin-left: 10px;
        border-radius: 5px;
       
    }
    .card2 p{
        font-size: 1.2rem;
        margin-left: 13px;
        color: #212121;
    }
   .gg{
       margin-top: 25px !important;

   }
    .card2 button{
        width: 120px;
        height: 40px;
        background-color: #212121;
        color: white;
        font-size: 1.2rem;
        border: 2px solid #212121;
        border-radius: 4px;
        display: block;
        margin-top: 30px;
        margin-left: 13px;
    }
  </style>
  <div class="card">
    <div class="img"></div>
    <p>Lorem ipsum dolor sit amet</p>
    <p>Last updated: 12 May</p>
    <button>Read more</button>
  </div>

  <div class="card2">
    <div class="img2"></div>
    <p>Lorem ipsum dolor sit amet</p>
    <p class="gg">Last updated: 12 May</p>
    <button>Read more</button>
  </div>
  `;

  return (
    <>
      <Navbar />
      <div className="lessonContent">
        <h1>Recommendation</h1>
        <p>
          Good news!, you finished the <span className="purple">CSS3</span>{" "}
          course, now you can make a full website from scratch, you can give
          life to your website, and as we said when you finished the{" "}
          <span className="purple">HTML5</span> course, make a project, with
          practice you can be a good web developer.
        </p>
        <p>
          We recommend you to make a website from zero, first, make the document
          with <span className="purple">HTML</span>, make a navbar, make an
          intro section, after that your website may look ugly, now its time to{" "}
          <span className="purple">style</span> your website, give color and
          life to your page, use positions to position the elements, use what
          you learn from this course, if you don't know something, don't give
          up, search on Google, or look again on some lessons.
        </p>
        <p>
          We have to mention that in this course you didn't learn all the{" "}
          <span className="purple">CSS</span> properties, there are more, but we
          showed you what we thought was necessary for you.
        </p>
        <p>
          Now we have an <span className="purple">advice</span> for you, we saw
          many peoples who don't know how to design properly a website, they are
          using strident colors, borders that don't look good, small fonts,
          zero contrast on colors or zero white space between the elements.
          Below you have some examples of how to design properly something, and
          we hope you remember this when you will finish all the courses on this
          website and you are on your <span className="purple">own</span>.
        </p>

        <br />
        <p className="res">
          Tips on what colors should you use for your website and how to make a
          good contrast.
        </p>
        <p>
          First, don't use black, use something lighter than black, use darkish
          colors don't use red, green, yellow, and for text try to use white,
          but this depends on your background.
        </p>
        <p>
          You have an example below, you may think no one will make the first
          button on his website, it's too ugly, but many beginners will make
          this mistake, first, don't use light backgrounds and white on text,
          make the border the same color as your background color, don't use the
          round corners too much, try to use dark colors for the background, if
          you want blue or red as the color, try to make it dark.
        </p>
        <iframe
          className="result"
          srcDoc={c}
          title="output"
          frameBorder="0"
          style={{ height: "115px" }}
          scrolling="no"
          sandbox="allow-scripts"
        />
        <p className="res">
          Below you have an example of how you should use text on your website,
          the example below is a card, you want to make your website easy to
          visualize, try to use paddings and margins. Visual hierarchy is vital
          for your website, and is about the color, font, size, white space.{" "}
        </p>
        <p>
          The grey box is representing an image for your card, on the first card
          is missing the white space, the font is the default, the red for
          button doesn't make any sense and the color for the text is too black.
        </p>
        <p>
          It's more about visual hierarchy but we saw many people who make cards
          or are using colors without thinking, don't use cyan background and
          text white or other strident colors, use dark colors, use colors that
          will not hurt the user's eyes, use colors that are making the text
          easy to read, remember this because these things are important.
        </p>
        <iframe
          className="result"
          srcDoc={s}
          title="output"
          frameBorder="0"
          style={{ height: "750px" }}
          scrolling="no"
          sandbox="allow-scripts"
        />
        <p>
          You will see more designs along the way and other advice for you, but
          for now, click the "New journey" button and let's start making
          responsive websites!.
        </p>
        <div className="buttons">
          <button className="nextL" onClick={nextLesson}>
            New journey
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
