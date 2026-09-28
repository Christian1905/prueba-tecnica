import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador de clicks
        </p>
        <Contador />
      </header>
    </div>
  );
}

export default App;
