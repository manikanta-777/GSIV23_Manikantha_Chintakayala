import React from "react";
// import HeaderComponent from "../../UI/organism/headerComponent/HeaderComponent";
import PropTypes from "prop-types";
import MovieDetailsComponent from "../../UI/organism/movieDetailsComponent/MovieDetailsComponent";
import HomeComponent from "../../UI/atoms/homeComponent/HomeComponent";
import DetailsComponent from "../../UI/atoms/detailsComponent/DetailsComponent";
import "./MovieDetailsTemplate.css";
const MovieDetailsTemplate = (props) => {
  const { movie } = props;
  return (
    <div>
      {/* <HeaderComponent /> */}
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
