import React, { useContext } from 'react';
import PeliculaContext from '../context/peliculaContext';


const Presentacion = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {posters} = peliculasContext

    return ( 
        <div>
            <ul className='presentacion'>
                {posters.map(poster => (
                    <li><img src={poster.img} alt={poster.nombre}/></li>
                ))}
            </ul>
        </div>
    );
}

export default Presentacion;