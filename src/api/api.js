// src/api.js

import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

export const authApi = {
    async refreshToken() {
        try {
            const response = await instance.post('auth/refresh', {}, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error refreshing token:", error);
            throw new Error("Session expired. Please log in again.");
        }
    },

    async authentication() {
        try {
            const response = await instance.get('auth/me', { withCredentials: true });
            return response.data;
        } catch (error) {
            if (error.response?.status === 401) {
                console.log("Access token expired, attempting to refresh...");
                try {
                    await this.refreshToken();
                    return await this.authentication();
                } catch (refreshError) {
                    console.error("Error refreshing token:", refreshError);
                    if (refreshError.response?.status === 403) {
                        console.error("Refresh token invalid, logging out user...");
                        window.location.href = '/login';
                    }
                    throw refreshError;
                }
            } else {
                console.error("Authentication error:", error);
                throw error;
            }
        }
    },

    async login(emailOrUsername, password) {
        try {
            const response = await instance.post('auth/login', { emailOrUsername, password }, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    },

    async register(firstName, lastName, email, username, password) {
        try {
            const response = await instance.post('auth/register', { firstName, lastName, email, username, password });
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    },

    async logout() {
        try {
            const response = await instance.post('auth/logout', {}, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Logout error:", error);
            window.location.href = '/login';  // Redirect to login page on error
        }
    },    

    async forgetPassword(email) {
        try {
            const response = await instance.post("auth/forgot-password", { email });
            return response.data;
        } catch (error) {
            console.error("Error during password reset request:", error);
            throw error;
        }
    },

    async resetPassword(token, newPassword) {
        try {
            const response = await instance.post("/auth/reset-password", { token, newPassword });
            return response.data;
        } catch (error) {
            console.error("Reset password error:", error);
            throw error;
        }
    },

    async googleLogin() {
        try {
            const response = await instance.get('/auth/callback/success', { withCredentials: true });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Google login failed');
        }
    }
};

export const googleAuthApi = {
    async googleAuth(code) {
        try {
            const response = await instance.get(`/auth/google?code=${code}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Google authentication error:", error);
            throw error;
        }
    }
};