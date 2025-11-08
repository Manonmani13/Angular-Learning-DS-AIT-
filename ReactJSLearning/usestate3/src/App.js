import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [x,updateX]=useState('anu');
  var [y,updateY]=useState('kumar');

  return (
    <div className="App">
      Welcome
      <br/>
      <input type="text" value={x} onChange={(t)=>updateX.bind(t.target.value)}/>
      <br/>
      <input type="text" value={y} onChange={(t)=>updateY(t.target.value)}/>
    </div>
  );
}

export default App;
