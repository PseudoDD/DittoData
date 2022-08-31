import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import SchemasDisplay from './components/SchemasDisplay.jsx';
import './assets/styles.css';

function App() {
  // TODO: Merge with backend login work to setLoggedIn properly
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn) {
    return (
      <div className='App'>
        <HashRouter>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/schemas' element={<SchemasDisplay />} />
            <Route
              path='/login'
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <>
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </>
    );
  }
}

export default App;
