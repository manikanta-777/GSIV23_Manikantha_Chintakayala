import { getMovieDetails } from "../axios/movieDetailsAxios";
import {
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
} from "../constants/movieDetailsConstants";

export const movieDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });
    const movieDetails = await getMovieDetails(id);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: movieDetails,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.response.movieDetails.message,
    });
  }
};
