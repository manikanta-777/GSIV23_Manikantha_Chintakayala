import React from "react";
import PropTypes from "prop-types";
import { MoviesListComponent } from "../../UI/organism/moviesListComponent/MoviesListComponent";
import HeaderComponent from "../../UI/organism/headerComponent/HeaderComponent";

export const MoviesListTemplate = (props) => {
  const { moviesData, setSearchValue, setPage, totalPages } = props;
  return (
    <div>
      <HeaderComponent setSearchValue={setSearchValue} />
      <MoviesListComponent
        moviesData={moviesData}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};
MoviesListTemplate.defaultProps = {
  moviesData: [],
  setSearchValue: () => {},
  setPage: () => {},
  totalPages: 1,
};
MoviesListTemplate.propTypes = {
  moviesData: PropTypes.array,
  setSearchValue: PropTypes.func,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};
