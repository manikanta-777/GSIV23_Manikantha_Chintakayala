import React from "react";
import PropTypes from "prop-types";
import HomeComponent from "../../UI/atoms/homeComponent/HomeComponent";
import { MoviesListComponent } from "../../UI/organism/moviesListComponent/MoviesListComponent";
import SearchBarComponent from "../../UI/atoms/searchBarComponent/SearchBarComponent";
import "./MoviesListTemplate.css";

export const MoviesListTemplate = (props) => {
  const { moviesData, setSearchValue, setPage, totalPages } = props;
  return (
    <div>
      <div className="header">
        <div>
          <SearchBarComponent setSearchValue={setSearchValue} />
        </div>
        <div>
          <HomeComponent />
        </div>
      </div>
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
