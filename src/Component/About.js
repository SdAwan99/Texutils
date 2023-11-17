import React from 'react'
import '../App.css';


export default function About(props) {
  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  
      <h2>{props.title}</h2>

    </div>
  )
}
