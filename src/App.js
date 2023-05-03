import { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEntry from './components/CreateEntry/CreateEntry';

function App() {
  const handleChange = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value })
  }
  const [entry, setEntry] = useState({
    title: '',
    category:'',
    image: '', 
    body: ''
  })
  const [entrys, setEntrys] = useState([])
  const createEntry = async () => {
    try {
      const response = await fetch('/api/entrys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...entry })
      })
      const data = await response.json()
      setEntrys([data, ...entrys])
    } catch (error) {
      console.error(error)
    } finally {
      setEntry({
        title: '',
        category:'',
        image: '', 
        body: ''
      })
    }
  }


  return (
    <div className="App">
      <header className="App-header">
      <CreateEntry
        createEntry={createEntry}
        entry={entry}
        handleChange={handleChange}
      />
      </header>
    </div>
  );
}

export default App;
