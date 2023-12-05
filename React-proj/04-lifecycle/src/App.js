import { useState } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycleFunc';
import LifeCycleClass from './components/LifeCycleClass';
import LifeCyclePrac from './components/LifeCyclePrac';

function App() {

  // const [number, setNumber] = useState(0)
  // const[isShow, setIsShow] = useState(true)
  return (
    <div>
      {/* <button onClick={()=>setIsShow(!isShow)}>
        {isShow ? "OFF" : "ON" }
      </button>
      <button onClick={()=>setNumber(number + 1)}>plus</button> */}
      {/* {isShow && <LifeCycle number={number} />} */}
      {/* {isShow && <LifeCycleClass number={number}/>} */}
      <LifeCyclePrac />
      
    </div>
  );
}

export default App;
