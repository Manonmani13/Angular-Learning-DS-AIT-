// import { on } from 'formidable/Formidable';
// import React from 'react'
import {  Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Data from './Data';
export default function ProductInfo() {
      var urlData=useParams();
      const prod=Data.find(p=>p.pid==urlData.pid);
  return (
    <div>
          {/* <Link to="/prodinfo" className="btn btn-secondary m-2">Product Info</Link> */}
          ProductInfo - {urlData.pid}
          {prod?(<><h1>Hi</h1><div class="container" style={{ display: 'flex' }}>
        {prod.pid}

      </div>
      <div>
        <Link to="../prod" class="btn btn-secondary">Back</Link></div></>):(<h1>Product Not Found</h1> )}
            
            

          
    </div>
  )
}
