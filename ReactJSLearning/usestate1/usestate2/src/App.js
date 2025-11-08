import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [data,updateTxt1] = useState({
    txt1:"mano",
  txt2:"kumar"});
  function fun1(e){
    updateTxt1({...data,[e.target.id]:e.target.value});
    // if(e.target.id==="txt1")
    // updateTxt1(e.target.value);
  }
  return (
    <div className="App">
     Welcome
     <input type="text" value={data.txt1} id="txt1" onChange={fun1.bind(this)}/>
          <input type="text" value={data.txt2} id="txt2" onChange={fun1.bind(this)}/>

    </div>
  );
}

export default App;
