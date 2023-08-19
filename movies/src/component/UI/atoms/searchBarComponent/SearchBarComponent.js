import React, { useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBarComponent.css";

const SearchBarComponent = (props) => {
  const { setSearchValue } = props;
  const [searchInput, setSearchInput] = useState("");
  const heandeleSearch = () => {
    setSearchValue(searchInput);
  };
  console.log("searcxh", searchInput);
  return (
    <div maxWidth="md" sx={{ mt: 20 }} className="searchInputs">
      <div>
        <TextField
          type="search"
          id="search"
          placeholder="Search"
          sx={{ width: 800 }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="searchIcon">
        <SearchIcon sx={{ fontSize: 30 }} onClick={() => heandeleSearch()} />
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
