import React, { useDebugValue, useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [clickCount,setClickCount] = useState(0)

  useEffect(()=>{
    document.title="Kattintások száma: "+ clickCount;
    console.log(clickCount);
  },[clickCount]);

  return (
    <div className="card w-25">
      <button className='btn btn-primary'
      onClick={()=>{
        setClickCount((elozo)=> elozo+1);
      }}
      >
        Kattints!
      </button>
      <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        margin: "0 auto"
      }}
      className="p-2 m-5 rounded text-center">
      <h1>{clickCount}</h1>
      </div>
    </div>
  );
}

function BoxComponent(props) {
  const [clickCount,setClickCount] = useState(props.counter);
return(
  <div
  style={{
    width: "100px",
    height: "100px",
    backgroundColor: "red"
  }}
  className="p-2 m-5 rounded text-center">
  <h1>{clickCount}</h1>
  </div>
);
}

export default App;
