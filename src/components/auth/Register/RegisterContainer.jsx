import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from '../../../redux/reducers/authUserReducer';
import RegisterForm from './RegisterForm';

const RegisterContainer = ({ isAuth, register, role }) => {
  const onSubmit = (formData, setErrors) => {
    register(formData, setErrors);
  };

  if (isAuth) return <Navigate to="/" />;
  if (!role) return <Navigate to="/role-register" />;

  return <RegisterForm onSubmit={onSubmit} />;
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.isAuth,
  role: store.auth.role
});

export default connect(mapStateToProps, { register })(RegisterContainer);