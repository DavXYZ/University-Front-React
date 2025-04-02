// src/components/ForgotPassword/ForgotPassword.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../common/Header";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import s from "./ForgotPassword.module.css";
import forgotPasswordImg from '../../assets/forget-password.png'
import ValidationError from "../../../validation/components/ValidationError";
import LearnMore from '../../common/LearnMore'

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setIsLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset link');
      }

      setSubmitted(true);
    } catch (error) {
      setErrors({ email: error.message });
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className={s.container}>
        <div className={s.formContainer}>
          {submitted ? (
            <div className={s.successMessage}>
              <p>We've sent a password reset link to your email address.</p>
              <p>Please check your inbox and follow the instructions.</p>
              <Link to="/login" className={s.backToLogin}>Back to Login</Link>
            </div>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={s.form}>


                  <div className={s.left}>
                    <img src={forgotPasswordImg} />
                  </div>
                  <div className={s.right}>
                    <div className={s.forgotPasswordLogic}>


                      <h2>Մոռացե՞լ եք գաղտնաբառը</h2>
                      <div className={s.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className={s.input}
                        />
                        <ValidationError 
                          name="email" 
                          id="emailError" 
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || isLoading}
                        className={s.btn}
                      >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                      </button>

                      <div className={s.backToLogin}>
                        Remember your password? <Link to="/login">Login here</Link>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
      <LearnMore />
      <Footer />
    </div>
  );
};

export default ForgotPassword;