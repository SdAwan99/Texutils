import { useState } from 'react';
import React from 'react'
import '../App.css';




export default function TextForm(props) {

   const handleonclick = ()=>{
    let uper = text.toUpperCase();
    setext(uper);
   }
   
   const handleonchange = (event)=>{
    setext(event.target.value);
   }


   
   const handleClear = (event)=>{
    setext('');
   }


   const handleCopy = () => {
    var tex = document.getElementById("myid");
    tex.select();
    navigator.clipboard.writeText(tex.value);
   }

  const [text, setext] = useState ("Type Here");

  return (
    <>  
   
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>

      

<h1>{props.title}</h1>
<textarea className="form-control input"  id='myid' value={text} onChange={handleonchange} rows="3"></textarea>

<button className='btn btn-primary' onClick={handleonclick} >{props.btnconverter}</button>
      
      
<button className='btn btn-danger' onClick={handleClear} >{props.btnClear}</button>

      
<button className='btn btn-success' onClick={handleCopy} >Copy</button>


      <p>{text.split (" ").length} Words and character lenght {text.length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div> 
      
  </>
 
  )
}


