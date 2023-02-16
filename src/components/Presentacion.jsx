import React from 'react';
import pelicula1 from '../imgs/01.jpg';
import pelicula2 from '../imgs/02.jpg';
import pelicula3 from '../imgs/03.jpg';
import pelicula4 from '../imgs/04.jpg';

const Presentacion = () => {
    return ( 
        <ul className='presentacion'>
            <li><img src={pelicula1}/></li>
            <li><img src={pelicula2}/></li>
            <li><img src={pelicula3}/></li>
            <li><img src={pelicula4}/></li>
        </ul>
    );
}

export default Presentacion;