import { OBTENER_DIA } from "../types";

export default (state, action) => {
    switch(action.type) {

        case OBTENER_DIA:
            return{
                ...state,
                peliculasdia: state.programacion.map(pelicula => pelicula.dia === action.payload ? pelicula.funciones : null).filter(pelicula => pelicula !== null).flat(),
                diaseleccionado: action.payload
            }
        default:
            return state;
    }
}