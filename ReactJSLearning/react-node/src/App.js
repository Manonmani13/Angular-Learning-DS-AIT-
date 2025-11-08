import './App.css';
import axios from 'axios';

function App() {
  function fun() {
    axios.get("http://localhost:5000/met1")
      .then(response => {
        console.log("GET Response:", response.data);
        alert(response.data);  // or display it somewhere in the UI
      })
      .catch(error => {
        console.error("GET Error:", error);
      });
  }

  function funApi2() {
    axios.post("http://localhost:5000/met2", {
      name: "Ankit"
    })
      .then(response => {
        console.log("POST Response:", response.data);
        alert(response.data);
      })
      .catch(error => {
        console.error("POST Error:", error);
      });
  }

  return (
    <div className="App">
      <input type="button" value="Click Me" onClick={fun} />
      <input type="button" value="Click POST" onClick={funApi2} />
    </div>
  );
}

export default App;
