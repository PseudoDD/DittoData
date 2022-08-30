import React, {useState} from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { Routes, Route, HashRouter} from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import SchemasDisplay from './components/SchemasDisplay.jsx';

function App() {
  // TODO: Merge with backend login work to setLoggedIn properly
  const [loggedIn, setLoggedIn] = useState(true);
  
  if(loggedIn) {
    return ( 
      <div className = "App">
          <HashRouter>
            <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/schemas" element = {<SchemasDisplay/>}/>
            </Routes>
          </HashRouter>
      </div> )
  } else {
    return (
      <Login />
    )
  }
}



export default App;