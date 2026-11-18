// A mini task with useState,useref,useeffect ........



import { useState, useEffect, useRef } from "react";

const Minitask = () => {
// useRef....
// const myref=useRef(null)
// const focus=()=>{
//     myref.current.focus()
// }
// useState....
const [add, setadd] = useState('')
const [task, settask] = useState(0)

const nameRef = useRef("")

console.log("Minitask is re-rendering..")

const handleSubmit = (e) => {
   e.preventDefault();
   console.log(nameRef.current.value);
}
const adition=()=>{
 console.log("User name is :",add)
 if(add.trim() !==''){
    settask(task+1)
 }
 setadd('')
}
const clear=()=>{
    setadd('')
}
useEffect(() => {
    
    return () => {
        
    };
}, []);


  return (
    // <div className=" border-2 p-5 bg-amber-300 w-60 m-6 h-50">
    //   <div>
    //     <input
    //     //  ref={myref}
    //      value={add}
    //      onChange={(e)=>{
    //       setadd(e.target.value)
    //      }}
    //       className="bg-gray-300 p-2 rounded"
    //       type="text"
    //       placeholder="Enter your task"
    //     ></input>
    //   </div>
    //   <div className="ml-11 mt-3">
    //     {/* <button
    //     onClick={focus} 
    //     className="bg-amber-700  p-1 w-25 hover:bg-amber-500 border">
    //       Focus
    //     </button> */}
    //     <button 
    //     onClick={adition}
    //     className="bg-amber-700 mt-2 p-1 w-25 hover:bg-amber-500 border">
    //       Add
    //     </button>
    //     <button
    //     onClick={clear} className="bg-amber-700 mt-2 p-1 w-25 hover:bg-amber-500 border">
    //       Remove
    //     </button>
    //   </div>
    //   <div className="bg-amber-300 mt-12 p-2 h-25 border-3 ">
    //     <h1 className="text-center font-bold underline">Total Tasks</h1>
    //     <h1 className="text-center font-bold text-5xl">
    //         {
    //             task
    //         }
    //         </h1>
    //   </div>
   // </div>

    <>
    
  <form onSubmit={handleSubmit}>
     <input type="text"  placeholder="Ruhani"
   ref={nameRef}
   />

    <button type="submit">Submit </button>
  </form>


    
    </>
  );
};

export default Minitask;
