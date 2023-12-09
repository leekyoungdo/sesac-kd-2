import './App.css';
import {BrowerRouter, Routes, Route} from "react-router-dom"
import Header from './conponent/Header';

function App() {
  return (
    <div>
      <BrowerRouter>
      <Header></Header>
      </BrowerRouter>
    </div>
  );
}

export default App;
