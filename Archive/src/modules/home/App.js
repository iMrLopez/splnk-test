import React from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src='/splunk-logo.png' alt="splunk logo" />
        <p>
          Welcome to Splunks official logs viewer!
        </p>

        <Button
          variant="contained"
          onClick={() => navigate('/logs')}>View logs</Button>


      </header>
    </div>
  );
}

export default App;
