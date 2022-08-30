import React from 'react'
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <Box component="span" className="Navbar">
      <Box component="span">Goblin Finder</Box>
      <Box component="span"><Link className="nav-link" to="/">Home</Link></Box>
      <Box component="span"><Link className="nav-link" to="/schemas">Schemas</Link></Box>
    </Box>
  )
}
