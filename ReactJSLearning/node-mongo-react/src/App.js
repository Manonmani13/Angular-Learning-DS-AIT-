import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [table_data, updateTable] = useState([]);
  const [name, updateName] = useState("");
  const [city, updateCity] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("http://localhost:5000/getData").then(res => {
      console.log(res.data);
      if (res.data && res.data.records) {
        updateTable(res.data.records);
      }
    });
  }

  function handleDelete(un) {
    alert("Deleting: " + un);
    axios.post("http://localhost:5000/deleteData", { uname: un }).then(res => {
      console.log(res.data);
      getData();
    });
  }

  function insertData() {
    var obj = { uname: name, city: city };
    axios.post("http://localhost:5000/postData", obj).then((res) => {
      console.log(res.data.result);
      alert(res.data.result);
      getData();
      updateCity("");
      updateName("");
    });
  }

  return (
    <div className="App">
      <div className='container'>
        <br />
        <input
          type='text'
          placeholder='Enter Name'
          className='form-control'
          value={name}
          onChange={(t) => updateName(t.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Enter City'
          className='form-control'
          value={city}
          onChange={(t) => updateCity(t.target.value)}
        />
        <br />
        <button className='btn btn-primary' onClick={insertData}>Insert</button>
      </div>
      <table className="table table-striped">
        <tbody>
          {table_data.map((oneRow, idx) => (
            <tr key={idx}>
              <td>{oneRow.uname}</td>
              <td>{oneRow.city}</td>
              <td>
                <span
                  className='fa fa-trash'
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleDelete(oneRow.uname)}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
