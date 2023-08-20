import React from "react";
import DetailsComponent from "../../UI/atoms/detailsComponent/DetailsComponent";
import HomeComponent from "../../UI/atoms/homeComponent/HomeComponent";
import MovieDetailsComponent from "../../UI/organism/movieDetailsComponent/MovieDetailsComponent";
import "./MovieDetailsTemplate.css";
import PropTypes from "prop-types";

const MovieDetailsTemplate = (props) => {
  const { movie } = props;
  return (
    <div>
      <div className="headerWithDetails">
        <div>
          <DetailsComponent />
        </div>
        <div className="homeIcon">
          <HomeComponent />
        </div>
      </div>
      <MovieDetailsComponent movie={movie} />
    </div>
  );
};
MovieDetailsTemplate.propTypes = {
  movie: PropTypes.object,
};
MovieDetailsTemplate.defaultProps = {
  movie: {},
};
export default MovieDetailsTemplate;
