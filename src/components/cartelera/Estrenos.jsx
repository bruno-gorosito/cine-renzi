import React, { Fragment, useContext } from 'react';
import PeliculaContext from '../../context/peliculaContext';
import CardPelicula from './CardPelicula';
import landscape from '../../imgs/shazam-landscape.jpg'


const Estrenos = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {estrenos} = peliculasContext;

    return ( 
        <Fragment>
            <div className='estreno-img'>
                <img src={landscape} alt='Estreno'/>
            </div>
            <h2 className='text-center pt-4'>Proximos Estrenos</h2>
            <div className="card-container container">
                {estrenos.map(estreno => (
                    <CardPelicula 
                        pelicula={estreno}
                        key={estreno.id}
                    />
                ))}
            </div>
        </Fragment>
     );
}
 
export default Estrenos;