import React from 'react'
import Data from './datafile'
import download from './download.jpeg';
export default function Contact(props) {
  return (
    <div style={{display:'flex',gap:'20px'}}>
{Data.map((item)=>{
        return(
          <div style={{marginRight:'10px', border:'1px solid silver',width:'150px'}} >
            <h1>{item.pname}</h1>
            <img src={download} width="100px" height="100px" alt='img'/>
            <div>Price : {item.price}</div>
            <div>Color : {item.color}</div>
            <input type='button' value='add to cart' onClick={props.addcart}/>
                  </div>
        )
      })}
          </div>
  )
}
