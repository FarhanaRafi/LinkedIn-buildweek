export const GET_MY_OWN_PROFILE = "GET_MY_OWN_PROFILE";
export const GET_PROFILES = "GET_PROFILES"
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNDZlNDgzODFmYzAwMTNmZmZhZDkiLCJpYXQiOjE2NzY4ODg0NzAsImV4cCI6MTY3ODA5ODA3MH0.AYIsvNXcD-Xnx3yf_2zgpkcNNyuB19GZwp9jMm6Y6Jc",
  },
};


export const getMyProfileAsync = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
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


export const getProfilesAsync = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {

          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmI1ZDgzODFmYzAwMTNmZmZhYzkiLCJpYXQiOjE2NzY4ODIyOTcsImV4cCI6MTY3ODA5MTg5N30.tXTRKsrzYRhp7tnq3X624lNXoM5ANXqqLAIEIxKpuFU'
          }

        }
      );

      if (res.ok) {
        let fetchedProfiles = await res.json();
        console.log(fetchedProfiles);
        dispatch({
          type: GET_PROFILES,
          payload: fetchedProfiles,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

