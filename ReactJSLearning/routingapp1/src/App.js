import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './Error';
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/home">Home Page</Link> |
          <Link to="/about">About Page</Link> |
          <Link to="/contact">Contact Us Page</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
