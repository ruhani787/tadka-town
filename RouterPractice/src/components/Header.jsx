import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-950 p-3 text-white flex justify-between'>
        <div>
            <h1 className='font-bold
             text-2xl'>Amazon</h1>
        </div>
        <div className='flex gap-9 mr-9 '>
            <Link className='hover:underline' to='/' >Home</Link>
            <Link className='hover:underline' to='/About' >About</Link>
            <Link className='hover:underline' to='/Contact' >Contact</Link>
            <Link className='hover:underline' to='/course' >Courses</Link>
        </div>

    </div>
  )
}

export default Header