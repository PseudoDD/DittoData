import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import SchemasDisplay from './components/SchemasDisplay.jsx';
import './assests/styles.css';

function App() {
  // TODO: Merge with backend login work to setLoggedIn properly
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn) {
    return (
      <div className='App'>
        <button
          onClick={() => {
            console.log('Are we logged in? ', loggedIn);
          }}
        >
          Log State
        </button>
        <HashRouter>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/schemas' element={<SchemasDisplay />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            console.log('Are we logged in? ', loggedIn);
          }}
        >
          Log State
        </button>
        <Login />
      </>
    );
  }
}

export default App;
