import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {


  return (
    <div className='App'>
      <NavBar />

      <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/contact" element={<p>Este es el elemento contacto</p>} />
      </Routes>
    </div>
  )
}

export default App
