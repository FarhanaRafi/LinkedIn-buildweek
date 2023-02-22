import { GET_SELECTED_POST } from "../Actions";

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
    default:
      return state;
  }
};
export default selectedPostReducer;
