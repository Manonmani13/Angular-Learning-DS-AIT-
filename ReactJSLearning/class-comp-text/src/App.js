import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      y: 200,
      res: 'Result'
    };
  }

  // Arrow function automatically binds 'this'
  funAdd = () => {
    const result = parseInt(this.state.x) + parseInt(this.state.y);
    this.setState({ res: result });
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>

        {/* Input for X */}
        <input
          type='text'
          value={this.state.x}
          onChange={(e) => this.setState({ x: e.target.value })}
        />
        <br />

        {/* Input for Y */}
        <input
          type='text'
          value={this.state.y}
          onChange={(e) => this.setState({ y: e.target.value })}
        />
        <br />

        {/* Result */}
        <input type='text' value={this.state.res} readOnly />
        <br />

        {/* Add button */}
        <input type='button' value='+' onClick={this.funAdd} />
      </div>
    );
  }
}
