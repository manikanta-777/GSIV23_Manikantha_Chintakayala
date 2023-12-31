import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import "./SearchBarComponent.css";

const textFieldStyle = {
  width: 250,

  "@media (min-width:850px)": {
    width: 450,
  },
  "@media (min-width:1080px)": {
    width: 600,
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

const SearchBarComponent = (props) => {
  const { setSearchValue } = props;
  const [searchInput, setSearchInput] = useState("");
  const heandleSearch = () => {
    setSearchValue(searchInput.trim());
  };

  return (
    <div maxWidth="md" className="searchInputs">
      <div className="searchIcon">
        <SearchIcon sx={iconStyle} onClick={() => heandleSearch()} />
      </div>
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
