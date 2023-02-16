import React from 'react';
import './App.css';
import Map from './components/map/Map';

function App() {
 /** / const location = {
    address: '19 Avenue Mongi Slim, Tunis 2043',
    lat: 36.8524963,
    lng: 10.2551418,
  }*/
  return (
    <div className="App">
    <h1>Game World Address</h1>
    <Map/>
    
    </div>
  );
}

export default App;
