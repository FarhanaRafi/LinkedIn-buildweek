import { GET_MY_OWN_PROFILE, ADD_IMAGE } from "../Actions";

const initialState = {
  data: [],
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_OWN_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_IMAGE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default myProfileReducer;
