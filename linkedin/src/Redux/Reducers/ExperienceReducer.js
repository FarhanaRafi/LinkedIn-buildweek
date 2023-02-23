import {
  DELETE_EXPERIENCE,
  GET_EXPERIENCES,
  POST_IMAGE_EXPERIENCE,
  PUT_EXPERIENCE,
} from "../Actions";

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
    case DELETE_EXPERIENCE:
      return {
        ...state,
      };
    case POST_IMAGE_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };

    default:
      return state;
  }
};
export default experienceReducer;
