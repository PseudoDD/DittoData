import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Login(props) {
  const { loggedIn, setLoggedIn } = props;

  const authenticate = async () => {
    setLoggedIn(true);
  };

  return (
    <>
      <Box className='loginContainer'>
        <Typography className='login-welcome'>
          <p>Welcome to DittoData Sign in to get mocking</p>
        </Typography>
        <Button
          className='login-btn'
          varient='contained'
          href='http://localhost:3000/auth/google'
          onClick={() => {
            authenticate();
          }}
        >
          Sign in with Oauth
        </Button>
      </Box>
      <div></div>
    </>
  );
}
