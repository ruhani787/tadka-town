import React from 'react'
import { useState,useEffect } from 'react'

const Apipractice = () => {
    const [dog, setdog] = useState('')
     const getdog=()=>{
           fetch("https://dog.ceo/api/breeds/image/random")
        .then ((res)=>res.json())
        .then((data)=>setdog(data.message))
     }

    useEffect(() => {
        getdog();
    },[]);

  return (
    <div >
        <h1 className='ml-39 font-bold mb-3 underline'>My dog</h1>
    {dog&&<img className='w-100 ml-2 h-100 border-3' src={dog}alt='dogimg  '></img>}
    <button className='bg-amber-300 hover:opacity-50 ml-39 p-2 border mt-4 ' onClick={getdog}>New Dog</button>
    </div>                  
  )
}

export default Apipractice