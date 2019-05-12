import { connect } from 'react-redux'
import {Dashboard} from "../components/user/Dashboard";
import { fetchEntries } from "../actions";

const mapStateToProps = state => {
  return {
    entries: state.entriesReducer.entries
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEntries: user => dispatch(fetchEntries(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
