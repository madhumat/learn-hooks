
import './App.css';
import IntervalCounterFunction from './components/useEffect.js/IntervalCounteFunction';
import IntervalCounter from './components/useEffect.js/IntervalCounter';
import MouseTracker from './components/useEffect.js/MouseTracker';
import ClassCounter from './components/useState.js/ClassCounter';
import HookCounter from './components/useState.js/HookCounter';
import HookCounterArray from './components/useState.js/HookCounterArray';
import HookCounterObject from './components/useState.js/HookCounterObject';
import HookCounterPrevState from './components/useState.js/HookCounterPrevState';

function App() {
  return (
    <div className="App">
     <ClassCounter>
     </ClassCounter>
     <HookCounter></HookCounter>
     <HookCounterPrevState></HookCounterPrevState>
     <HookCounterObject></HookCounterObject>
     <HookCounterArray></HookCounterArray>
     <MouseTracker></MouseTracker>
     <IntervalCounter></IntervalCounter>
     <IntervalCounterFunction></IntervalCounterFunction>

    </div>
  );
}

export default App;
