import React, { useContext, useState, useEffect } from 'react';
import PeliculaContext from '../context/peliculaContext';
import Barra from './Barra';
import CardPelicula from './CardPelicula';



const Principal = () => {

    

    const peliculasContext = useContext(PeliculaContext);
    const {peliculas, peliculasdia, diaseleccionado, seleccionarDia} = peliculasContext;

    
    const [peliculasActual, setPeliculasActual] = useState([]);

    useEffect(() => {
        if (peliculasdia.length !== 0) {
            setPeliculasActual(peliculasdia)
        } else {
            setPeliculasActual(peliculas)
        }
    }, [diaseleccionado])

    return ( 
        <div className='container mt-4'>
            <Barra />
            {diaseleccionado 
                ? <h2 className='text-center mt-4'>Peliculas del día {diaseleccionado[0].toUpperCase() + diaseleccionado.slice(1)}</h2>
                : <h2 className='text-center mt-4'>Peliculas</h2>}
            <div className='card-container'>
                {peliculasActual.length !== 0
                    ? (peliculasActual.map(pelicula => (
                        <CardPelicula
                            pelicula={pelicula}
                            key={pelicula.id}
                        />
                    )))
                    : <h2>No hay Peliculas</h2>
                }
            </div>
        </div>
    );
}

export default Principal;