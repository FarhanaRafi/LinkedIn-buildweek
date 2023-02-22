import { ADD_POST, GET_POSTS } from "../Actions";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    // case PUT_EXPERIENCE:
    //   return {
    //     ...state,
    //   };
    // case DELETE_EXPERIENCE:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
export default postReducer;
