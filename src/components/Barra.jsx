import React, { useContext } from 'react';
import PeliculaContext from '../context/peliculaContext';


const Barra = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {seleccionarDia} = peliculasContext;

    const elegirDia = e => {
        seleccionarDia(e.target.value);
        let claseActiva = document.getElementsByClassName('active');
        for (let i = 0; i < claseActiva.length; i++ ) {
            claseActiva[i].classList.remove('active');
        } 
        document.getElementById(`${e.target.value}`).classList.add('active');
    }

    return ( 

        <ul class="list-group justify-content-center list-group-horizontal-lg">
            <li>
                <button 
                    className="list-group-item rounded"
                    value='domingo'
                    id='domingo'
                    onClick={e => elegirDia(e)}
                >Domingo</button>
            </li>
            <li>
                <button 
                    className='list-group-item  rounded' 
                    value='lunes'
                    id='lunes'
                    onClick={e => elegirDia(e)}
                >Lunes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='martes'
                    id='martes'
                    onClick={e => elegirDia(e)}
                >Martes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='miercoles'
                    id='miercoles'
                    onClick={e => elegirDia(e)}
                >Miércoles</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='jueves'
                    id='jueves'
                    onClick={e => elegirDia(e)}
                >Jueves</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='viernes'
                    id='viernes'
                    onClick={e => elegirDia(e)}
                >Viernes</button>
            </li>
            <li>
                <button 
                    className='list-group-item rounded' 
                    value='sabado'
                    id='sabado'
                    onClick={e => elegirDia(e)}
                >Sábado</button>
            </li>
        </ul>
     );
}
 
export default Barra;