import './App.css'
import Contador from './components/contador/Contador'
import logo from './assets/logo.jpeg'
import Gallery from './components/gallery/Gallery'
import data from './services/datos.json'

function App() {
  

  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <Contador />
      <Gallery array = {data}/>
    
    </div>
  )
}

export default App
