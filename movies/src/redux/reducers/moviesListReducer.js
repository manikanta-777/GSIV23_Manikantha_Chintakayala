import { ALL_MOVIES_FAIL, ALL_MOVIES_REQUEST, ALL_MOVIES_SUCCESS } from "../constants/moviesListConstants";

export const moviesListReducer = (state = { moviesData: [] }, action) => {
  switch (action.type) {
    case ALL_MOVIES_REQUEST:
      return {
        loading: true,
        moviesData: [],
      };
    case ALL_MOVIES_SUCCESS:
      return {
        moviesData:action.payload
      };
    case ALL_MOVIES_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
