import { BiStopwatch } from "react-icons/bi";
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='button-div'>
      <div>
      <button className='button'>Timer</button>
      </div>
      <div>
      <button className='button'><BiStopwatch />Stopwatch</button>
      </div>
       </div>
    </div>
  );
}

export default App;
