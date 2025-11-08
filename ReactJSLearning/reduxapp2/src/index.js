import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import storefile from './reduxstore';
import Header from './Header';
import Contact from './Contact';
var arrstore=createStore(storefile);
const root = ReactDOM.createRoot(document.getElementById('root'));
function comRef() {
root.render(
  <React.StrictMode>
    <Header data={arrstore.getState()}/>
    <Contact addcart={()=>arrstore.dispatch({type:"Increment"})}/>
    {/* <App /> */}
  </React.StrictMode>
);
}

comRef();
arrstore.subscribe(comRef);
 // to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
