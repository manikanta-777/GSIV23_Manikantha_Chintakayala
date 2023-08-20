import React from "react";
import PropTypes from "prop-types";
import TimeComponent from "../../atoms/timeComponent/TimeComponent";
import "./MovieDataComponent.css";

const MovieDataComponent = (props) => {
  const { movie } = props;

  return (
    <div className="box">
      <div className="titleVote">
        <span>{movie.title} </span>
        <span className="voteAvareage">({movie.vote_average})</span>
      </div>
      <div className="yearLength">
        <span>{movie.release_date} </span>
        <span> | </span>{" "}
        <span>
          <TimeComponent time={movie.runtime} />
        </span>
      </div>

      <p className="overview">
        <span className="Description">Description: </span>{" "}
        <span>{movie.overview}</span>
      </p>
    </div>
  );
};
MovieDataComponent.propTypes = {
  movie: PropTypes.object,
};
MovieDataComponent.defaultProps = {
  movie: {},
};
export default MovieDataComponent;
