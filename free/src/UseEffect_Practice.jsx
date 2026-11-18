//  simple useeffect ki practice

import { useState ,useEffect,} from "react";

import React from 'react'

const UseEffect_Practice = () => {
  const [num, setnum] = useState(0);
  const addone = () => {
    setnum(num + 1);
  };
  const lossone = () => {
    setnum(num - 1);
  };
  const addfive = () => {
    setnum(num + 5);
  };
  const resetbtn1 = () => {
    setnum(0);
  };
  useEffect(()=>{
    console.log("Current value is:",num)
    document.title=`value:${num}`
  },[num])

// useeffect mein document.title ki practice....
  const [name, setname] = useState("")
const yourname=()=>{
  console.log("your name is:",name)
}
useEffect(() => {
  document.title=name?`HELLO:${name}`:`Enter a name!`
}, [name])

// setcount practice....
 const [seconds, setseconds] = useState(0)

useEffect(()=>{
  
 const timer=setInterval(()=>{
  setseconds((prev)=>prev+1)
 },1000);
 return ()=> clearInterval(timer)
 
},[])
  {/* timer stop start reset  */}
const [time, settime] = useState(0)
const [stop, setstop] = useState(false)
 const reset=()=>{
  settime(0)
 }
useEffect(()=>{
  if(stop){
  return;
}
  const timer=setInterval(()=>{
     settime((prev)=>prev+1)
  },1000) 
  return ()=>clearInterval(timer)
},[stop])
 
  
  return (
    <div>
       <div className="bg-amber-300 rounded  p-3 w-130 m-6 h-80">
        <h1 className="text-6xl text-center m-15 font-bold"> Number:{num} </h1>
        <div className="mt-30 flex gap-2 ">
          <button onClick={addone}  className="bg-black w-30 text-white rounded p-2 hover:opacity-80">
            Add by 1
          </button>
           <button
            onClick={lossone}
        className="bg-black  w-30 text-white rounded p-2 hover:opacity-80"
          >
            Loss by 1
          </button>
          <button
            onClick={addfive}
            className="bg-black  w-30 text-white rounded p-2 hover:opacity-80"
          >
            Add by 5
          </button>
          <button
            onClick={resetbtn1}
            className="bg-black  w-30 text-white rounded p-2 hover:opacity-80"
          >
            Reset
          </button>
        </div>
       </div>
       // useeffect mein document.title ki practice....
       <div>
        <div>
  <input type="text" className="bg-gray-200 p-2 m-6" placeholder="Enter your name"
  value={name}
  onChange={(e)=>{
  setname(e.target.value)
  }}
  ></input>
  <button className="bg-amber-200 p-2 hover:opacity-80" onClick={yourname}>Enter</button>
</div>
       </div>
       // setcount practice....

        <div className="m-7 w-30 h-30 bg-amber-300 p-2 rounded-full text-center">
         <h1 >Seconds:</h1>
         <h1 className="font-bold text-5xl">{seconds}</h1>
      </div>
      {/* timer stop start reset  */}
      <div>
<div className="flex justify-center mt-50">
  <div className="bg-amber-700 w-50 h-50 rounded text-center p-2">
    <h1 className="font-extrabold underline">Timer:</h1>
    <h1 className="text-7xl">{time}</h1>
    <div className="flex mt-10 gap-4 ">
      <button className=" font-bold border p-1  bg-amber-800 hover:opacity-70"
      onClick={()=>{setstop(true)
        console.log("Current time:",time)
      }}
      >Stop</button>
       <button className=" font-bold border p-1 bg-amber-800 hover:opacity-70"
      onClick={()=>{setstop(false)}}
      >Start</button>
      <button className=" font-bold border p-1  bg-amber-800 hover:opacity-70"
      onClick={reset}
      >Reset</button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default UseEffect_Practice






