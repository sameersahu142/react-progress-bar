import logo from './logo.svg';
import './App.css';
import ProgressBar from './Components/ProgressBar';

function App() {
  return (
    <div className="App">
      <ProgressBar bgColor='orange' completed={90} />
    </div>
  );
}

export default App;
