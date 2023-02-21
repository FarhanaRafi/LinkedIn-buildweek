import { GET_EXPERIENCES } from "../Actions";

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
    default:
      return state;
  }
};
export default experienceReducer;
