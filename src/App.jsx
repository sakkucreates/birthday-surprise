import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SurprisePage from './pages/SurprisePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
