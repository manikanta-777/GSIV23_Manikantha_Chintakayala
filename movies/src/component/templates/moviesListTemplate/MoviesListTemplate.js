import React from "react";
import PropTypes from "prop-types";
import { MoviesListComponent } from "../../UI/organism/moviesListComponent/MoviesListComponent";

export const MoviesListTemplate = (props) => {
  const { moviesData } = props;
  return (
    <div>
      <MoviesListComponent moviesData={moviesData} />
    </div>
  );
};
MoviesListTemplate.defaultProps = {
  moviesData: [],
};
MoviesListTemplate.propTypes = {
  moviesData: PropTypes.array,
};
