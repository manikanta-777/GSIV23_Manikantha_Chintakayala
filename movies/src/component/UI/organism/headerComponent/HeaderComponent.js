import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBarComponent from "../../atoms/searchBarComponent/SearchBarComponent";
import "./HeaderComponent.css";
const homeStyle = {
  fontSize: 35,
  "@media (min-width:850px)": {
    fontSize: 60,
  },
  "@media (min-width:1080px)": {
    fontSize: 70,
  },
};
const HeaderComponent = (props) => {
  const { setSearchValue } = props;
  return (
    <div className="header">
      <div>
        <SearchBarComponent setSearchValue={setSearchValue} />
      </div>
      <Link to={"/"}>
        <HomeIcon sx={homeStyle} />
      </Link>
    </div>
  );
};
HeaderComponent.propTypes = {
  setSearchValue: PropTypes.func,
};
HeaderComponent.defaultProps = {
  setSearchValue: () => {},
};

export default HeaderComponent;
