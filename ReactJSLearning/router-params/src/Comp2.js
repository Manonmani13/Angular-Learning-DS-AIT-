import React, { use } from 'react'
import { useParams } from 'react-router-dom';
export default function Comp2() {
    var urlData=useParams();
    console.log(urlData.x);
    console.log(urlData.y);

  return (
    <div>
      Comp2
    </div>
  )
}
