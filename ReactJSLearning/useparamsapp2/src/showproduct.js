import Data from './Data'
import phoneImg from './download.jpeg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function showproduct() {
  return (
      <div style={{display:'flex'}} class='container'>
      {Data.map(oneProduct=>{
        var sno='../prodinfo/'+oneProduct.pid;
 return <div style={{marginRight:'20px', padding:'10px'}} class='card'>
        <h2> {oneProduct.pname}</h2>
          <img src={phoneImg} alt="phone" width="200px" height="200px"/>
          <div>

          <h3>Price : {oneProduct.price}</h3>
          </div>
          <div>
          {/* <input type="button" value="Show More" class='btn btn-primary form-control'/> */}
            <Link to={sno} className="btn btn-primary form-control">
            Product Info</Link>

            </div>
          </div>
      }
     
      )}
    </div>
  )
}
