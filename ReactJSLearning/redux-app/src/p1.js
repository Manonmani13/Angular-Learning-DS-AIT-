import React from 'react'

export default function p1(props) {
  var sno=localStorage.getItem("sno")
  return (
    <div>
      This is p1 component -{sno} -{props.value}
    </div>
  )
}
