import React, { useContext } from "react";
import PeliculaContext from "../../context/peliculaContext";

const Inicio = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {} = peliculasContext


    
    return (
        <div className="container evita-header">
        <h1>Todavía no sé que poner aqui chango as</h1>
        </div>
    );
};

export default Inicio;
