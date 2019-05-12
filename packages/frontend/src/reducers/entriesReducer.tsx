import initialState from './initialState';

const entriesReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ENTRIES_REQUEST_INIT':
      return { ...state, loading: true };
    case 'ENTRIES_REQUEST_SUCCESS':
      return { ...state, entries: action.entries.data.data, loading: false, success: true };
    case 'ENTRIES_REQUEST_ERROR':
      return { ...state, loading: false, error: action.error.response.data };
    default:
      return state;
  }
}

export default entriesReducer;
