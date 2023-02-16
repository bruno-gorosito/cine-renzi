import { OBTENER_DIA } from "../types";

export default (state, action) => {
    switch(action.type) {

        case OBTENER_DIA:
            return{
                ...state,
                peliculasdia: state.peliculas.filter(pelicula => pelicula.dia === action.payload),
                diaseleccionado: action.payload
            }
        default:
            return state;
    }
}