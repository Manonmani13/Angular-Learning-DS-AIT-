import { useState } from 'react';
import './App.css';

function App() {
  const [x, updateX] = useState(100);
  const [y, updateY] = useState('mano pandu');
  function fun1() {
    updateX(121);
  }

  return (
    <div className="App">
      Welcome 
      <input type="text" value={x} readOnly />
      <br />
      <input type="button" value="Click" onClick={fun1} />
      <br />
      {y}
      <input type="button" value="Click" onClick={()=>updateY("mano naveen")} />
    </div>
  );
}

export default App;
 