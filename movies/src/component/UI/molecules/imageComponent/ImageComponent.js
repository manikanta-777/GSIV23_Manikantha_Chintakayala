import React from "react";
import PropTypes from "prop-types";
import "./ImageComponent.css";
const ImageComponent = (props) => {
  const { movie } = props;
  return (
    <div className="movieImage">
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};
ImageComponent.propTypes = {
  movie: PropTypes.object,
};
ImageComponent.defaultProps = {
  movie: {},
};

export default ImageComponent;
