import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoviesListTemplate } from "../../templates/moviesListTemplate/MoviesListTemplate";
import { moviesListAction } from "../../../redux/actions/moviesListAction";

export const MoviesListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log("searchvalue:", searchValue);
  const dispatch = useDispatch();
  const { moviesData } = useSelector((state) => state.moviesList);
  useEffect(() => {
    dispatch(moviesListAction(searchValue));
  }, [dispatch, searchValue]);
  return (
    <div>
      <MoviesListTemplate
        moviesData={moviesData}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};
