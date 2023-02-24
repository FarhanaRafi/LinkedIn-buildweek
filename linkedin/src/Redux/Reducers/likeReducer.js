import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITE } from "../Actions";

const initialState = {
  // favorites: {
  content: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,

        content: [
          ...state.content.slice(0, action.payload),
          ...state.content.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export default likeReducer;
