import React, { useContext } from 'react';
import PeliculaContext from '../context/peliculaContext';


const Barra = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {seleccionarDia} = peliculasContext;

    return ( 

        <ul class="list-group justify-content-center list-group-horizontal-lg">
            <li>
                <button 
                    className="list-group-item rounded"
                    value='domingo'
                    onClick={e => seleccionarDia(e.target.value)}
                >Domingo</button>
            </li>
            <li>
                <button 
                    className='list-group-item  rounded' 
                    value='lunes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Lunes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='martes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Martes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='miercoles'
                    onClick={e => seleccionarDia(e.target.value)}
                >Miércoles</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='jueves'
                    onClick={e => seleccionarDia(e.target.value)}
                >Jueves</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='viernes'
                    onClick={e => seleccionarDia(e.target.value)}
                >Viernes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='sabado'
                    onClick={e => seleccionarDia(e.target.value)}
                >Sábado</button>
            </li>
        </ul>
     );
}
 
export default Barra;