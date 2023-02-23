import React from 'react';

const CardPelicula = ({pelicula}) => {
    const {nombre, img, horario, sipnosis} = pelicula;

    
    return ( 
        <div className="card">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h4 className="card-title">{nombre}</h4>
                {horario ? <h5>{horario}</h5> : null}
                <p className="card-text">{sipnosis}</p>
                {horario ? <a href="#" className="btn btn-primary">Comprar Entrada</a> : null}
            </div>
        </div>
    );
}


export default CardPelicula;