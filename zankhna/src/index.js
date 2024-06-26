import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Home from './Component/Home/Home';
// import Demo from './Component/State/Demo';
// import Color from './Component/State/Color';
// import Write from './Component/State/Write';
// import Change from './Component/State/Change';
import Routing from './Component/Routing/Routing';
// import { Head } from './Component/Home2/Head/Head';
// import State from './Component/State/State';
// import { Modal } from './Component/State/Modal';






const root = ReactDOM.createRoot(document.getElementById('demo'));



root.render(
  <React.StrictMode>
    {/* <Demo/> */}
    {/* <Write/> */}
    {/* <Color/> */}
    {/* <Change/> */}
    {/* <State/> */}
    {/* <Modal/> */}
   <Routing/>
   {/* <Home/> */}
   {/* <Head/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();