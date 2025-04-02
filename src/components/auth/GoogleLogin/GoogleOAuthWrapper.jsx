import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginContainer from "./GoogleLoginContainer";

const GoogleAuthWrapper = () => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLoginContainer />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthWrapper;
