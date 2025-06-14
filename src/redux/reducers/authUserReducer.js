import { authApi } from "../../api/api";
import { googleAuthApi } from "../../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";
const SET_USER_ROLE = "SET_USER_ROLE";
const CLEAR_AUTH_ERROR = "CLEAR_AUTH_ERROR";
const SET_VERIFICATION_CODE_SENDED = "SET_VERIFICATION_CODE_SENDED";

const SET_GOOGLE_DATA = "SET_GOOGLE_DATA";
const SET_TEMP_PROFILE_ID = "SET_TEMP_PROFILE_ID";
const CLEAR_GOOGLE_SIGNUP = "CLEAR_GOOGLE_SIGNUP";

const initialState = {
    id: null,
    email: null,
    full_name: null,
    isAuth: false,
    role: "",
    message: "",
    is_activated: false,
    gender: null,
    phone_number: null,
    profile_image: null,
    social_link: null,
    date_of_birth: null,
    country: null,
    city: null,
    published_articles: null,
    thematic_focus_of_articles: null,
    past_conferences_or_meetings: null,
    membership_in_scientific_team: null,
    university: null,
    academic_degree: null,
    academic_title: null,
    profession: null,
    position: null,
    level_of_education: null,
    data_processing_consent: false,
    isLoading: false,
    // Add these new fields
    googleData: null,
    isGoogleSignup: false
};

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return { ...state, ...action.payload, isAuth: true };
        case SET_AUTH_ERROR:
            return { ...state, message: action.errorMessage, isLoading: false };
        case SET_USER_ROLE:
            return { ...state, role: action.role };
        case CLEAR_AUTH_ERROR:
            return { ...state, message: "" };
        case SET_GOOGLE_DATA:
            return {
                ...state,
                googleData: action.payload,
                isGoogleSignup: true
            };
        case SET_TEMP_PROFILE_ID:
            return {
                ...state,
                tempProfileId: action.payload
            };
        case CLEAR_GOOGLE_SIGNUP:
            return {
                ...state,
                googleData: null,
                tempProfileId: null,
                isGoogleSignup: false
            };
            case SET_VERIFICATION_CODE_SENDED:
                return {...state, isSendedCodeInEmail:action.value}
        default:
            return state;
    }
};

// Action Creators
export const setVerificationCodeSended = (value) => ({
    type: SET_VERIFICATION_CODE_SENDED,
    value
})

export const setAuthUserData = (userData) => ({
    type: SET_AUTH_USER,
    payload: userData
});

export const setAuthError = (errorMessage) => ({
    type: SET_AUTH_ERROR,
    errorMessage
});

export const setUserRole = (role) => ({
    type: SET_USER_ROLE,
    role
});

export const clearAuthError = () => ({
    type: CLEAR_AUTH_ERROR
});

export const setGoogleData = (googleData) => ({
    type: SET_GOOGLE_DATA,
    payload: googleData
});

export const setTempProfileId = (tempProfileId) => ({
    type: SET_TEMP_PROFILE_ID,
    payload: tempProfileId
});

export const clearGoogleSignup = () => ({
    type: CLEAR_GOOGLE_SIGNUP
});

// Thunks

export const getUserRole = (role) => (dispatch) => {
    try {
        dispatch(setUserRole(role));
    } catch (error) {
        console.error(error);
    }
}

export const authenticate = () => async (dispatch) => {
    try {
        const res = await authApi.authentication();
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(res.data));
        } else {
            dispatch(setAuthError(res.message || "Authentication failed"));
        }
    } catch (error) {
        console.error("Authentication failed:", error);

        if (error.response?.status === 401) {
            try {
                await authApi.refreshToken();
                dispatch(authenticate());
            } catch (refreshError) {
                console.error("Refresh token failed:", refreshError);
                dispatch(logout());
            }
        } else {
            dispatch(setAuthError("Network error during authentication"));
        }
    }
};

