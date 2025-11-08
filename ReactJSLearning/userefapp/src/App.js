import { useRef } from 'react';
import './App.css';

function App() {
  var txt1=useRef();
  var txt2=useRef();
  function fun(){
    if(txt1.current.value=="")
    txt1.current.value="Mano"
      if(txt2.current.value=="")

        txt2.current.value="Pandu"

    txt2.current.style.background="red"
    txt2.current.style.color="white"
    txt2.current.style.display="none"
    alert("hi")
  }
  return (
    <div className="App">
     <input type='text' ref={txt1}/>  
      <br/>
           <input type='text' ref={txt2}/>  
<br/>
    <input type="button" value='Click' onClick={fun}/>
    </div>
  );
}

export default App;
