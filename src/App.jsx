import { useState } from "react";
import { BiStopwatch } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import './App.css';
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";

function App() {
  const [mount,setMount] = useState(true)
  const handleMount =(e) => {
    if(e===1){
      setMount(false)
    }else if(e==2){
      setMount(true)
    }
  }
  return (
    <div className="App">
     <div className='button-div'>
      <div>
      <button onClick={() => handleMount(1)} className='button button2'><GiSandsOfTime className="icon"/>TIMER</button>
      </div>
      <div>
      <button onClick={() => handleMount(2)} className='button button1'><BiStopwatch className="icon" />STOPWATCH</button>
      </div>
       </div>

       <div className="mount">
       { (mount)?<StopWatch />:<Timer />}
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
