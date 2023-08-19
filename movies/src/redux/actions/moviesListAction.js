import { getMovies } from "../axios/moviesListAxios";
import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
} from "../constants/moviesListConstants";

export const moviesListAction = (searchValue) => async (dispatch) => {
  try {
    dispatch({ type: ALL_MOVIES_REQUEST });
    const moviesData = await getMovies(searchValue);
    dispatch({
      type: ALL_MOVIES_SUCCESS,
      payload: moviesData.results,
    });
  } catch (error) {
    dispatch({
      type: ALL_MOVIES_FAIL,
      payload: error.response.data.message,
    });
  }
};
