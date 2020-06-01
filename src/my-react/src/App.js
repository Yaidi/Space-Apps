import React from 'react';
import Routes from './Routes.js';
import { AuthContextProvider } from './Components/AuthContext';
import './Styles/App.css';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
