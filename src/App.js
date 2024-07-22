import logo from './logo.svg';
import './App.css';
import { uploadQuizData } from '../utils/uploadQuizData';

function AdminPage() {
  const handleUpload = async () => {
    await uploadQuizData();
    alert('Quiz data uploaded successfully!');
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleUpload}>Upload Quiz Data</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
