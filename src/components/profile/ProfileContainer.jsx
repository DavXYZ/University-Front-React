import { connect } from "react-redux";
import { authenticate } from "../../redux/reducers/authUserReducer";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
  userData: {
    id: state.auth.id,
    full_name: state.auth.full_name,
    email: state.auth.email,
    role: state.auth.role,
    phone_number: state.auth.phone_number,
    date_of_birth: state.auth.date_of_birth,
    university: state.auth.university,
    academic_degree: state.auth.academic_degree,
    academic_title: state.auth.academic_title,
    profession: state.auth.profession,
    position: state.auth.position,
    profile_image: state.auth.profile_image,
    isAuth: state.auth.isAuth,
  },
  isLoading: state.auth.isLoading,
  message: state.auth.message,
});

const mapDispatchToProps = {
  authenticate
};

const ProfileContainer = (props) => {
  return <Profile {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);