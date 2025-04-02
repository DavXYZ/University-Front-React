import { authApi } from "../../api/api";
import { googleAuthApi } from "../../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";
const SET_USER_ROLE = "SET_USER_ROLE"

const initialState = {
    email: null,
    full_name:null,
    isAuth: false,
    role: "",
    message: "",
};

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return { ...state, ...action.data };
        case SET_AUTH_ERROR:
            return { ...state, message: action.errorMessage };
        case SET_USER_ROLE:
            return {...state, role:action.role}
        default:
            return state;
    }
};

export const setAuthUserData = (email,full_name, role, message, isAuth) => ({
    type: SET_AUTH_USER,
    data: { email,full_name, role, message, isAuth }
});

export const setAuthError = (errorMessage) => ({
    type: SET_AUTH_ERROR,
    errorMessage
});

export const setUserRole = (role) => ({
    type: SET_USER_ROLE,
    role
})

/*thunks*/

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
            const { email,full_name, role, message } = res.data;
            dispatch(setAuthUserData(email,full_name, role, message,true));
        } else {
            dispatch(setAuthError("Authentication failed"));
        }
    } catch (error) {
        console.error("Authentication failed:", error);

        // If token expired, try refreshing
        if (error.response?.status === 401) {
            try {
                await authApi.refreshToken();
                dispatch(authenticate()); // Retry authentication
            } catch (refreshError) {
                console.error("Refresh token failed:", refreshError);
                dispatch(logout()); // Logout if refresh fails
            }
        } else {
            dispatch(setAuthError("Authentication failed"));
        }
    }
};

// Updated login action to work with Formik
// src/redux/reducers/authAdminReducer.js

export const login = (email, password, setErrors) => async (dispatch) => {
    try {
        const res = await authApi.login(email, password);
        if (res.resultCode === 0) {
            dispatch(authenticate()); // Re-authenticate after login
        } else {
            const errorMessage = res.messages?.[0] || "Login failed";
            setErrors({ email: errorMessage });
            dispatch(setAuthError(errorMessage));
        }
    } catch (error) {
        console.error("Login failed:", error);
        setErrors({ email: "An error occurred during login" });
        dispatch(setAuthError("An error occurred during login"));
    }
};

export const register = (formData, setErrors, navigate) => (dispatch) => {
    const { full_name, email, password,confirm_password } = formData;
    authApi.register( full_name, email, password,confirm_password)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthError(""));  // Clear errors on successful registration
                dispatch(setAuthUserData(null, "Registration successful. Please log in.", false));
                navigate('/login');  // Redirect to login page after successful registration
            } else {
                const errorMessage = res.message || "Registration failed";
                setErrors({ email: errorMessage });  // Formik error handling
                dispatch(setAuthError(errorMessage));
            }
        })
        .catch((error) => {
            console.error("Registration failed:", error);
            setErrors({ email: error.response?.data?.message || 'Registration failed' });  // Formik error handling
            dispatch(setAuthError(error.response?.data?.message || 'Registration failed'));
        });
};


export const logout = () => async (dispatch) => {
    try {
        await authApi.logout();
        dispatch(setAuthUserData(null, null,null, "", false));
    } catch (error) {
        console.error("Logout failed:", error);
    }
};

export const forgetPassword = (email) => (dispatch) => {
    authApi.forgetPassword(email)
        .then((res) => {
            if (res.resultCode === 0) {
                alert("Reset link sent to your email.");
            } else {
                dispatch(setAuthError(res.message || "Error sending reset link"));
            }
        })
        .catch((error) => {
            console.error("Forget password error:", error);
            dispatch(setAuthError("Error sending reset link"));
        });
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

// Thunk to handle Google login
export const googleLoginThunk = (authCode) => async (dispatch) => {
    try {
        // Make API call to exchange the auth code for tokens
        const res = await googleAuthApi.googleAuth(authCode);
        if (res.resultCode === 0) {
            dispatch(authenticate()); // Re-authenticate after login
        } else {
            const errorMessage = res.messages?.[0] || "Login failed";
            dispatch(setAuthError(errorMessage));
        }
    } catch (error) {
        console.error("Error during Google login:", error);
    }
};

export default authUserReducer;