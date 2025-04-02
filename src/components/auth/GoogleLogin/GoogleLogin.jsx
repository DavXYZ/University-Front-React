import React from "react";
import { FcGoogle } from "react-icons/fc";
import s from './GoogleLogin.module.css';

const GoogleLogin = (props) => {
  return (
    <div className="App">
      <button onClick={props.googleLogin} className={s.signInButton}>
        <FcGoogle className="mr-4" /> Sign in with your Google Account
      </button>
    </div>
  );
};

export default GoogleLogin;
