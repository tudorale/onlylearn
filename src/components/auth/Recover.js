import React, { useState } from "react";
import "./auth.css";
import { useHistory } from "react-router";
import fire from "../services/Firebase";
function Recover() {
  const [email, setEmail] = useState("");
  const [recoverStatus, setRecoverStatus] = useState("");

  const handleEmailFocus = () => {
    let label = document.querySelector(".label");
    label.style.top = "37px";
    label.style.fontSize = "1rem"
    document.querySelector("#email").style.paddingTop = "30px"
  };

  const handleEmailBlur = () => {
    let label = document.querySelector(".label");
    if (email === "") {
      label.style.top = "50px";
      label.style.fontSize = "1.2rem"
      document.querySelector("#email").style.paddingTop = "20px"
    } else {
      document.querySelector("#email").style.paddingTop = "30px"
      label.style.top = "37px";
      label.style.fontSize = "1rem"
    }
  };
  

  const history = useHistory()

  let status = document.querySelector(".recoverStatus");

  const handleRecover = () => {
    if (email === "") {
      return null;
    } else {
      fire
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          status.style.display = "block";
          setRecoverStatus("Check your email to reset your password");
        })
        .catch((error) => {
          status.style.display = "block";
          setRecoverStatus(error.message);
        });
    }
  };

  const backTo = () => {
   
    history.push("/sign-in");
      
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    let prevValue = email - 1;
    if (email !== prevValue) {
      setRecoverStatus("");
    }
  };
  return (
    <>
      <div className="loading"></div>
      <div className="recoverContent">
        <h2>Recover your password</h2>
        <p>
          Enter in the input below your account email and click the "Send"
          button, you should receive an email from us, please follow the
          instructions from the email to reset your password.
        </p>
        <div className="resetPass">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            required
            onChange={handleEmail}
          />
        </div>
        <p className="recoverStatus">{recoverStatus}</p>
        <button onClick={handleRecover}>Send</button>
        <p className="backTo" onClick={backTo}>
          Sign In
        </p>
      </div>
    </>
  );
}

export default Recover;
