import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Login() {
  const authenticate = async () => {
    const axiosGet = await fetch('/auth/google', {
      mode: 'no-cors',
    })
      // .then((res) => res.json())
      .then((data) => console.log('data: ', data));

    console.log('Fetched: ', axiosGet);
  };

  return (
    <>
      <Box className='loginContainer'>
        <Typography className='login-welcome'>
          Welcome to DittoData signin to get mocking
        </Typography>
        <Button
          className='login-btn'
          varient='contained'
          // href='http://localhost:3000/auth/google'
          onClick={() => {
            location.href = 'http://localhost:3000/auth/google';
          }}
        >
          Sign in with Oauth
        </Button>
      </Box>
      <div>
        <a
          className='google-btn'
          // href='http://localhost:3000/auth/google'
          onClick={() => {
            authenticate();
          }}
        >
          Authenticate with Google+
        </a>
        {/* <button
          onClick={() => {
            fetch('http://localhost:3000/logout', {
              headers: {
                // Authorization: ,
              },
            });
          }}
        >
          Logout
        </button> */}
      </div>
    </>
    // );
  );
}
