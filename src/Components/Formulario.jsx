import React from 'react'

const Formulario = ({setLibro, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre del libro</label>
            <input type='text' onChange={(e) => setLibro((prevState) => ({...prevState, name: e.target.value}))}></input>
            <label>Nombre del autor</label>
            <input type='text' onChange={(e) => setLibro((prevState) => ({...prevState, autor: e.target.value}))}></input>
            <button type='submit'>Mostrar tarjeta</button>
        </form>
        
    )
}

export default Formulario