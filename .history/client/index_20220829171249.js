import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";

render(
  <App/>,
  document.getElementById("root")
);