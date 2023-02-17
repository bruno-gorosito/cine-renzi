import React from 'react';

const CardPelicula = ({pelicula}) => {
    const {nombre, img, horario, dia, sipnosis} = pelicula
    return ( 
        <div className="card">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h4 className="card-title">{nombre}</h4>
                <h5>{dia[0].toUpperCase() + dia.slice(1)} - {horario}</h5>
                <p className="card-text">{sipnosis}</p>
                <a href="#" className="btn btn-primary">Comprar Entrada</a>
            </div>
    </div>
    );
}
 
export default CardPelicula;