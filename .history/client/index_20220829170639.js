import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" exact element={<App />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);