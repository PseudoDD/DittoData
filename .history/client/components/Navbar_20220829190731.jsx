import React from 'react'
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <Box className = "Navbar">
      <div>Goblin Finder</div>
      <div><Link className="nav-link" to="/">Home</Link></div>
      <div><Link className="nav-link" to="/schemas">Schemas</Link></div>
      
    </Box>
  )
}
