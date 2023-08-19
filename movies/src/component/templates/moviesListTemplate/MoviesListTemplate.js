import React from "react";
import PropTypes from "prop-types";
import { MoviesListComponent } from "../../UI/organism/moviesListComponent/MoviesListComponent";
import HeaderComponent from "../../UI/organism/headerComponent/HeaderComponent";

export const MoviesListTemplate = (props) => {
  const { moviesData, setSearchValue } = props;
  return (
    <div>
      <HeaderComponent setSearchValue={setSearchValue} />
      <MoviesListComponent moviesData={moviesData} />
    </div>
  );
};
MoviesListTemplate.defaultProps = {
  moviesData: [],
  setSearchValue: () => {},
};
MoviesListTemplate.propTypes = {
  moviesData: PropTypes.array,
  setSearchValue: PropTypes.func,
};
