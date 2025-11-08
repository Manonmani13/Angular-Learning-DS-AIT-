import React from 'react'

export default function p2(props) {
    var sno=localStorage.getItem("sno")

  return (
    <div>
      This is p2 component -{sno} - {props.value}
    </div>
  )
}
