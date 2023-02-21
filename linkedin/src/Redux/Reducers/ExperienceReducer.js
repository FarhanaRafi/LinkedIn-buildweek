import { GET_EXPERIENCES, PUT_EXPERIENCE } from "../Actions";

const initialState = {
  experiences: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };
    case PUT_EXPERIENCE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default experienceReducer;
