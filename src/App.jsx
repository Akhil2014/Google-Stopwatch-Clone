import { BiStopwatch } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='button-div'>
      <div>
      <button className='button'><GiSandsOfTime className="icon"/>TIMER</button>
      </div>
      <div>
      <button className='button'><BiStopwatch className="icon" />STOPWATCH</button>
      </div>
       </div>

       <div className="mount">
        Mount
       </div>

       <div>
        <div className="button-start">
          <button className="btn btn1">START</button>
          <button className="btn btn2">RESET</button>
        </div>
       </div>
    </div>
  );
}

export default App;
