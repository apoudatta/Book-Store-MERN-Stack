import React from 'react';
import {useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('http://localhost:5555/books')
      .then(res => console.log(res))
  }, []);

  return (
    <div className="App">
      <h1>A simple program to test CORS policy in Node.js</h1>
    </div>
  );
}

export default App;
