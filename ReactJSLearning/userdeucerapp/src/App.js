import './App.css';
import { useReducer } from 'react';

// ✅ Define reducer function FIRST
function myFun(oldVal, newVal) {
  return newVal; // just replaces the old value with new value
}

function App() {
  // ✅ Pass reducer first, then initial state
  const [x, updateX] = useReducer(myFun, 10);

  return (
    <div className="App">
      <h1>{x}</h1>
      <input type='button' value='Click' onClick={() => updateX(123)} />
    </div>
  );
}

export default App;
