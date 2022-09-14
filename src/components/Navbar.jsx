import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import "./components.css";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <Stack className="navbar" direction="row" px="40px">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Stack direction="row" gap="40px">
        <Link to="/" className="links">
          Home
        </Link>
        <a href="#exercises" className="links">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}
