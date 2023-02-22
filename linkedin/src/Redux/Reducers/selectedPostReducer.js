import { GET_SELECTED_POST, UPDATE_POST } from "../Actions";

const initialState = {
  selected: [],
};

const selectedPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_POST:
      return {
        ...state,
        selected: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default selectedPostReducer;
