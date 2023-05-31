import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Tarjeta'

function App() {

  const [libro, setLibro] = useState({
    name: '',
    autor: ''
  })


  const [show, setShow] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(libro.name.length > 3 && libro.autor.length > 6){
      setShow(true)
    }else{
      console.error('Por favor chequea que la información sea correcta')
      setError('Por favor chequea que la información sea correcta')
      return
    }
  }

  return (
    <>
    <Formulario handleSubmit = {handleSubmit} setLibro={setLibro}></Formulario>
    {show && <Tarjeta libro={libro}></Tarjeta>}
    </>
  )
}

export default App
