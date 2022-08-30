import React from 'react'
import {Box, Typography, Button} from '@mui/material'

export default function Login() {
  return (
    <Box  className='loginContainer'>
      <Typography className='login-welcome'>
        Welcome to DittoData signin to get mocking
      </Typography>
      <Button className='login-btn' varient='contained'>
        Sign in with Oauth
      </Button>
      
    </Box>
  )
}
