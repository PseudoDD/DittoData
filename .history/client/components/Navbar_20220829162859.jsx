import React from 'react'
import Login from '../components/Login.jsx'
import SchemaDisplay from '../components/SchemasDisplay.jsx'
import Home from '../components/Dashboard.jsx'
import { Box, Button, Link } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <Box className = "Navbar">
      <div>Goblin Finder</div>
      <div><Link className="nav-link" to="/home">Home</Link></div>
      <div><Link className="nav-link" to="/schemas">Schemas</Link></div>
      <div><Link className="nav-link" to="/" onClick={logOut}>Logout</Link></div>
    </Box>
  )
}
