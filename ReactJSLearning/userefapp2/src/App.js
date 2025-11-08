import logo from './logo.svg';
import './App.css';
import { use, useReducer, useRef, useState } from 'react';

function App() {
  var [x,updateX] =useReducer(myFun,10);
  var[pwd,updateY]=useState("");
  var [untext,updateUtext]=useState("");
  var [email,updateEmail]=useState("");

  var userRef=useRef();
  var pwdRef=useRef();
  var emailRef=useRef();
  function myFun(odlVal,newVal){
    return newVal;
  }

  function funSumbit(e){
    updateUtext("")
    updateY("")
    updateEmail("")
    var count=0
    if(userRef.current.value.length==0){
      updateUtext("Enter username")
      count++;
    }
   if (pwdRef.current.value.length<5){
      updateY("enter Password")
      count++;
    }
    else if (pwdRef.current.value.length==0){
      updateY("enter min password")
      count++;
    }
    if (email.current.value.length==0){
      updateEmail("enter email id")
      count++;
    }
    else if (!email.current.value.includes('@')){
      updateEmail("enter valid email id")
      count++;
    }
    if(count!=0){
      e.preventDefault();
    }
  }
  return (
    <div className="App">
      Welcome
      <form onSubmit={funSumbit}>
 <h2>{x}</h2>
      {/* <input type='button' value='Click' onClick={()=>{updateX(x+1)}}/> */} 
      <input type='text' placeholder='username' ref={userRef}/>

      <input type='password' placeholder='Password' ref={pwdRef}/>
      <input type='email' placeholder='Email' ref={emailRef}/>

      <div>
        {untext}
      </div>
      <div>
        {pwd}
      </div>
      <input type='submit'value='send'/>
      </form>
     
    </div>
  );
}

export default App;
