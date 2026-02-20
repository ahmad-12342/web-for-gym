
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import PreLoader from './components/PreLoader'
import './index.css'

function App() {
  return (
    <Router>
      <PreLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PreLoader>
    </Router>
  )
}

export default App
