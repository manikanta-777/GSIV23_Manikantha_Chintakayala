import React from "react";
import ImageComponent from "../../molecules/imageComponent/ImageComponent";
import MovieDataComponent from "../../molecules/movieDataComponent/MovieDataComponent";
import PropTypes from "prop-types";
import "./MovieDetailsComponent.css";

const MovieDetailsComponent = (props) => {
  const { movie } = props;
  return (
    <div className="movieDetails">
      <ImageComponent movie={movie} />
      <MovieDataComponent movie={movie} />
    </div>
  );
};
MovieDetailsComponent.propTypes = {
  movie: PropTypes.object,
};
MovieDetailsComponent.defaultProps = {
  movie: {},
};
export default MovieDetailsComponent;
