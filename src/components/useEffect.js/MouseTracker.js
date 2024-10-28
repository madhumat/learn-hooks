import React, { useState, useEffect } from 'react';
import HookMouse from './HookMouse';

const MouseTracker = () => {
   const[display, setDisplay]=useState(true);

   return (
    <div>
        <button onClick={()=>setDisplay(!display)}>display</button>
        {display && <HookMouse></HookMouse>}
    </div>
   )
}
export default MouseTracker;
