import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <input type="button" value="Click" className='btn btn-primary'/>
    <input type="button" value="Click" className='btn btn-danger'/>
 <input type="button" value="Click" className='btn btn-secondary'/>
    <input type="button" value="Click" className='btn btn-warning'/>
 <input type="button" value="Click" className='btn btn-info'/>
    <input type="button" value="Click" className='btn btn-link'/>
    <br/>
    <table className='table table-striped'>
      <thead>
        <th>Ser No</th>
        <th>Username</th>
      </thead>
      <tr><td>100</td><td>Mano</td></tr>
            <tr><td>100</td><td>Mano</td></tr>
      <tr><td>100</td><td>Mano</td></tr>
      <tr><td>100</td><td>Mano</td></tr>
      <tr><td>100</td><td>Mano</td></tr>

    </table>
    <input type="text" placeholder='Enter Name... ' className='form-control'/>

    </div>
  );
}

export default App;
