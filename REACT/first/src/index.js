import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Box from './Box';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);

// const root = ReactDOM.createRoot(document.getClassName('root')[0]);
root.render(
  <React.StrictMode>
   <Navbar></Navbar>
   <Box content="Hello">
    <p>First box</p>  
    {/* //aloneno effect  */}
   </Box>
   <Box content="hiii..."></Box>
  </React.StrictMode>
);
