import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Header from './components/Header';
import About from './pages/About'
import Error from './pages/Error'
// import AICourse from './pages/AICourse'
const App = () => {
  return (
     <div> 
      <Header/>
       <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/contact' element={<Contact />} />
       <Route path='/course' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
      

    </div>
  )
}

export default App