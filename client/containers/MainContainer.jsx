import React from 'react';
// import {Grid, Box} from '@mui/material'
import InputsDisplay from '../components/InputsDisplay.jsx';
import PreviewDisplay from '../components/PreviewDisplay.jsx';

export default function MainContainer() {
  return (
    <div>
      <a className='google-btn' href='http://localhost:3000/auth/google'>
        Authenticate with Google+
      </a>
      {/* <a className='google-btn' href='http://localhost:3000/logout'>
        Logout
      </a> */}
      <button
        onClick={() => {
          fetch('http://localhost:3000/logout', {
            headers: {
              // Authorization: ,
            },
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}
