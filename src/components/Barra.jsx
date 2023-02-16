import React, { useContext } from 'react';
import PeliculaContext from '../context/peliculaContext';


const Barra = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {seleccionarDia} = peliculasContext;

    return ( 
        <ul className='dias'>
            <li>
                <button 
                    className='btn-dia' 
                    value='domingo'
                    onClick={e => seleccionarDia(e.target.value)}
                >Domingo</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='lunes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Lunes</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='martes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Martes</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='miercoles'
                    onClick={e => seleccionarDia(e.target.value)}
                >Miércoles</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='jueves'
                    onClick={e => seleccionarDia(e.target.value)}
                >Jueves</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='viernes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Viernes</button>
            </li>
            <li>
                <button 
                    className='btn-dia' 
                    value='sabado'
                    onClick={e => seleccionarDia(e.target.value)}
                >Sábado</button>
            </li>
        </ul>
     );
}
 
export default Barra;