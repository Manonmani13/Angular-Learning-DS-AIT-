import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var [x,updateX]=useState(100);
  var z=3;
  var [y,updateY]=useState(200);
  function fun1(){
    updateX(x+1);
  }
  function fun2(){
    updateY(y+1);
  }
   useEffect(function(){
  alert("Hello" + x);
  alert(x*z);
},[x])
useEffect(function(){
  alert("Exec ..");
},[y])

  return (
    <div className="App">
      <h1>{x}</h1>
      <h1>{y}</h1>
      <input type='button' value='Click' onClick={fun1}/>
            <input type='button' value='Click' onClick={fun2}/>

    </div>
  );
}


export default App;
