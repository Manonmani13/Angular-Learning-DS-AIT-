import './App.css';
import { BrowserRouter, Route, Routes, Link,Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Login from './Login';
import Product from './Product';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/hm">Home</Link> |{" "}
          <Link to="/ab">About</Link> |{" "}
          <Link to="/ser">Service</Link>
        
        </nav>

        <Routes>
          <Route path="/hm" element={<Home />} />
          <Route path="/ab" element={<About />} />
          <Route path="/se" element={<MyRoute>
            <Service/>
            </MyRoute>  } />
             <Route path="/prod" element={<MyRoute>
            <Product/>
            </MyRoute>  } />
          <Route path="/log" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function MyRoute(obj){
  if(localStorage.getItem('auth')){
    return obj;
  }else{
    alert('You must login first')
    return <Navigate to="../log"></Navigate>
  }
}

export default App;
