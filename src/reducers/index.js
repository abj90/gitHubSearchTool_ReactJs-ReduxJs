const initState = {
  repos: [],
  userData: {},
  orgs: [],
  loading: false,
  error: ""
};

export default (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_USER_REPOS":
      return { ...state, repos: action.payload };
    case "FETCH_USER_DATA_SUCCESS":
      return {
        ...state,
        userData: action.user,
        orgs: action.orgs,
        loading: false,
        error: ""
      };
    case "FETCH_USER_DATA_ERROR":
      return {
        ...initState,
        error: action.payload
      };
    default:
      return state;
  }
};
