import React, { useState } from "react";
import MovieCardComponent from "../../molecules/movieCardComponent/MovieCardComponent";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import "./MoviesListComponent.css";

export const MoviesListComponent = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { moviesData, setPage, totalPages } = props;
  const handleChange = (event, value) => {
    setPageNumber(value);
    setPage(value);
  };
  return (
    <div>
      <div className="moviesList">
        {moviesData?.map((movie, index) => (
          <MovieCardComponent movie={movie} key={index} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          color="secondary"
          value={pageNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
MoviesListComponent.defaultProps = {
  moviesData: [],
  setPage: () => {},
  totalPages: 1,
};
MoviesListComponent.propTypes = {
  moviesData: PropTypes.array,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};
