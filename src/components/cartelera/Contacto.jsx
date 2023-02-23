import React from 'react';
import FormContacto from './FormContacto';
import Mapa from './Mapa';

const Contacto = () => {
    return ( 
        <div className="container text-center evita-header contacto">
            <h2>Cine Renzi</h2>
            <h3>Av. Besares 151 - La Banda - Santiago del Estero</h3>
            <Mapa />
            <FormContacto />
        </div>
     );
}
 
export default Contacto;