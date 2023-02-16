import React from 'react';

const CardPelicula = ({pelicula}) => {
    const {nombre, img, horario, dia} = pelicula
    return ( 
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt={nombre} />
            </div>
            <h2>{nombre}</h2>
            <p><span>{dia[0].toUpperCase() + dia.slice(1)} </span> - {horario} </p>
        </div>
    );
}
 
export default CardPelicula;