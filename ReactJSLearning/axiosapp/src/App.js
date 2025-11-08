import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [tableData, updateData] = useState([]);

  function fun() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      updateData(response.data); // ✅ store raw data only
    });
  }

  return (
    <div className="App">
      <input type="button" value="Click Me" onClick={fun} />
      <table border="1px">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value) => (
            <tr key={value.id}>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
