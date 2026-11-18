import React from 'react'

const Useconext_Practice = () => {
  
  return (
    <div><div className='m-3'>
      <div className='bg-blue-300 h-100  w-60 rounded-2xl hover:cursor-pointer p-3 border-2'>

<img 
className='mt-2  rounded-2xl border hover:opacity-70 '
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpyhP8nIPljHWAwplL9N24Kk_UTG6dG1brOr6zRgtIA&s=10'>
</img>
<h2 className='text-2xl text-center hover:underline mt-3'>Name:{}</h2>
<p>About:</p>
<div  className='flex gap-3 mt-8'>
        <button className=' bg-black text-white w-25 rounded hover:opacity-70 '>Follow</button>
         <button className=' bg-black p-1 text-white w-25 rounded hover:opacity-70  '>Unfollow</button>
      </div>
      </div>
      
    </div></div>
  )
}

export default Useconext_Practice