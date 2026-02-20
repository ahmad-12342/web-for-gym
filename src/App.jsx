
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PreLoader from './components/PreLoader'
import ScrollWidgets from './components/ScrollWidgets'
import './index.css'

function App() {
  return (
    <Router>
      <PreLoader>
        <ScrollWidgets />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </PreLoader>
    </Router>
  )
}

export default App
