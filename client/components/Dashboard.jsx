import React, { useState } from 'react'
import {Grid, Box} from '@mui/material'
import InputsDisplay  from './InputsDisplay.jsx'
import PreviewDisplay  from './PreviewDisplay.jsx'

//TODO: Add preview functionality
export default function Dashboard() {
  const [dummyData, setDummyData] = useState([]);
  return (
    <Box className="centerpage">
      <InputsDisplay setDummyData={setDummyData}/>
      <PreviewDisplay dummyData={dummyData}/>
    </Box>
  )
}
