import { connect } from 'react-redux'
import Register from "../components/homepage/Register";
import { registerUser } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUser(user))
  }
};

export default connect(null, mapDispatchToProps)(Register);
