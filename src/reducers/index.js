const initState = {
  repos: [],
  userData: {},
  orgs: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER_REPOS":
      return { ...state, repos: action.payload };
    case "FETCH_USER_DATA":
      return { ...state, userData: action.user, orgs: action.orgs };
    default:
      return state;
  }
};
