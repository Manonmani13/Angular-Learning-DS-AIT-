// src/App.js
function App(props) {
  return (
    <div className="card" style={{ width: '250px', padding: '10px' }}>
      <h3>{props.title}</h3>
      <div>Casting: {props.cast}</div>
      <div>Director: {props.director}</div>
      <div>Report: {props.report}</div>
      <br />
      <input type="button" value="Add to Cart" className="btn btn-primary" />
    </div>
  );
}

export default App;
