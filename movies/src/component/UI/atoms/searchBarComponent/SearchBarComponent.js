import React, { useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBarComponent.css";

const SearchBarComponent = (props) => {
  const { setSearchValue } = props;
  const [searchInput, setSearchInput] = useState("");
  const heandleSearch = () => {
    setSearchValue(searchInput.trim());
  };
  const textFieldStyle = {
    width: 300,

    "@media (min-width:850px)": {
      width: 600,
    },
    "@media (min-width:1080px)": {
      width: 800,
    },
  };
  const iconStyle = {
    fontSize: 10,
    "@media (min-width:850px)": {
      fontSize: 20,
    },
    "@media (min-width:1080px)": {
      fontSize: 30,
    },
  };
  return (
    <div maxWidth="md" className="searchInputs">
      <div>
        <TextField
          type="search"
          id="search"
          placeholder="Search"
          sx={textFieldStyle}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="searchIcon">
        <SearchIcon sx={iconStyle} onClick={() => heandleSearch()} />
      </div>
    </div>
  );
};

SearchBarComponent.propTypes = {
  setSearchValue: PropTypes.func,
};
SearchBarComponent.defaultProps = {
  setSearchValue: () => {},
};

export default SearchBarComponent;
