import { Component } from "react";

export default class App extends Component{
  sno=111;
  constructor(){
    super();
    this.state = {name: "Mano", city: "Chennai"};
  }
  snoUpdate=()=>{
    this.sno = 222;
    this.setState({name: "Manonmani", city: "Bangalore"});
  }
  render(){
    return (<div><h1>{this.state.name}</h1>
    {this.state.city} - {this.sno }
    <input type='button'  value='Update no' onClick={this.snoUpdate}/>
    </div>)
  }
}