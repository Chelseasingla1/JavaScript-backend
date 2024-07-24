import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Box from './Box';
import Counter from './Counter';
import App from './App';
import App1 from './App1';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);

// const root = ReactDOM.createRoot(document.getClassName('root')[0]);
root.render(
  <React.StrictMode>
   <Navbar></Navbar>
   <Box content="Hello">
    <p>First box</p>  
    {/* //alone no effect  */}
   </Box>
   <Box content="hiii..."></Box>
   <Counter></Counter>
   <App></App>
   <App1></App1>
  </React.StrictMode>
);
