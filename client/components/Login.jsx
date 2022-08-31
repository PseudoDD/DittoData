import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Login() {
  // const authenticate = async () => {
  //   const axiosGet = await fetch('', {
  //     // mode: 'no-cors',
  //   })
  //     // .then((res) => res.json())
  //     .then((data) => console.log('data: ', data));

  //   console.log('Fetched: ', axiosGet);
  // };

  const authenticate = async () => {
    await fetch(
      `/protected/`
      // , {
      // mode: 'cors',
      // headers: {
      //   'Content-Type': 'Application/JSON',
      // },
      // }
    )
      // .then((response) => response.json())
      .then((data) => console.log('data: ', data))
      .catch((err) => console.log('Authentication error: ', err));
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
          // href='http://localhost:3000/auth/google'
          onClick={() => {
            location.href = 'http://localhost:3000/auth/google';
          }}
        >
          Sign in with Oauth (href)
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
          Authenticate with On-click function
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
