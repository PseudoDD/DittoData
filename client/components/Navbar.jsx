import React from 'react'
import { AppBar, Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  

  return (
    <Box  className="navbar">
      <div  className="navbar-logo"> 
        <img src={require('../assests/img/dittodragonite-removebg-preview.png').default}/>
        DittoData
         </div>
      <Box className="navbar-children">
      <Box ><Link className="nav-link" to="/">Home</Link></Box>
      <Box ><Link className="nav-link" to="/schemas">Schemas</Link></Box>
      <Box ><Link className="nav-link" to="/login">Logout</Link></Box>
      </Box>
    </Box>
  )
}
