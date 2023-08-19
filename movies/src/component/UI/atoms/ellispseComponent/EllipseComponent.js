import React from "react";
import "./EllipseComponent.css";
import PropTypes from "prop-types";
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
