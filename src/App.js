import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./main.css";
import { AccountProvider } from "./components/services/AccountStatus";



function App() {

  const Home = lazy(() => import('./components/home/Home'));
  const About = lazy(() => import('./components/about/About'));
  const Courses = lazy(() => import("./components/courses/Courses"));
  const Login =  lazy(() => import('./components/auth/Login'));
  const Register =  lazy(() => import('./components/auth/Register'));
  const Terms =  lazy(() => import('./components/terms/Terms'));
  const Privacy =  lazy(() => import('./components/privacy/Privacy'));
  const Account =  lazy(() => import('./components/account/Account'));
  const Recover =  lazy(() => import('./components/auth/Recover'));
  const Editor =  lazy(() => import('./components/editor/EditorWrapper'));


  // HTML LESSONS

  const HTML1 =  lazy(() => import('./components/courses/htmlLessons/introduction/HTMLIntroduction'));
  const HTML2 =  lazy(() => import('./components/courses/htmlLessons/lesson2/HTMLLesson2'));
  const HTML3 =  lazy(() => import('./components/courses/htmlLessons/lesson3/HTMLLesson3'));
  const HTML4 =  lazy(() => import('./components/courses/htmlLessons/lesson4/HTMLLesson4'));
  const HTML5 =  lazy(() => import('./components/courses/htmlLessons/lesson5/HTMLLesson5'));
  const HTML6 =  lazy(() => import('./components/courses/htmlLessons/lesson6/HTMLLesson6'));
  const HTML7 =  lazy(() => import('./components/courses/htmlLessons/lesson7/HTMLLesson7'));
  const HTML7v5 =  lazy(() => import('./components/courses/htmlLessons/lesson7.5/HTMLLesson7.5'));
  const HTML8 =  lazy(() => import('./components/courses/htmlLessons/lesson8/HTMLLesson8'));
  const HTML9=  lazy(() => import('./components/courses/htmlLessons/lesson9/HTMLLesson9'));
  const HTML10 =  lazy(() => import('./components/courses/htmlLessons/lesson10/HTMLLesson10'));
  const HTML10v5 =  lazy(() => import('./components/courses/htmlLessons/lesson10.5/HTMLLesson10.5'));
  const HTML11 =  lazy(() => import('./components/courses/htmlLessons/lesson11/HTMLLesson11'));
  const HTML12 =  lazy(() => import('./components/courses/htmlLessons/lesson12/HTMLLesson12'));
  const HTML12v5 =  lazy(() => import('./components/courses/htmlLessons/lesson12.5/HTMLLesson12.5'));
  const HTML13 =  lazy(() => import('./components/courses/htmlLessons/lesson13/HTMLLesson13'));
  const HTML14 =  lazy(() => import('./components/courses/htmlLessons/lesson14/HTMLLesson14'));
  const HTML15 =  lazy(() => import('./components/courses/htmlLessons/lesson15/HTMLLesson15'));
  const HTML16 =  lazy(() => import('./components/courses/htmlLessons/lesson16/HTMLLesson16'));

  // CSS LESSONS

  const CSS1 = lazy(() => import('./components/courses/cssLessons/CSS1'));
  const CSS2 = lazy(() => import('./components/courses/cssLessons/CSS2'));
  const CSS3 = lazy(() => import('./components/courses/cssLessons/CSS3'));
  const CSS4 = lazy(() => import('./components/courses/cssLessons/CSS4'));
  const CSS5 = lazy(() => import('./components/courses/cssLessons/CSS5'));
  const CSS6 = lazy(() => import('./components/courses/cssLessons/CSS6'));
  const CSS7 = lazy(() => import('./components/courses/cssLessons/CSS7'));
  const CSS8 = lazy(() => import('./components/courses/cssLessons/CSS8'));
  const CSS9 = lazy(() => import('./components/courses/cssLessons/CSS9'));
  const CSS10 = lazy(() => import('./components/courses/cssLessons/CSS10'));
  const CSS11 = lazy(() => import('./components/courses/cssLessons/CSS11'));
  const CSS12 = lazy(() => import('./components/courses/cssLessons/CSS12'));
  const CSS13 = lazy(() => import('./components/courses/cssLessons/CSS13'));
  const CSS14 = lazy(() => import('./components/courses/cssLessons/CSS14'));
  const CSS15 = lazy(() => import('./components/courses/cssLessons/CSS15'));
  const CSS16 = lazy(() => import('./components/courses/cssLessons/CSS16'));
  const CSS17 = lazy(() => import('./components/courses/cssLessons/CSS17'));
  const CSS18 = lazy(() => import('./components/courses/cssLessons/CSS18'));
  const CSS19 = lazy(() => import('./components/courses/cssLessons/CSS19'));
  const CSS20 = lazy(() => import('./components/courses/cssLessons/CSS20'));
  const CSS21 = lazy(() => import('./components/courses/cssLessons/CSS21'));
  const CSS22 = lazy(() => import('./components/courses/cssLessons/CSS22'));
  const CSS23 = lazy(() => import('./components/courses/cssLessons/CSS23'));
  const CSS24 = lazy(() => import('./components/courses/cssLessons/CSS24'));
  const CSS25 = lazy(() => import('./components/courses/cssLessons/CSS25'));
  const CSS26 = lazy(() => import('./components/courses/cssLessons/CSS26'));
  const CSS27 = lazy(() => import('./components/courses/cssLessons/CSS27'));
  const CSS28 = lazy(() => import('./components/courses/cssLessons/CSS28'));
  const CSS29 = lazy(() => import('./components/courses/cssLessons/CSS29'));
  const CSS30 = lazy(() => import('./components/courses/cssLessons/CSS30'));
  const CSS31 = lazy(() => import('./components/courses/cssLessons/CSS31'));
  const CSS32 = lazy(() => import('./components/courses/cssLessons/CSS32'));
  const CSS33 = lazy(() => import('./components/courses/cssLessons/CSS33'));
  const CSS34 = lazy(() => import('./components/courses/cssLessons/CSS34'));

  // RESPONSIVE LESSONS

  const RES1 = lazy(() => import('./components/courses/responsive/RES1'));
  const RES2 = lazy(() => import('./components/courses/responsive/RES2'));
  const RES3 = lazy(() => import('./components/courses/responsive/RES3'));
  const RES4 = lazy(() => import('./components/courses/responsive/RES4'));
  const RES5 = lazy(() => import('./components/courses/responsive/RES5'));
  const RES6 = lazy(() => import('./components/courses/responsive/RES6'));
  const RES7 = lazy(() => import('./components/courses/responsive/RES7'));
  const RES8 = lazy(() => import('./components/courses/responsive/RES8'));
  const RES9 = lazy(() => import('./components/courses/responsive/RES9'));
  const RES10 = lazy(() => import('./components/courses/responsive/RES10'));

  

  return (
    <>
        <div className="website">
          <Suspense fallback={
              <div className="loadingBox">
                <div className="spinner"></div>
              </div>
            }>
              <Router>  
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/about" exact component={About} />

                <AccountProvider>
                  <Route path="/sign-in" exact component={Login} />
                </AccountProvider>
                
                <Route path="/sign-up" exact component={Register} />
                <Route path="/terms&conditions" exact component={Terms} />
                <Route path="/privacy-policy" exact component={Privacy} />
                <AccountProvider>
                  <Route path="/account" exact component={Account} />
                </AccountProvider>
                <Route path="/recover-password" exact component={Recover} />
                <Route exact path="/editor" component={Editor} />

                {/* HTML LESSONS */}

                <Route exact path="/html5/introduction" component={HTML1}/>
                <Route exact path="/html5/text&span" component={HTML2} />
                <Route exact path="/html5/headings" component={HTML3} />
                <Route exact path="/html5/lists" component={HTML4} />
                <Route exact path="/html5/attributes" component={HTML5} />
                <Route exact path="/html5/container" component={HTML6} />
                <Route exact path="/html5/images" component={HTML7} />
                <Route exact path="/html5/videos" component={HTML7v5} />
                <Route exact path="/html5/buttons" component={HTML8} />
                <Route exact path="/html5/inputs" component={HTML9} />
                <Route exact path="/html5/labels" component={HTML10} />
                <Route exact path="/html5/select&option" component={HTML10v5} />
                <Route exact path="/html5/forms" component={HTML11} />
                <Route exact path="/html5/links" component={HTML12v5} />
                <Route exact path="/html5/tables" component={HTML12} />
                <Route exact path="/html5/styling" component={HTML13} />
                <Route exact path="/html5/comments" component={HTML14} />
                <Route exact path="/html5/layout" component={HTML15} />
                <Route exact path="/html5/recommendation" component={HTML16} />
                
                {/* CSS */}

                <Route exact path="/css3/introduction" component={CSS1} />
                <Route exact path="/css3/priority" component={CSS2} />
                <Route exact path="/css3/colors" component={CSS3} />
                <Route exact path="/css3/dimensions" component={CSS4} />
                <Route exact path="/css3/units" component={CSS5} />
                <Route exact path="/css3/font" component={CSS6} />
                <Route exact path="/css3/padding" component={CSS7} />
                <Route exact path="/css3/border" component={CSS8} />
                <Route exact path="/css3/margin" component={CSS9} />
                <Route exact path="/css3/box-model" component={CSS10} />
                <Route exact path="/css3/position" component={CSS11} />
                <Route exact path="/css3/transform" component={CSS12} />
                <Route exact path="/css3/shadows" component={CSS13} />
                <Route exact path="/css3/alignment" component={CSS14} />
                <Route exact path="/css3/display" component={CSS15} />
                <Route exact path="/css3/decoration" component={CSS16} />
                <Route exact path="/css3/opacity&visibility" component={CSS17} />
                <Route exact path="/css3/overflow" component={CSS18} />
                <Route exact path="/css3/outline" component={CSS19} />
                <Route exact path="/css3/combinators" component={CSS20} />
                <Route exact path="/css3/word" component={CSS21} />
                <Route exact path="/css3/document-tree" component={CSS22} />
                <Route exact path="/css3/z-index" component={CSS23} />
                <Route exact path="/css3/rules" component={CSS24} />{" "}
                <Route exact path="/css3/animations" component={CSS25} />
                <Route exact path="/css3/pseudo-classes" component={CSS26} />
                <Route exact path="/css3/pseudo-elements" component={CSS27} />
                <Route exact path="/css3/comments" component={CSS28} />
                <Route exact path="/css3/transition" component={CSS29} />
                <Route exact path="/css3/variables" component={CSS30} />
                <Route exact path="/css3/functions" component={CSS31} />
                <Route exact path="/css3/filter" component={CSS32} />
                <Route exact path="/css3/cursor" component={CSS33} />
                <Route exact path="/css3/recommendation" component={CSS34} />

                {/* Responsive lessons */}

                <Route exact path="/responsive/introduction" component={RES1} />
                <Route exact path="/responsive/media-queries" component={RES2}/>
                <Route exact path="/responsive/flexbox" component={RES3} />
                <Route exact path="/responsive/flex-items" component={RES4} />
                <Route exact path="/responsive/flexbox&media-queries" component={RES5}/>
                <Route exact path="/responsive/grid" component={RES6} />
                <Route exact path="/responsive/grid-container" component={RES7} />
                <Route exact path="/responsive/grid-item" component={RES8} />
                <Route exact path="/responsive/grid&media-queries" component={RES9} />
                <Route exact path="/responsive/recommendation" component={RES10} />
                
              </Router>
            </Suspense>
        </div>
    </>
  );
}

export default App;
