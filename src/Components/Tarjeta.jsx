import React from "react";

const Tarjeta = ({libro}) => {
    return(
        <div className='tarjeta'>
            <h2>Nombre del libro: {libro.name}</h2>
            <h3>Nombre del autor: {libro.autor}</h3>
        </div>
    )
}

export default Tarjeta