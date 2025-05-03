"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { connect } from "react-redux"
import loginPng from "../../assets/login.png"
import { Navigate, Link } from "react-router"
import Header from "../../common/Header"
import NavBar from "../../common/NavBar"
import s from "./Login.module.css"
import Footer from "../../common/Footer"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { login } from "../../../redux/reducers/authUserReducer"
import GoogleAuthWrapper from "../GoogleLogin/GoogleOAuthWrapper"

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
  remember_me: Yup.boolean(),
})

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <Header />
      <NavBar />
      <Formik
        initialValues={{ email: "", password: "", remember_me: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          onSubmit(values, setErrors)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.container}>
            <div className={s.form_container}>
              <div className={s.left}>
                <img className={s.img} src={loginPng || "/placeholder.svg"} alt="login" />
              </div>
              <div className={s.right}>
                <div className={s.formTitle}>Մուտք գործեք հաշիվ</div>

                <div className={s.formFields}>
                  <div className={s.inputGroup}>
                    <label htmlFor="email" className={s.inputLabel}>
                      Էլ փոստ
                    </label>
                    <div className={s.inputField}>
                      <Field id="email" name="email" placeholder="info@polytechnic.am" className={s.input} />
                    </div>
                    <ErrorMessage name="email" component="div" className={s.formSummaryError} />
                  </div>

                  <div className={s.inputGroup}>
                    <label htmlFor="password" className={s.inputLabel}>
                      Գաղտնաբառ
                    </label>
                    <div className={s.inputField}>
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Մուտքագրեք ձեր գաղտնաբառը"
                        className={s.input}
                      />
                      <button type="button" className={s.eyeButton} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <EyeOff size={22} className={s.eyeIcon} />
                        ) : (
                          <Eye size={22} className={s.eyeIcon} />
                        )}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className={s.formSummaryError} />
                  </div>

                  <div className={s.rememberForgot}>
                    <div className={s.rememberMe}>
                      <Field type="checkbox" id="remember_me" name="remember_me" className={s.checkbox} />
                      <label htmlFor="remember_me" className={s.checkboxLabel}>
                        Հիշել ինձ
                      </label>
                    </div>
                    <Link to="/forgot-password" className={s.forgotPassword}>
                      Մոռացել ե՞ք գաղտնաբառը
                    </Link>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={s.loginButton}>
                    Մուտք գործել
                  </button>
                </div>

                <div className={s.alternativeLogin}>
                  <div className={s.googleButtonContainer}>
                    <GoogleAuthWrapper />
                  </div>

                  <div className={s.divider}>
                    <span className={s.dividerText}>Կամ</span>
                  </div>

                  <Link to="/role-register" className={s.createAccountButton}>
                    Ստեղծել նոր հաշիվ
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  )
}

const Login = (props) => {
  const onSubmit = (formData, setErrors) => {
    props.login(formData.email, formData.password, formData.remember_me, setErrors)
  }

  if (props.isAuth) {
    return <Navigate to={"/"} />
  }

  return <LoginForm onSubmit={onSubmit} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  message: state.auth.message,
})

export default connect(mapStateToProps, { login })(Login)
