import React from 'react'
import { AppBar, Box, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  return (
    <AppBar component="span" className="Navbar">
      <div >Ditto Data</div>
      <div ><Link className="nav-link" to="/">Home</Link></div>
      <div ><Link className="nav-link" to="/schemas">Schemas</Link></div>
    </AppBar>
  )
}
