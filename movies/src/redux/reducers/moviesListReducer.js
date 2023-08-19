import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
} from "../constants/moviesListConstants";

export const moviesListReducer = (
  state = { moviesData: [], totalPages: 1 },
  action
) => {
  switch (action.type) {
    case ALL_MOVIES_REQUEST:
      return {
        loading: true,
        moviesData: [],
      };
    case ALL_MOVIES_SUCCESS:
      return {
        moviesData: action.payload.results,
        totalPages: action.payload.total_pages,
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
