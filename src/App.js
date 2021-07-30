import './App.css';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
import WantToRead from './components/WantToRead/WantToRead';
import Read from './components/Read/Read';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>My Reads</h1>
      </div>
      <CurrentlyReading></CurrentlyReading>
      <WantToRead></WantToRead>
      <Read></Read>
    
    </div>
  );
}

export default App;
