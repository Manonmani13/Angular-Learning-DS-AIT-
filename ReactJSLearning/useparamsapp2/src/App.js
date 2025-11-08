import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ This is correct

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ShowProduct from './showproduct';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <nav>
          <Link to="" className="btn btn-primary m-2">Show Product</Link>
          <Link to="/prodinfo" className="btn btn-secondary m-2">Product Info</Link>
        </nav>

        <Routes>
          <Route path="" element={<ShowProduct />} />
            <Route path="/prod" element={<ShowProduct />} />

          <Route path="/prodinfo/:pid" element={<ProductInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
