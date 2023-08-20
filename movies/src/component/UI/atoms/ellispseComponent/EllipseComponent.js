import React from "react";
import PropTypes from "prop-types";
import "./EllipseComponent.css";

const EllipseComponent = (props) => {
  const { info } = props;
  return (
    <div>
      <p className="info">{info}</p>
    </div>
  );
};
EllipseComponent.propTypes = {
  info: PropTypes.string,
};
EllipseComponent.defaultProps = {
  info: "",
};

export default EllipseComponent;
