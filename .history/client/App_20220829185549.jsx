import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { Routes, Route, HashRouter} from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './components/Dashboard.jsx'
import Login from './components/Login.jsx'

function App() {
  // TODO: Merge with backend login work to setLoggedIn properly
  const [loggedIn, setLoggedIn] = useSignal(true);
  
  if(loggedIn) {
    return ( 
      <div className = "App">
          <HashRouter>
            <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/me" element = {<ProfileContainer userID={userID} setUserID={setUserID}/>}/>
                <Route path = "/findEvents" element = {<EventsContainer/>}/>
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