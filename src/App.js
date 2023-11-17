//import logo from './logo.svg';

import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import TextForm from './Component/TextForm';
import React, {useState} from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  

const [mode, setmode] = useState('light');

const togglemode = ()=>{
   if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor='rgb(0 83 112)';
    
   }
   else{
    setmode('light');
    document.body.style.backgroundColor='white';
    
   }
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar title="Texutils" mode={mode} togglemode={togglemode} />}>
      <Route path="TextForm" element={<TextForm title="uper" mode={mode} btnconverter="Convert to Uppercase" btnClear="Clear" />} />
      <Route path="About" element={<About title="About Us" mode={mode}/>} />
    </Route>
  )
);

  return (
  
<>
      <RouterProvider router={router} />
</> 
  );
}

export default App;
