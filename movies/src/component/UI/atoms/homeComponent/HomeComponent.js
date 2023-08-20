import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./HomeComponent.css";

const homeStyle = {
  fontSize: 30,
  "@media (min-width:850px)": {
    fontSize: 50,
  },
  "@media (min-width:1080px)": {
    fontSize: 60,
  },
};

const HomeComponent = () => {
  return (
    <Link to={"/"} className="homeIcon">
      <HomeIcon sx={homeStyle} />
    </Link>
  );
};

export default HomeComponent;
