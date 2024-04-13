import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import HomePage from './Pages/HomePage'
import LogIn from './Pages/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path = "/" element={<HomePage />}/>
          <Route path = "logIn" element={<LogIn />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
