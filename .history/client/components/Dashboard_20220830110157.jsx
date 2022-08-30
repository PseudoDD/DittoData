import React from 'react'
import {Grid, Box} from '@mui/material'
import InputsDisplay  from './InputsDisplay.jsx'
import PreviewDisplay  from './PreviewDisplay.jsx'

export default function Dashboard() {
  return (
    <div>
      <InputsDisplay />
      <PreviewDisplay />
    </div>
  )
}
