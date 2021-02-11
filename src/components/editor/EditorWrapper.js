import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../services/useLocalStorage";
import "./editor.css";
import { useHistory } from "react-router-dom";

function EditorWrapper() {
  const [code, setCode] = useLocalStorage(
    "code",
    `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>title</title>

    <style>
       
    </style>
        
  </head>
  <body>
      
  </body>
</html>
  `
  );
  const [srcDoc, setSrcDoc] = useState(``);
  const history = useHistory();
  const [resultStatus, setResultStatus] = useState("closed");
  const [codeStatus, setCodeStatus] = useState("opened");
  const [twoColumns, setTwoColumns] = useState(false);
  const [layoutStatus, setLayoutStatus] = useState("not");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        ${code}
      `);
    }, 500);
    return () => clearTimeout(timeout);
  }, [code]);

  const handleBack = () => {
    history.push("/");
  };

  let status = false;

  const handleInfo = () => {
    let info = document.querySelector(".info");
    status = true;
    if (status) {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  };

  const handleExit = () => {
    let info = document.querySelector(".info");
    status = false;
    if (!status) {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  };

  let editor = document.querySelector(".CodeMirror");
  let result = document.querySelector(".editor-result");

  let resultIcon = document.querySelector(".item3");
  let codeIcon = document.querySelector(".item4");

  const handleResult = () => {
    setResultStatus("opened");
    setCodeStatus("closed");
    if (editor && result) {
      editor.style.display = "none";
      result.style.display = "block";

      resultIcon.style.display = "none";
      codeIcon.style.display = "block";
    }
  };

  const handleCode = () => {
    setResultStatus("closed");
    setCodeStatus("opened");
    if (editor && result) {
      editor.style.display = "block";
      result.style.display = "none";

      resultIcon.style.display = "block";
      codeIcon.style.display = "none";
    }
  };

  let wrapper = document.querySelector(".editor-wrapper");
  let nav = document.querySelector(".editor-nav");
  let resultFIcon = document.querySelector(".item9");
  let codeFIcon = document.querySelector(".item10");
  let miniNav = document.querySelector(".fullscreen-block");

  const handleMaximize = () => {
    editor.style.height = "100vh";
    editor.style.marginTop = "0px";

    result.style.height = "100vh";
    result.style.marginTop = "0px";

    editor.style.borderRadius = "0px";
    result.style.borderRadius = "0px";

    wrapper.style.width = "100%";

    nav.style.display = "none";
    miniNav.style.display = "flex";

    if (resultStatus === "opened") {
      resultFIcon.style.display = "none";
      codeFIcon.style.display = "block";
    }

    if (codeStatus === "opened") {
      resultFIcon.style.display = "block";
      codeFIcon.style.display = "none";
    }

    if (layoutStatus === "not") {
      result.style.width = "auto";
      editor.style.width = "auto";
    } else {
      result.style.width = "50vw";
      editor.style.width = "50vw";

      resultFIcon.style.display = "none";
      codeFIcon.style.display = "none";
    }
  };

  const handleMinimize = () => {
    editor.style.height = "80vh";
    editor.style.marginTop = "100px";

    wrapper.style.width = "90%";
    nav.style.display = "block";

    result.style.height = "80vh";
    result.style.marginTop = "100px";

    editor.style.borderRadius = "10px";
    result.style.borderRadius = "10px";

    if(layoutStatus === "yes"){
      editor.style.borderTopLeftRadius = "10px";
      editor.style.borderBottomLeftRadius = "10px";
      result.style.borderTopRightRadius = "10px";
      result.style.borderBottomRightRadius = "10px";

      editor.style.width = "45vw"

      editor.style.borderTopRightRadius = "0px";
      editor.style.borderBottomRightRadius = "0px";
      result.style.borderTopLeftRadius = "0px";
      result.style.borderBottomLeftRadius = "0px";
    }

    document.querySelector(".fullscreen-block").style.display = "none";
  };

  const handleResultFullscreen = () => {
    editor.style.display = "none";
    result.style.display = "block";
    editor.style.borderRadius = "0px !important";
    result.style.borderRadius = "0px !important";
    setResultStatus("opened");
    setCodeStatus("closed");
    resultIcon.style.display = "none";
    resultFIcon.style.display = "none";

    codeIcon.style.display = "block";
    codeFIcon.style.display = "block";
    
  };

  const handleCodeFullscreen = () => {
    editor.style.display = "block";
    result.style.display = "none";
    setResultStatus("closed");
    setCodeStatus("opened");
    resultIcon.style.display = "block";
    resultFIcon.style.display = "block";

    codeIcon.style.display = "none";
    codeFIcon.style.display = "none";
    editor.style.borderRadius = "0px";
    result.style.borderRadius = "0px";
  };
  useEffect(() => {
    setTwoColumns(false);
    handleLayout();
  }, []);

  const handleLayout = () => {
    setTwoColumns(!twoColumns);
    if (wrapper) {
      if (twoColumns) {
        setLayoutStatus("yes");
        setCode("Loading...");
        setTimeout(() => {
          setCode(code)
        }, 500)
        wrapper.style.flexDirection = "row";
        result.style.display = "block";
        editor.style.display = "";

        editor.style.borderTopRightRadius = "0px";
        editor.style.borderBottomRightRadius = "0px";

        result.style.borderTopLeftRadius = "0px";
        result.style.borderBottomLeftRadius = "0px";

        document.querySelector(".first-block").style.width = "133px";

        resultIcon.style.display = "none";
        codeIcon.style.display = "none";

        editor.style.width = "45vw";
        result.style.width = "45vw";

      } else {
        setCodeStatus("opened");
        setResultStatus("closed");
        setLayoutStatus("not");
        wrapper.style.flexDirection = "column";
        result.style.display = "none";
        editor.style.display = "block";

        editor.style.borderTopRightRadius = "10px";
        editor.style.borderBottomRightRadius = "10px";

        result.style.borderTopLeftRadius = "10px";
        result.style.borderBottomLeftRadius = "10px";

        document.querySelector(".first-block").style.width =
          window.innerWidth < 330 ? "170px" : "200px";

        resultIcon.style.display = "block";
        resultFIcon.style.display = "block";
        editor.style.width = "auto";
        result.style.width = "auto";
      }
    }
  };

  return (
    <>
      <div className="editor-nav">
        <div className="first-block">
          <div title="Home" className="item item1">
            <svg
              onClick={handleBack}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
            </svg>
          </div>

          <div title="Info" className="item item2">
            <svg
              onClick={handleInfo}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
            </svg>
          </div>

          <div title="Result" className="item item3">
            <svg
              onClick={handleResult}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="1" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="8" y1="4" x2="8" y2="8" />
            </svg>
          </div>

          <div title="Code" className="item item4">
            <svg
              onClick={handleCode}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>
        </div>

        <div className="second-block">
          <div title="Maximize" onClick={handleMaximize} className="item item5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
            </svg>
          </div>

          <div
            title="Change layout"
            onClick={handleLayout}
            className="item item6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9C27B0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
          </div>
        </div>
      </div>
      <div className="editor-wrapper">
        <div className="fullscreen-block">
          <div title="Minimize" className="item item8">
            <svg
              onClick={handleMinimize}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
              <path d="M15 5v2a2 2 0 0 0 2 2h2" />
              <path d="M5 15h2a2 2 0 0 1 2 2v2" />
              <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
            </svg>
          </div>

          <div title="Result" className="item  item9">
            <svg
              onClick={handleResultFullscreen}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="1" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="8" y1="4" x2="8" y2="8" />
            </svg>
          </div>

          <div title="Code" className="item item10">
            <svg
              onClick={handleCodeFullscreen}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>
        </div>
        <div className="info">
          <div className="close" onClick={handleExit}>
            X
          </div>
          <div className="effect"></div>
          <h2>Info</h2>
          <p>
            Free editor for the OnlyLearn website, here you can practice and
            your code will be saved in the Local Storage.
            <br />
            You can click the "Result" icon to see how your website is looking
            and the result will appear immediately, you can maximize or minimize
            the editor and the result, you can change the layout into 2 columns
            or in the default.
            <br />
            We recommend you to use this editor on a desktop device (better
            experience).
          </p>
          <p>Version 1.12.20</p>
        </div>

        <div className="main-editor">
          <Editor language="htmlmixed" value={code} onChange={setCode} />
        </div>

        <div className="editor-result">
          <iframe
            id="myframe"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default EditorWrapper;
