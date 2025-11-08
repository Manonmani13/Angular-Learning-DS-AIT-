import React from 'react'

export default function Header(props) {
  return (
    <div className='header'>
        <div style={{backgroundColor:"silver",width:'50px',height:'50px',borderRadius:'50%',position:'absolute',right:'10px', top:'20px'
            ,textAlign:'center',fontSize:'40px'
        }}>
            {props.data }

        </div>
      Header
    </div>
  )
}
