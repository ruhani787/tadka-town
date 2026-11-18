import React from 'react'
import { useRef } from 'react'
const UseRef_Practice = () => {
    const myref=useRef(null)
    const Add=()=>{
        console.log(myref.current.value);
    
    }
    const clear=()=>{
        myref.current.value=''
    }
    const focus=()=>{
        myref.current.focus()
    }
  return (
    <div className='bg-green-200 border w-80 p-3 m-6'>
        <input 
        ref={myref}
        className='bg-gray-300 mt-3 p-3'  type='text'placeholder='Enter your name'></input><br/>
        <div className='flex gap-2 mt-2'>
            <button
        onClick={Add}
        className='bg-black w-15 text-white p-2 rounded hover:opacity-70'>Add</button>
        <button
        onClick={clear}
        className='bg-black w-15 text-white p-2 rounded hover:opacity-70'>Clear</button>
         <button
        onClick={focus}
        className='bg-black w-15 text-white p-2 rounded hover:opacity-70'>Focus</button>
        </div>
    </div>
  )
}

export default UseRef_Practice