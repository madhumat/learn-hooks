import React, { useState } from "react";

function HookCounterPrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>
        click count Hook {count}
      </button>
      <button onClick={() => setCount(count + 1)}> Increament {count}</button>  // check add prevState to use the count which already got updated 
      <button onClick={() => setCount(count - 1)}>Decreament {count}</button>
      <button onClick={increamentFive}>Increament</button>
    </div>
  );
}

export default HookCounterPrevState;

/******
 * <button onClick={()=>setCount(initialCount)}> click count Hook {count}</button>
        
        <button onClick={()=>setCount(count+1)}> Increament {count}</button>
        
        <button onClick={()=>setCount(count-1)}>Decreament {count}</button></div>


***************************************************************************
The incrementFive function  for incrementing the
 count by 5 using the previous state. However, it can be optimized for clarity. 

 const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1);
    }
};

instead of above function 

const incrementFive = () => {
    setCount(prevCount => prevCount + 5);
};



 * 
 * 
 * 
 * 
 */
