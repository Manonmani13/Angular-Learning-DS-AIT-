import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='c1'>Component 1</Link>
      <Link to='c2/100/mano'>Component 2</Link>
      <Routes>
        <Route path='c1' element={<Comp1/>}/>
        <Route path='c2/:x/:y' element={<Comp2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
