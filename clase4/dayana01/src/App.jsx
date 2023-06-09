import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Contacto from './Components/Contacto'
import NotFound from './Components/NotFound'
import Detail from './Components/Detail'

function App() {


  return (
    <div className='App'>
      <NavBar />

      <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/contact" element={<Contacto />} />
          <Route path = "/product/:id" element={<Detail />}/>
          <Route path = "*" element ={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
