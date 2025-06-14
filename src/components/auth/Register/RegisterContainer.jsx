import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../../../redux/reducers/authUserReducer';
import RegisterForm from './RegisterForm';
import Footer from '../../common/Footer';
import NavBar from '../../common/NavBar';
import Header from '../../common/Header';

const RegisterContainer = ({ isAuth, register, role }) => {
  const navigate = useNavigate(); // ✅ Correct usage

  const onSubmit = (formData, setErrors) => {
    formData.append('role', role);
    register(formData, setErrors, navigate); // ✅ Pass navigate to the thunk
  };

  if (isAuth) return <Navigate to="/" />;
  if (!role) return <Navigate to="/role-register" />;

  return (
    <div>
      <Header />
      <NavBar />
      <RegisterForm onSubmit={onSubmit} />;
      <Footer />
    </div>
  )
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.isAuth,
  role: store.auth.role,
});

export default connect(mapStateToProps, { register })(RegisterContainer);
