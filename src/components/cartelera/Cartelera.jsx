import React, { useContext, useState, useEffect, Fragment } from 'react';
import PeliculaContext from '../../context/peliculaContext';
import Barra from './Barra';
import CardPelicula from './CardPelicula';
import Carrusel from './Carrusel';


const Principal = () => {
  

    const peliculasContext = useContext(PeliculaContext);
    const {peliculas, peliculasdia, programacion, diaseleccionado} = peliculasContext;

    const [peliculasActual, setPeliculasActual] = useState([]);

    
    useEffect(() => {
        if (peliculasdia) {
            setPeliculasActual(peliculasdia);
        }
    }, [diaseleccionado])

    return ( 
        <Fragment>
            <Carrusel />
            <div className='container pt-4'>
                <Barra />
                {diaseleccionado 
                    ? <h2 className='text-center mt-4'>{diaseleccionado[0].toUpperCase() + diaseleccionado.slice(1)}</h2>
                    : <h2 className='text-center mt-4'>Seleccione el día</h2>}
                <div className='card-container'>
                    {peliculasActual.length !== 0
                        ? (peliculasActual.map(pelicula => (
                            <CardPelicula
                                pelicula={pelicula}
                                key={pelicula.id}
                            />
                        )))
                        : (peliculas.map(pelicula => (
                            <CardPelicula
                                pelicula={pelicula}
                                key={pelicula.id}
                            />
                            )))
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Principal;