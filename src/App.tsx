import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



function App() {
  const [response, setResponse] = useState();

  function callApi {
    const api = 'https://11nfsd5x34.execute-api.us-east-2.amazonaws.com/messages'
    const res = await axios.get(api, { params: { TableName: 'FIX-messages-test' } });
    setResponse(res.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Welcome!
        </p>
        <button onClick={callApi}>Call API</button>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
