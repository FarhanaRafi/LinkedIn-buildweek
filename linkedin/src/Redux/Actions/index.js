export const GET_MY_OWN_PROFILE = "GET_MY_OWN_PROFILE";

export const getMyProfileAsync = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me"
      );

      if (res.ok) {
        let fetchProfile = await res.json();
        console.log(fetchProfile);
        dispatch({
          type: GET_MY_OWN_PROFILE,
          payload: fetchProfile,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
