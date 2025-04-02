// src/components/AdminLogin/Login.jsx

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
// import { login } from "../../../redux/reducers/authAdminReducer";
import loginPng from "../assets/login.png";
import { Navigate, Link } from "react-router";
import Header from "../../common/Header";
import NavBar from "../../common/NavBar";
import s from "./Login.module.css";
import Footer from "../../common/Footer";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // You can use any icon libra

import { login } from "../../../redux/reducers/authUserReducer";
import GoogleAuthWrapper from "../GoogleLogin/GoogleOAuthWrapper";
// import GoogleAuthWrapper from "../GoogleLogin/GoogleOAuthWrapper";

// Validation schema using Yup
const validationSchema = Yup.object({
  emailOrUsername: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Header />
      <NavBar />
      <Formik
        initialValues={{ emailOrUsername: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          onSubmit(values, setErrors); // Pass setErrors to login action
          setSubmitting(false);
        }}
      >
        {({ isSubmitting}) => (
          <Form className={s.container}>
            <div className={s.form_container}>
              <div className={s.left}>
                <img className={s.img} src={loginPng} alt="login" />
              </div>
              <div className={s.right}>
                <h2 className={s.form_heading}>Members Log in</h2>
                <div className={s.emailInput}>
                  <label htmlFor="emailOrUsername">Email</label>
                  <Field
                    id="emailOrUsername"
                    name="emailOrUsername"
                    placeholder="info@polytechnic.am"
                    className={s.input}
                  />
                  <ErrorMessage
                    name="emailOrUsername"
                    component="div"
                    className={s.formSummaryError}
                  />
                </div>

                <div className={s.pwdInput}>
                  <label htmlFor="password">Password</label>
                  <div className={s.passwordWrapper}>
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={s.input}
                    />
                    <button
                      type="button"
                      className={s.eyeButton}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={s.formSummaryError}
                  />
                </div>

                <div className={s.rememberAndForgot}>
                  <div className={s.rememberMeContainer}>
                    <label htmlFor="rememberMe">
                      <Field
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                      />{" "}
                      Remember Me
                    </label>
                  </div>
                  <div className={s.forgotPassword}>
                    <Link to="/forgot-password">Forgot your password?</Link>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className={s.btn}>
                  Login
                </button>

                <div className={s.orContainer}>
                  <span className={s.line}></span>
                  <p className={s.orText}>or</p>
                  <span className={s.line}></span>
                </div>

                <div>{ <GoogleAuthWrapper /> }</div>
                
                <Link to="/role-register" className={s.signUp}>Sign up</Link>
                
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

const Login = (props) => {
  const onSubmit = (formData, setErrors) => {
    props.login(formData.emailOrUsername, formData.password, setErrors); // Pass setErrors to login
  };

  // If the user is already authenticated, navigate to the home page
  if (props.isAuth) {
    return <Navigate to={"/"} />;
  }

  return <LoginForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    message: state.auth.message,
});

export default connect(mapStateToProps, {login})(Login);
