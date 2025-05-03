import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { resetPassword } from "../../../redux/reducers/authUserReducer";
import s from "./ResetPassword.module.css";
import Header from "../../common/Header";
import NavBar from "../../common/NavBar";
import LearnMore from "../../common/LearnMore";
import Footer from "../../common/Footer";
import ResetPasswordImg from '../../assets/reset-password.png';

const ResetPassword = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const [isTokenValid, setIsTokenValid] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!token) {
            setIsTokenValid(false);
        }
    }, [token]);

    const validationSchema = Yup.object({
        newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("New password is required"),
        confirmPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Confirm password is required")
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    });

    const onSubmit = async (formData, { setSubmitting, setErrors }) => {
        const { newPassword, confirmPassword } = formData;
        
        if (newPassword !== confirmPassword) {
            setErrors({ confirmPassword: "Passwords must match" });
            setSubmitting(false);
            return;
        }

        try {
            await props.resetPassword(token, newPassword);
            setIsSuccess(true);
            // Redirect to home page after 3 seconds
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            setErrors({ general: error.message || "Password reset failed" });
        } finally {
            setSubmitting(false);
        }
    };

    if (!isTokenValid) {
        return <div>Invalid or expired token</div>;
    }

    if (isSuccess) {
        return (
            <div>
                <Header />
                <NavBar />
                <div className={s.container}>
                    <div className={s.successMessage}>
                        <h1>Password Reset Successful!</h1>
                        <p>Your password has been successfully updated.</p>
                        <p>You will be redirected to the home page shortly...</p>
                    </div>
                </div>
                <LearnMore />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <NavBar />
            <div className={s.container}>
                <div className={s.left}>
                    <img src={ResetPasswordImg} alt="Reset password" />
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