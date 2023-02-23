import { ADD_IMAGE } from "../Actions";

const initialState = {
  data: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default imageReducer;
