"use client"
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import s from "./ForgotPassword.module.css";
import ValidationError from "../../../validation/components/ValidationError";
import forgotPasswordImg from "../../assets/forget-password.png";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const ForgotPassword = ({
  forgetPassword,
  verifyCodePassword, // Added from props
  isLoading,
  submitted,
  setIsLoading,
  setSubmitted,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setIsLoading(true);
    try {
      await forgetPassword(values.email);
      setSubmittedEmail(values.email); // Save email for verification
      setSubmitted(true);
    } catch (error) {
      setErrors({ email: error.message || "Something went wrong" });
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setCodeError("Please enter the verification code.");
      return;
    }

    setIsLoading(true);
    try {
       verifyCodePassword({ 
        verificationCode, 
        email: submittedEmail 
      });
      setCodeError("");
      alert("Verification successful. Check your email for reset instructions.");
    } catch (error) {
      setCodeError("Invalid or expired verification code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={s.pageContainer}>
      <Header />
      <NavBar />
      <div className={s.mainContent}>
        <div className={s.leftSection}>
          <div className={s.imageContainer}>
            <img
              src={forgotPasswordImg}
              alt="Decorative background"
              className={s.backgroundImage}
            />
          </div>
        </div>

        <div className={s.formContainer}>
          {submitted ? (
            <div className={s.successMessage}>
              <h2 className={s.formTitle}>Հաջողություն</h2>
              <p>Մենք ուղարկել ենք վերականգնման կոդը ձեր էլ. փոստին:</p>
              
              {/* Verification Code Input */}
              <div className={s.inputGroup}>
                <label htmlFor="verificationCode" className={s.inputLabel}>
                  Վերականգնման կոդ
                </label>
                <div className={s.inputField}>
                  <input
                    id="verificationCode"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter verification code"
                    className={s.input}
                  />
                </div>
                {codeError && <div className={s.errorMessage}>{codeError}</div>}
              </div>

              <button
                onClick={handleVerifyCode}
                disabled={isLoading}
                className={s.submitButton}
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>

              <Link to="/login" className={s.loginLink}>
                Վերադառնալ մուտքի էջ
              </Link>
            </div>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={s.formWrapper}>
                  <h2 className={s.formTitle}>Մոռացե՞լ եք գաղտնաբառը</h2>

                  <div className={s.formFields}>
                    <div className={s.inputGroup}>
                      <label htmlFor="email" className={s.inputLabel}>
                        Էլ փոստ կամ հեռախոսահամար
                      </label>
                      <div className={s.inputField}>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="info@polytechnic.am"
                          className={s.input}
                        />
                      </div>
                      <ValidationError name="email" id="emailError" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || isLoading}
                      className={s.submitButton}
                    >
                      {isLoading ? "Ուղարկվում է..." : "Ուղարկել"}
                    </button>
                  </div>

                  <div className={s.loginLinkContainer}>
                    <span>Հիշեցի՞ք ձեր գաղտնաբառը։</span>{" "}
                    <Link to="/login" className={s.loginLink}>
                      Մուտք գործեք այստեղ
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;