export const login = (email, password, remember_me, setErrors) => async (dispatch) => {
    try {
        const res = await authApi.login(email, password, remember_me);
        if (res.resultCode === 0) {
            dispatch(authenticate());
        } else {
            const errorMessage = res.message || "Login failed";
            if (setErrors) setErrors({ email: errorMessage });
            dispatch(setAuthError(errorMessage));
        }
    } catch (error) {
        console.error("Login failed:", error);
        const errorMessage = error.response?.data?.message || "An error occurred during login";
        if (setErrors) setErrors({ email: errorMessage });
        dispatch(setAuthError(errorMessage));
    }
};

export const register = (formData, setErrors, navigate) => async (dispatch) => {
    try {
        const res = await authApi.register(formData);
        if (res.resultCode === 0) {
            const role = formData.get('role');
            dispatch(setAuthUserData({
                email: formData.get('email'),
                role,
                message: "Registration successful. Please log in.",
                isAuth: false
            }));
            if (navigate) navigate('/login');
        } else {
            const errorMessage = res.message || "Registration failed";
            if (setErrors) setErrors({ email: errorMessage });
            dispatch(setAuthError(errorMessage));
        }
    } catch (error) {
        console.error("Registration failed:", error);
        const errorMessage = error.response?.data?.message || 'Registration failed';
        if (setErrors) setErrors({ email: errorMessage });
        dispatch(setAuthError(errorMessage));
    }
};

export const logout = () => async (dispatch) => {
    try {
        await authApi.logout();
        dispatch(setAuthUserData({
            ...initialState,
            message: "Logged out successfully"
        }));
    } catch (error) {
        console.error("Logout failed:", error);
        dispatch(setAuthError("Logout failed"));
    }
};

export const forgetPassword = (email) => (dispatch) => {
    authApi.forgetPassword(email)
        .then((res) => {
            debugger
            if (res.resultCode === 0) {
                dispatch(setVerificationCodeSended(true));
                alert("Verification code sent to your email.");
            } else {
                dispatch(setAuthError(res.message || "Error sending reset link"));
            }
        })
        .catch((error) => {
            console.error("Forget password error:", error);
            dispatch(setAuthError("Error sending reset link"));
        });
};

export const verifyCodePassword = ({ verificationCode, email }) => async (dispatch) => {
    try {
      const response = await authApi.verifyCodePassword({ 
        email, 
        verificationCode // Changed from 'code' to 'verificationCode'
      });
      if (response.resultCode === 0) {
        dispatch(setVerificationCodeSended(false));
        alert("Reset link sent to your email.");
      } else {
        dispatch(setAuthError(response.message || "Error verifying code"));
        throw new Error(response.message || "Error verifying code");
      }
    } catch (error) {
      console.error("Verify code error:", error);
      throw error;
    }
};
  

export const resetPassword = (token, newPassword) => (dispatch) => {
    authApi.resetPassword(token, newPassword)
        .then((res) => {
            if (res.resultCode === 0) {
                alert("Password reset successfully.");
            } else {
                dispatch(setAuthError(res.message || "Error resetting password"));
            }
        })
        .catch((error) => {
            console.error("Reset password error:", error);
            dispatch(setAuthError("Error resetting password"));
        });
};

// export const googleLoginThunk = (authCode) => async (dispatch) => {
//     try {
//         const res = await googleAuthApi.googleAuth(authCode);
//         if (res.resultCode === 0) {
//             dispatch(authenticate());
//         } else {
//             dispatch(setAuthError(res.message || "Google login failed"));
//         }
//     } catch (error) {
//         console.error("Error during Google login:", error);
//         dispatch(setAuthError("Google authentication failed"));
//     }
// };
export const googleLoginThunk = (authCode, navigate) => async (dispatch) => {
    
    try {
        
        dispatch({ type: 'SET_LOADING', payload: true });
        const res = await googleAuthApi.googleAuth(authCode);

        if (res.resultCode === 0) {
            
            // Existing user - authenticate normally
            dispatch(authenticate());
            navigate('/');
        } else if (res.resultCode === 1) {
            // New user - store Google data for profile completion
            dispatch(setGoogleData(res.googleData));
            navigate('/complete-profile');
        } else {
            dispatch(setAuthError(res.message || "Google login failed"));
        }
    } catch (error) {
        console.error("Error during Google login:", error);
        dispatch(setAuthError("Google authentication failed"));
    } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
    }
};

export default authUserReducer;