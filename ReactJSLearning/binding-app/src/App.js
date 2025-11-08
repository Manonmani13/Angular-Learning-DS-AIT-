import logo from './logo.svg';
import './App.css';

function App() {
  var x=100;
  function fun1(){
    alert("Hello")
  }
  function fun2(){
    alert("Hello from 2")
  }
  function add(a,b){
    alert(a+b);
  }
  return (
   <div className="App">
    <h1>{x}</h1>
    hi all
    <input type="text" value={x} />
    <input type="button" value="Click" onClick={add.bind({},10,20)}/>
    <input type="button" value="Click" onClick={fun2}/>
    <input type="button" value="Click" onClick={()=>{add(11,22)}}/>

   </div>
  );
}

export default App;
