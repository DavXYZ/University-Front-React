import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { connect } from "react-redux";

import GoogleLogin from "./GoogleLogin";
import { googleLoginThunk } from "../../../redux/reducers/authUserReducer";

const GoogleLoginContainer = ({ googleLoginThunk }) => {
    const responseGoogle = async (authResult) => {
        if (authResult['code']) {
            // Dispatch the thunk with the auth code
            await googleLoginThunk(authResult['code']);
        }
        console.log(authResult);
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code',
    });

    return <GoogleLogin googleLogin={googleLogin} />;
};

const mapDispatchToProps = {
    googleLoginThunk, // Map the thunk as a prop
};

export default connect(null, mapDispatchToProps)(GoogleLoginContainer);

