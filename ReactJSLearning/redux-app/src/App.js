import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(props) {
  useEffect(()=>{localStorage.setItem("sno","345")},[])
   var [x,updateX]=useState(localStorage.getItem("sno"))
   function update(){
    localStorage.setItem("sno","678")
    updateX(localStorage.getItem("sno"))
    props.upstt()
   }
  return (
    <div className="App">
      This is App -{x} -{props.dt};
      <input type='button' value='Update' onClick={update}/>
    </div>
  );
}

export default App;
