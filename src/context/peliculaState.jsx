import React, { useReducer } from 'react';
import PeliculaContext from './peliculaContext';
import peliculaReducer from './peliculaReducer';
import pelicula1 from '../imgs/01.jpg';
import pelicula2 from '../imgs/02.jpg';
import pelicula3 from '../imgs/03.jpg';
import pelicula4 from '../imgs/04.jpg';
import lansdcape1 from '../imgs/landscape1.png';
import lansdcape2 from '../imgs/landscape2.jpg';
import lansdcape3 from '../imgs/landscape3.jpg';
import lansdcape4 from '../imgs/landscape4.jpg';


import { OBTENER_DIA } from '../types';

const PeliculaState = props => {
    const initialState = {
        programacion: [
            {dia: 'domingo', funciones: [
                {id: 1, nombre: 'Ant-Man', img: pelicula1, horario: '21:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'},
                {id: 6, nombre: 'Ant-Man', img: pelicula1, horario: '19:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'},
                {id: 16, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'}]},
            {dia: 'lunes', funciones: [
                {id: 2, nombre: 'Avatar', img: pelicula3, horario: '19:30', sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'},
                {id: 9, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'},
                {id: 18, nombre: 'Gato con Botas', img: pelicula2, horario: '15:30',  sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
                {id: 20, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'}]},
            {dia: 'martes', funciones: [
                {id: 15, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30',  sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
                {id: 17, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'}]},
            {dia: 'miercoles', funciones: [
                {id: 5, nombre: 'Avatar', img: pelicula3, horario: '19:30', sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'},
                {id: 13, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30',  sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'},
                {id: 21, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'}]},
            {dia: 'jueves', funciones: [
                {id: 3, nombre: 'Gato con Botas', img: pelicula2, horario: '19:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
                {id: 14, nombre: 'Avatar', img: pelicula3, horario: '15:30', sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'},
                {id: 19, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'}]},
            {dia: 'viernes', funciones: [
                {id: 4, nombre: 'Llaman a la puerta', img: pelicula4, horario: '21:30', sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'},
                {id: 8, nombre: 'Ant-Man', img: pelicula1, horario: '15:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'},
                {id: 10, nombre: 'Avatar', img: pelicula3, horario: '21:30', sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'}]},
            {dia: 'sabado', funciones: [
                {id: 7, nombre: 'Gato con Botas', img: pelicula2, horario: '19:30',  sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
                {id: 11, nombre: 'Gato con Botas', img: pelicula2, horario: '21:30', sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
                {id: 12, nombre: 'Avatar', img: pelicula3, horario: '15:30', sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'}]}
        ],
        estrenos: [],
        peliculas: [
            {id: 1, nombre: 'Ant-Man', img: pelicula1, sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illum quidem nam nihil commodi temporibus atque, et quaerat? Beatae unde nostrum accusantium sapiente porro veritatis odio temporibus non aperiam.'},
            {id: 2, nombre: 'Gato con Botas', img: pelicula2, sipnosis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores blanditiis illo porro tenetur doloremque, culpa hic praesentium nihil doloribus quibusdam explicabo excepturi aliquid et, error tempora repellat officiis accusantium.'},
            {id: 3, nombre: 'Avatar', img: pelicula3, sipnosis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dolorum nostrum error quo numquam ullam quidem delectus nihil magni officia quis illum facilis aliquid minima iusto, molestiae aspernatur voluptatum deleniti!'},
            {id: 4, nombre: 'Llaman a la puerta', img: pelicula4, sipnosis: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corrupti, temporibus rem natus expedita ex tenetur repellendus quisquam similique pariatur consequuntur laudantium, repellat quod voluptas eligendi voluptatum, laborum sunt nihil?'},
        ],
        posters: [
            {id: 1, img: pelicula1, imgLandscape: lansdcape1, nombre: 'Ant-Man'},
            {id: 2, img: pelicula2, imgLandscape: lansdcape2, nombre: 'Gato con Botas'},
            {id: 3, img: pelicula3, imgLandscape: lansdcape3, nombre: 'Avatar'},
            {id: 4, img: pelicula4, imgLandscape: lansdcape4, nombre: 'Llaman a la puerta'},
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
                programacion: state.programacion,
                peliculas: state.peliculas,
                posters: state.posters,
                estrenos: state.estrenos,
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