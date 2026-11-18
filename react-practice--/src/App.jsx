import React from 'react'
import Header from './Header'
import Intro from './Intro';
import Form from './form';
import Footer from './Footer';
import TodoApp from './TodoApp'
import Practice from './Practice';



const App = () => {
  return (
    <div>
    <Header/>
    <Intro/>
    <Form/>
    <Practice/>
    <TodoApp/>
    <Footer/>
    </div>
  )
}

export default App