import React from 'react'
import {Grid, Box} from '@mui/material'
import InputsDisplay  from './InputsDisplay.jsx'
import PreviewDisplay  from './PreviewDisplay.jsx'

//TODO: Add preview functionality
export default function Dashboard() {
  return (
    <Box sx={{border: '1px solid black'}}>
      <InputsDisplay />
      {/* <PreviewDisplay /> */}
    </Box>
  )
}
