import React, { useContext } from 'react';
import PeliculaContext from '../context/peliculaContext';


const Barra = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {seleccionarDia} = peliculasContext;

    const elegirDia = e => {
        const claseActivas = document.getElementsByClassName('activa');
        for (let i = 0; i < claseActivas.length; i++){
            if (claseActivas[i].tagName === 'BUTTON') {
                claseActivas[i].classList.remove('activa');
            }
        }
        document.getElementById(`${e.target.value}`).classList.add('activa')
        seleccionarDia(e.target.value);
    }

    return ( 

        <ul className="list-group justify-content-center list-group-horizontal-lg">
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