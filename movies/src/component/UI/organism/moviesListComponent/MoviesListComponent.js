import React from "react";
import PropTypes from "prop-types";
import MovieCardComponent from "../../molecules/movieCardComponent/MovieCardComponent";
import "./MoviesListComponent.css";
export const MoviesListComponent = (props) => {
  const { moviesData } = props;
  return (
    <div className="moviesList">
      {moviesData?.map((movie, index) => (
        <MovieCardComponent movie={movie} key={index} />
      ))}
    </div>
  );
};
MoviesListComponent.defaultProps = {
  moviesData: [],
};
MoviesListComponent.propTypes = {
  moviesData: PropTypes.array,
};
