// src/components/auth/GoogleProfileCompletion/GoogleProfileCompletionContainer.jsx
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../../../../redux/reducers/authUserReducer';
import GoogleProfileCompletionForm from './GoogleProfileCompletionForm';

const GoogleProfileCompletionContainer = ({ isAuth, googleData, register }) => {
  const navigate = useNavigate();

  const onSubmit = (formData, setErrors) => {
    const completeFormData = new FormData();
  
    // First add all Google-specific data
    completeFormData.append('email', googleData.email);
    completeFormData.append('full_name', googleData.full_name);
    if (googleData.profile_image) {
      completeFormData.append('profile_image', googleData.profile_image);
    }
    completeFormData.append('password', googleData.temp_password);
    completeFormData.append('confirm_password', googleData.temp_password);
    completeFormData.append('role', 'author');
    completeFormData.append('data_processing_consent', 'true');
  
    // Then add form values, skipping any fields that Google already provided
    for (let [key, value] of formData.entries()) {
      if (!completeFormData.has(key)) { // Only add if not already set
        if (value !== null && value !== undefined) {
          completeFormData.append(key, value);
        }
      }
    }
  
    register(completeFormData, setErrors, navigate);
  };
  if (isAuth) return <Navigate to="/" />;
  if (!googleData) return <Navigate to="/register" />;

  return <GoogleProfileCompletionForm onSubmit={onSubmit} />;
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.isAuth,
  googleData: store.auth.googleData
});

export default connect(mapStateToProps, { register })(GoogleProfileCompletionContainer);