import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoviesListTemplate } from "../../templates/moviesListTemplate/MoviesListTemplate";
import { moviesListAction } from "../../../redux/actions/moviesListAction";

export const MoviesListPage = () => {
  const dispatch = useDispatch();
  const { moviesData } = useSelector((state) => state.moviesList);
  useEffect(() => {
    dispatch(moviesListAction());
  }, [dispatch]);
  return (
    <div>
      <MoviesListTemplate moviesData={moviesData} />
    </div>
  );
};
