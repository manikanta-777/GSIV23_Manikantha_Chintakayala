import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoviesListTemplate } from "../../templates/moviesListTemplate/MoviesListTemplate";
import { moviesListAction } from "../../../redux/actions/moviesListAction";

export const MoviesListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { moviesData, totalPages } = useSelector((state) => state.moviesList);
  useEffect(() => {
    dispatch(moviesListAction(searchValue, page));
  }, [dispatch, searchValue, page]);
  return (
    <div>
      <MoviesListTemplate
        moviesData={moviesData}
        setSearchValue={setSearchValue}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};
