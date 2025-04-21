import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { resetPassword } from "../../../redux/reducers/authUserReducer";
import s from "./ResetPassword.module.css";
import Header from "../../common/Header";
import NavBar from "../../common/NavBar";
import LearnMore from "../../common/LearnMore";
import Footer from "../../common/Footer";
import ResetPasswordImg from '../../assets/reset-password.png'

const ResetPassword = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    //   const token = queryParams.get("token");

    //   const [isTokenValid, setIsTokenValid] = useState(true); // Set a state to validate token

    //   useEffect(() => {
    //     if (!token) {
    //       setIsTokenValid(false); // If no token in URL, set validity to false
    //     }
    //   }, [token]);

    const validationSchema = Yup.object({
        newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("New password is required"),
        confirmPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Confirm password is required")
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    });

    const onSubmit = (formData) => {
        const { newPassword, confirmPassword } = formData;
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // props.resetPassword(token, newPassword); // Call the backend API with token and new password
    };

    //   if (!isTokenValid) {
    //     return <div>Invalid or expired token</div>; // Show an error message if token is invalid
    //   }

    return (
        <div>
            <Header />
            <NavBar />
            <div className={s.container}>
                <div className={s.left}>
                    <img src={ResetPasswordImg} />
                </div>
                <div className={s.right}>


                    <div className={s.formContainer}>
                        <h1>Reset Password</h1>
                        <Formik
                            initialValues={{
                                newPassword: "",
                                confirmPassword: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form className={s.formContainer}>
                                    <div>
                                        <Field
                                            type="password"
                                            name="newPassword"
                                            placeholder="Enter new password"
                                            className={s.input}
                                        />
                                        {touched.newPassword && errors.newPassword && (
                                            <div className={s.formSummaryError}>{errors.newPassword}</div>
                                        )}
                                    </div>
                                    <div>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm new password"
                                            className={s.input}
                                        />
                                        {touched.confirmPassword && errors.confirmPassword && (
                                            <div className={s.formSummaryError}>{errors.confirmPassword}</div>
                                        )}
                                    </div>
                                    <div>
                                        <button className={s.btn} type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? "Resetting..." : "Reset Password"}
                                        </button>
                                    </div>

                                    {errors.general && <div className={s.formSummaryError}>{errors.general}</div>}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            <LearnMore />
            <Footer />
        </div>
    );
};



export default connect(null, { resetPassword })(ResetPassword);
