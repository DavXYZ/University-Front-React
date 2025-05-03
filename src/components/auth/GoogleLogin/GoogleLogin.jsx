"use client"
import { FcGoogle } from "react-icons/fc"
import s from "./GoogleLogin.module.css"

const GoogleLogin = (props) => {
  return (
    <button onClick={props.googleLogin} className={s.signInButton}>
      <FcGoogle />
      <span>Sign in with Google</span>
    </button>
  )
}

export default GoogleLogin
