import React, { useReducer } from 'react';
import PeliculaContext from './peliculaContext';
import peliculaReducer from './peliculaReducer';
import pelicula1 from '../imgs/01.jpg';
import pelicula2 from '../imgs/02.jpg';
import pelicula3 from '../imgs/03.jpg';
import pelicula4 from '../imgs/04.jpg';
import { OBTENER_DIA } from '../types';

const PeliculaState = props => {
    const initialState = {
        peliculas: [
            {id: 1, nombre: 'Ant-Man', img: pelicula1, horario: '21:30', dia: 'domingo'},
            {id: 2, nombre: 'Avatar', img: pelicula3, horario: '19:30', dia: 'lunes'},
            {id: 3, nombre: 'Gato con Botas', img: pelicula2, horario: '19:30', dia: 'jueves'},
            {id: 4, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', dia: 'Viernes'},
            {id: 5, nombre: 'Avatar', img: pelicula3, horario: '19:30', dia: 'miercoles'},
            {id: 6, nombre: 'Ant-Man', img: pelicula1, horario: '21:30', dia: 'domingo'},
            {id: 7, nombre: 'Gato con Botas', img: pelicula2, horario: '19:30', dia: 'sabado'},
            {id: 8, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', dia: 'viernes'},
            {id: 9, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', dia: 'lunes'},
            {id: 10, nombre: 'Avatar', img: pelicula3, horario: '21:30', dia: 'viernes'},
            {id: 11, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30', dia: 'sabado'},
            {id: 12, nombre: 'Avatar', img: pelicula3, horario: '15:30', dia: 'sabado'},
            {id: 13, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', dia: 'miercoles'},
            {id: 14, nombre: 'Avatar', img: pelicula3, horario: '15:30', dia: 'jueves'},
            {id: 15, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30', dia: 'martes'},
            {id: 16, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', dia: 'domingo'},
            {id: 17, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', dia: 'martes'},
            {id: 18, nombre: 'Gato con Botas', img: pelicula2, horario: '15:30', dia: 'lunes'},
            {id: 19, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', dia: 'jueves'},
            {id: 20, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', dia: 'lunes'},
            {id: 21, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30', dia: 'miercoles'},
        ],
        diaseleccionado: '',
        peliculasdia: []
    }

    const [state, dispatch] = useReducer(peliculaReducer, initialState);


    const seleccionarDia = dia => {
        dispatch({
            type: OBTENER_DIA,
            payload: dia
        })
    }

    return (
        <PeliculaContext.Provider
            value={{
                peliculas: state.peliculas,
                diaseleccionado: state.diaseleccionado,
                peliculasdia: state.peliculasdia,
                seleccionarDia
            }}
        >
            {props.children}
        </PeliculaContext.Provider>
    )
}

export default PeliculaState;