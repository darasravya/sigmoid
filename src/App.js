import React, { useState } from 'react';
import './App.css';
// import MainContent from './MainContent';
import { TokenContext } from "./TokenContext.js";
import DashBoard from './DashBoard';
import Login from './Login';


function App() {
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <div id="main-page">
        <TokenContext.Provider value={[token, setToken]}>
        <div className="main-content">
            {token!=='' ? <DashBoard /> : <Login />}
        </div>
        </TokenContext.Provider>
      </div>
    </div>
  );
}

export default App;
