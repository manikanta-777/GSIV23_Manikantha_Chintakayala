import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCardComponent.css";
import EllipseComponent from "../../atoms/ellispseComponent/EllipseComponent";

const MovieCardComponent = (props) => {
  const { movie } = props;

  return (
    <Link className="card" to={`/movie/${movie.id}`}>
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="titleRow">
        <div className="title">
          <EllipseComponent info={movie.title} />
        </div>
        <div>({movie.vote_average})</div>
      </div>
      <div className="overView">
        <EllipseComponent info={movie.overview} />
      </div>
    </Link>
  );
};
MovieCardComponent.defaultProps = {
  movie: {},
};
MovieCardComponent.propTypes = {
  movie: PropTypes.object,
};

export default MovieCardComponent;
