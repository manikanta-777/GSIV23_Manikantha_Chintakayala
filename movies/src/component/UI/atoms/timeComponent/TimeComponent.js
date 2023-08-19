import React from "react";
import PropTypes from "prop-types";
const TimeComponent = (props) => {
  const { time } = props;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return (
    <div>
      {hours}h {minutes}m
    </div>
  );
};
TimeComponent.propTypes = {
  time: PropTypes.number,
};
TimeComponent.defaultProps = {
  time: 0,
};
export default TimeComponent;
