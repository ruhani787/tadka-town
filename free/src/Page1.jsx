import React from 'react'
import  Useconext_Practice from './Useconext_Practice'
import Page2 from './Page2'
import { useContext } from 'react'

 const namecotext=useContext();

const Page1 = () => {
  return (
    <div>
      <Useconext_Practice/>
      <Page2/>
    </div>
  )
}

export default Page1