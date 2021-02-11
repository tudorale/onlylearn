import React, { useEffect, useContext, useState } from "react";
import Nav from "../navbar/Nav3";
import fire from "../services/Firebase";
import UserContext from "../services/UserContext";
import AccountContext from "../services/AccountStatus";
import "./account.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

function Settings() {
  const status = useContext(UserContext);
  const { user, setUser } = status;

  
  const account = useContext(AccountContext);
  const {accountStatus, setAccountStatus} = account;

  const [creationTime, setCreationTime] = useState("");

  const [email, setEmail] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const [newPass, setNewPass] = useState("");
  const [passStatus, setPassStatus] = useState("");

  const [deleteStatus, setDeleteStatus] = useState("");

  // a little trick to fix a UI bug for people with slow connection
  const [bugFixVariable, setBugFixVariable] = useState(false);

  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fire.auth().onAuthStateChanged((data) => {
      if (data) {
        setUser({ data });
        setCreationTime(data.metadata.creationTime);
        setEmail(data.email);
      } else {
        setUser(false);
      }
    });
  }, [setUser]);

  let usr = fire.auth().currentUser;

  let content = document.querySelector(".signedIn");
  let notSignedIn = document.querySelector(".notSignedIn");
  let spinner = document.querySelector(".spinnerInside");

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        if(!bugFixVariable){
          if (spinner && notSignedIn) {
            spinner.style.display = "none";
            notSignedIn.style.display = "block";
          }
        }
      } else {
        if (spinner && content) {
          setBugFixVariable(true);
          spinner.style.display = "none";
          content.style.display = "block";
        }
      }
    }, 1000);
  }, [user, content, notSignedIn, spinner]);

  const changeEmailFocus = () => {
    let label = document.querySelector(".label1");
    label.style.top = "33px";
    label.style.fontSize = "0.9rem"
    document.querySelector("#emailChange").style.paddingTop = "30px"
  };

  const changeEmailBlur = () => {
    let label = document.querySelector(".label1");
    if (newEmail === "") {
      label.style.top = "48px";
      label.style.fontSize = "1.2rem"
      document.querySelector("#emailChange").style.paddingTop = "20px"

    } else {
      document.querySelector("#emailChange").style.paddingTop = "30px"

      label.style.top = "33px";
      label.style.fontSize = "0.9rem"

    }
  };

  const handleChangeEmail = (e) => {
    setNewEmail(e.target.value);
    let prevValue = newEmail - 1;
    if (newEmail !== prevValue) {
      setEmailStatus("");
    }
  };


  let statusEmail = false;
  const handleEmail = () => {
    
    statusEmail = !statusEmail;
    if (statusEmail) {
      document.querySelector(".emailContent").style.display = "flex";
      document.querySelector("#email").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".emailContent").style.display = "none";
      document.querySelector("#email").style.transform = "rotate(-90deg)";
    }
  };

  const handlePassFocus = () => {
    let label = document.querySelector(".label2");
    label.style.top = "33px";
    label.style.fontSize = "0.9rem"
    document.querySelector("#passwordChange").style.paddingTop = "30px"
  };

  const handlePassBlur = () => {
    let label = document.querySelector(".label2");
    if (newPass === "") {
      label.style.top = "48px";
      label.style.fontSize = "1.2rem"
      document.querySelector("#passwordChange").style.paddingTop = "20px"
    } else {
      document.querySelector("#passwordChange").style.paddingTop = "30px"
      label.style.top = "33px";
      label.style.fontSize = "0.9rem"

    }
  };

  const handleChangePass = (e) => {
    setNewPass(e.target.value);
    let prevValue = newPass - 1;
    if (newPass !== prevValue) {
      setPassStatus("");
    }
  };


  const seePassword = () => {
    let input = document.querySelector("#passwordChange");
    let hidePassword = document.querySelector(".hidePassword");
    hidePassword.style.display = "block";
    let seePassword = document.querySelector(".seePassword");
    seePassword.style.display = "none";
    input.setAttribute("type", "text");
  };
  const hidePassword = () => {
    let input = document.querySelector("#passwordChange");
    let hidePassword = document.querySelector(".hidePassword");
    hidePassword.style.display = "none";
    let seePassword = document.querySelector(".seePassword");
    seePassword.style.display = "block";
    input.setAttribute("type", "password");
  };

  let statusPassword = false;
  const handlePassword = () => {
    statusPassword = !statusPassword;
    if (statusPassword) {
      document.querySelector(".passwordContent").style.display = "flex";
      document.querySelector("#pass").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".passwordContent").style.display = "none";
      document.querySelector("#pass").style.transform = "rotate(-90deg)";
    }
  };

  let deleteS = false;
  const showDelete = () => {
    deleteS = !deleteS;
    if (deleteS) {
      document.querySelector(".deleteContent").style.display = "flex";
      document.querySelector("#delete").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".deleteContent").style.display = "none";
      document.querySelector("#delete").style.transform = "rotate(-90deg)";
    }
  };

  const handleSignIn = () => {
     history.push("/sign-in");
     
  };
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const changePassword = () => {
    document.querySelector(".passwordStatus").style.display = "block";
    setPassStatus(`Wait...`);
    usr
      .updatePassword(newPass)
      .then(() => {
        setAccountStatus(`Your password has been changed. ${day}/${month}/${year}`)
       
        // if you see this code maybe you are wonder why didn't I used history to redirect
        // window.location.href is like an actual link so the page will refresh when is redirecting
        // history.push will not refresh the following page (sign in) and that was causing me a bug.
        
        window.location.href = "/sign-in"; 
      })
      .catch((error) => {
        document.querySelector(".passwordStatus").style.display = "block";
        setPassStatus(error.message);
      });
  };

  const changeUserEmail = () => {
    document.querySelector(".emailStatus").style.display = "block";
    setEmailStatus("Wait...");
    usr
      .updateEmail(newEmail)
      .then(() => {
        setAccountStatus(`Your email has been changed. ${day}/${month}/${year}`)
        window.location.href = "/sign-in";        
      })
      .catch((error) => {
        document.querySelector(".emailStatus").style.display = "block";
        setEmailStatus(error.message);
      });
  };

  const deleteAccount = () => {
    document.querySelector(".deleteStatus").style.display = "block";
    setDeleteStatus("Wait...");
    usr
      .delete()
      .then(() => {
        document.querySelector(".signedIn").style.display = "none";
        setAccountStatus(`Your account has been deleted. ${day}/${month}/${year}`)
        window.location.href = "/sign-in"; 
      })
      .catch(() => {
        document.querySelector(".deleteStatus").style.display = "block";
        setDeleteStatus("Something went wrong, try again or refresh the page.");
      });
  };

  return (
    <>
      <Nav />
      <div className="spinnerInside"></div>
      <div className="settings">
        <div className="notSignedIn">
          If you are logged in and you are still seeing this message please wait
          a few seconds or refresh the page. If you are not logged in we
          recommend you to sign in to view this page.
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <div className="signedIn">
          <h1>Account</h1>
          <p>Created on: {creationTime.slice(0, 17)}</p>
          <p>Your email: {email}</p>
          <h2 className="settingsDropDown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9e9e9e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Account Settings
          </h2>
          <div className="accountSettings">
            <div className="changeEmail" onClick={handleEmail}>
              <p>
                Change email{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  id="email"
                  height="44"
                  className="arrowDn"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </p>
            </div>

            <div className="emailContent">
              <label htmlFor="emailChange" className="label1">
                New Email
              </label>
              <input
                type="email"
                id="emailChange"
                onFocus={changeEmailFocus}
                onBlur={changeEmailBlur}
                required
                onChange={handleChangeEmail}
                
              />
              <span className="emailStatus">{emailStatus}</span>
              <button className="changeButton" onClick={changeUserEmail}>
                Change
              </button>
            </div>

            <div className="changePassword" onClick={handlePassword}>
              <p>
                Change password{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  className="arrowDn2"
                  stroke="red"
                  id="pass"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </p>
            </div>

            <div className="passwordContent">
              <label htmlFor="passwordChange" className="label2">
                New Password
              </label>
              <input
                type="password"
                id="passwordChange"
                onFocus={handlePassFocus}
                onBlur={handlePassBlur}
                required
                onChange={handleChangePass}
               
              />
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512.001 512.001"
                xml="preserve"
                className="hidePassword"
                onClick={hidePassword}
              >
                <path
                  d="M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083
			c12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752
			c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003
			c47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z"
                />
                <path
                  d="M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333
			c0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171
			c5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64
			c3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z"
                />

                <path
                  d="M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587
			c-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128
			c-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229
			c38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443
			C512.854,258.915,512.833,253.091,509.462,249.102z"
                />

                <path
                  d="M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443
			c-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792
			c3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533
			c24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699
			C334.572,126.862,331.585,120.825,325.996,118.947z"
                />

                <path
                  d="M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083
			c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211
			C449.025,78.051,449.025,71.288,444.865,67.128z"
                />
              </svg>

              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 511.992 511.992"
                className="seePassword"
                onClick={seePassword}
              >
                <path
                  d="M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105
    c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886
    C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128
    c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424
    C463.013,282.065,362.256,383.996,255.995,383.996z"
                />
                <path
                  d="M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333
    S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64
    S291.28,319.996,255.995,319.996z"
                />
              </svg>
              <span className="passwordStatus">{passStatus}</span>
              <button className="changeButton" onClick={changePassword}>
                Change
              </button>
            </div>

            <div className="deleteAccount" onClick={showDelete}>
              <p>
                Delete account{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  className="arrowDn3"
                  stroke="red"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  id="delete"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </p>
            </div>

            <div className="deleteContent">
              <p className="infoDelete">
                After pressing the "Delete" button, your account will be
                permanently deleted, if you want to have access to lessons you
                will have to create a new account.
              </p>
              <span className="deleteStatus">{deleteStatus}</span>
              <button className="deleteButton" onClick={deleteAccount}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
