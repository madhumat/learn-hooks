import React, { useState } from 'react'

function HookCounter() {
   const [count, setCount] =useState(0)

  return (
    <div><button onClick={()=>setCount(count+1)}> click count Hook {count}</button></div>
  )
}

export default HookCounter

/**
 * 
 * 
 * Hook Counter 
 *  array destructing 
 *  we have method called setCount
 * 
 * Rules Of Hooks 
 * 1. User Hooks are at the top level
 * 2. Hooks are userd in functions 
 * 
 */