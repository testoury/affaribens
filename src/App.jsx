import React from 'react'
import Home from './routes/home'
import Projects from './routes/projects'
import Contact from './routes/Contact'
import About from './routes/About'
import { Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
     </Routes>
    </>
  )
}
//https://www.youtube.com/watch?v=0h2b4ftbZcU// 