import { getRepos, getUserData } from "../api/github";

export const fetchUserRepos = userName => {
  return async function(dispatch) {
    const result = await getRepos(userName);

    dispatch({
      type: "FETCH_USER_REPOS",
      payload: result
    });
  };
};

export const fetchUserData = userName => {
  return async function(dispatch) {
    dispatch({
      type: "LOADING"
    });

    const result = await getUserData(userName);
    if (result.message) {
      dispatch({
        type: "FETCH_USER_DATA_ERROR",
        payload: result.message
      });
    } else {
      const { user, orgs } = result;
      dispatch({
        type: "FETCH_USER_DATA_SUCCESS",
        user,
        orgs
      });
    }
  };
};
