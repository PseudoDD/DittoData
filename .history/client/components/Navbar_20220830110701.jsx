import React from 'react'
import { AppBar, Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <AppBar component="span" className="Navbar">
      <Box >Ditto Data</Box>
      <Box ><Link className="nav-link" to="/">Home</Link></Box>
      <Box ><Link className="nav-link" to="/schemas">Schemas</Link></Box>
    </AppBar>
  )
}
