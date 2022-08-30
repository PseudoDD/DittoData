import React from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

export default function Login() {
  const authenticate = async () => {
    console.log('Getting here');
    // const axiosGet = await axios.get('http://localhost:3000/api/auth/google');
    const axiosGet = await fetch('/api/auth/google', {
      mode: 'no-cors',
    });

    // const axiosGet = await axios.get('/api/auth/google');

    console.log('Fetched: ', axiosGet);
    // .then((res) => res.json)
    // .then((data) => console.log('data: ', data));
    console.log('Not getting here');
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
            authenticate();
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
