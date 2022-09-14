import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  const year = new Date();
  return (
    <footer>
      <h3>Ⓒ {year.getFullYear()} Nandini Parekh</h3>
    </footer>
  );
}
