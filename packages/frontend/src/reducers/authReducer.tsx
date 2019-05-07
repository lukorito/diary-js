import initialState from './initialState';

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_INIT':
      return {...state, loading: true};
    case 'REGISTER_USER_SUCCESS':
      return { ...state, user: action.newUser, loading: false};
    case 'REGISTER_USER_ERROR':
      return { ...state, loading: false, error: action.error.response.data};
    case 'LOGIN_USER_INIT':
      return {...state, loading: true};
    case 'LOGIN_USER_SUCCESS':
      return { ...state, user: action.newUser, loading: false, success: true};
    case 'LOGIN_USER_ERROR':
      return { ...state, loading: false, error: action.error.response.data};
    default:
      return state;
  }
};

export default authReducer;
