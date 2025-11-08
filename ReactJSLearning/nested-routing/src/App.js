import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Link to ='/home'>Home</Link> |
     <Link to ='/contact'>Contact</Link>s
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
