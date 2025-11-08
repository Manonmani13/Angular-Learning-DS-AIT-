import React, { Suspense } from 'react'; // ✅ First import
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// ✅ Lazy load Home after React is imported
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/hm">Home</Link> |{" "}
          <Link to="/ab">About</Link> |{" "}
          <Link to="/ct">Contact</Link>
        </nav>

        {/* ✅ Wrap lazy routes with React.Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/hm" element={<Home />} />
            <Route path="/ab" element={<About />} />
            <Route path="/ct" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
