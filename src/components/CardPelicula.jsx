import React from 'react';

const CardPelicula = ({pelicula}) => {
    const {nombre, img, horario, dia, sipnosis} = pelicula
    return ( 
        <div class="card">
            <img src={img} class="card-img-top" alt={nombre} />
            <div class="card-body">
                <h4 class="card-title">{nombre}</h4>
                <h5>{dia[0].toUpperCase() + dia.slice(1)} - {horario}</h5>
                <p class="card-text">{sipnosis}</p>
                <a href="#" class="btn btn-primary">Comprar Entrada</a>
            </div>
    </div>
    );
}
 
export default CardPelicula;