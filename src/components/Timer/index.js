import { useEffect, useState } from "react";

const Timer = ({ child }) => {
  const [time, setTime] = useState(Date.now());

  useEffect( () => {
    const interval = setInterval(
      () => setTime(Date.now()
    ), 1000);
    
    return () => {
      clearInterval(interval);
    }
  }, [])

  return child(time);
}

export default Timer;