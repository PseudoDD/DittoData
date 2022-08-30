import React from 'react'
import { AppBar, Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <App component="span" className="Navbar">
      <Box >Goblin Finder</Box>
      <Box ><Link className="nav-link" to="/">Home</Link></Box>
      <Box ><Link className="nav-link" to="/schemas">Schemas</Link></Box>
    </App>
  )
}
