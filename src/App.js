import React from 'react';
import { Helmet } from 'react-helmet'
import './App.css';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Helmet>
      <title>App</title>
    </Helmet>
      <div className="sideNav">

      </div>
      <div className="pages">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
