import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [val, setVal]= useState("");
  // const [local, setLocal]= useState();

  const saveFunction=async (e)=>{
      await setVal(e.target.value);
     await localStorage.setItem("name", val);

      console.log(e.target.value)
      console.log(localStorage.getItem("name"));
  }

  let inputValue= localStorage.getItem("name");

  return (
    <div className="App">
      <label >Name</label>
      <input onChange={saveFunction} value={inputValue}/>
      <div>
        {
          localStorage.getItem("name")
        }
      </div>
    </div>
  );
}

export default App;
