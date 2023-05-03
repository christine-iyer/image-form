import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEntry from './components/CreateEntry/CreateEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CreateEntry />
      </header>
    </div>
  );
}

export default App;
