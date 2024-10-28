
import './App.css';
import React, { useState, useEffect } from 'react';
import ComponentC from './components/UseContext/ComponentC';
//import IntervalCounterFunction from './components/useEffect.js/IntervalCounteFunction';
import Cleanup from './components/useEffect.js/Cleanup';
import FetchIdButtonClickUseEffect from './components/useEffect.js/FetchIdButtonClickUseEffect';
import FetchIdUseEffect from './components/useEffect.js/FetchIdUseEffect';
import FetchUseEffect from './components/useEffect.js/FetchUseEffect';
import HookMouse from './components/useEffect.js/HookMouse';
import MouseTracker from './components/useEffect.js/MouseTracker';
// import IntervalCounter from './components/useEffect.js/IntervalCounter';
// import MouseTracker from './components/useEffect.js/MouseTracker';
// import ClassCounter from './components/useState.js/ClassCounter';
// import HookCounter from './components/useState.js/HookCounter';
// import HookCounterArray from './components/useState.js/HookCounterArray';
// import HookCounterObject from './components/useState.js/HookCounterObject';
// import HookCounterPrevState from './components/useState.js/HookCounterPrevState';


export const UserContext =React.createContext()

export const ChannnelContext =React.createContext()

function App() {
  return (
    <div className="App">
     {/* <ClassCounter></ClassCounter>
     <HookCounter></HookCounter>
     <HookCounterPrevState></HookCounterPrevState>
     <HookCounterObject></HookCounterObject>
     <HookCounterArray></HookCounterArray>
     <MouseTracker></MouseTracker>
     <IntervalCounter></IntervalCounter>
     <IntervalCounterFunction></IntervalCounterFunction> */}
     {/* <Cleanup></Cleanup>  */}
      {/* <HookMouse></HookMouse> */}
     {/* <MouseTracker></MouseTracker> */}
{/* <FetchUseEffect></FetchUseEffect>    */}
{/* <FetchIdUseEffect></FetchIdUseEffect> */}
{/* <FetchIdButtonClickUseEffect></FetchIdButtonClickUseEffect> */}
<UserContext.Provider value={"madhu"}>
<ComponentC></ComponentC> 
</UserContext.Provider> 
    </div>
  );
}

export default App;
