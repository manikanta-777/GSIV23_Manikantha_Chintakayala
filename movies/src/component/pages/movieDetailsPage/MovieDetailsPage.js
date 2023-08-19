import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { movieDetailsAction } from "../../../redux/actions/movieDetailsAction";
import MovieDetailsTemplate from "../../templates/movieDetailsTemplate/MovieDetailsTemplate";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetails);
  console.log("movieDetails", movie);

  useEffect(() => {
    dispatch(movieDetailsAction(id));
  }, [dispatch, id]);
  return (
    <div>
      <MovieDetailsTemplate movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
