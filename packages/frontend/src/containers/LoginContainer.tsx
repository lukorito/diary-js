import { connect } from 'react-redux'
import { loginUser } from "../actions/";
import Login from "../components/homepage/Login";

const mapStateToProps = state => {
  return {
    success: state.authReducer.success,
    errors: state.authReducer.error.data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
