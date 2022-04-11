import './reset.css'
import React from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
import TopBar from './components/TopBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return <>
    <TopBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
    </Routes>
  </>
}

export default App
