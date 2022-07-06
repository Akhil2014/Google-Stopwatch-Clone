import React, { useEffect, useRef, useState } from 'react'
import '../App.css';

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const timerref = useRef(null);
  const secondref = useRef(null);
  if(second == 100){
    setSecond(0)
  }
  if(count==60){
    setCount(0)
    setMinute(minute+1)
  }

  useEffect(() => {
    handleStart()
    return handleStop;
  }, []);
  const handleStart = () => {
    if (timerref.current !== null) return;
    timerref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    secondref.current = setInterval(() => {
      setSecond((second) => second+1)
    },10)

  };

  const handleStop = () => {
    clearInterval(timerref.current);
    clearInterval(secondref.current);
    timerref.current = null;
    secondref.current = null;
  };

  const handleReset = () => {
    handleStop();
    setCount(0);
    secondref(0)
  };
  return (
    <div>
    {(minute!==0)?minute+"m":""}{count}s{second}
    </div>
  )
}

export default StopWatch