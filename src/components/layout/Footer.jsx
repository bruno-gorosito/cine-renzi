import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <ul>
                    <li><Link to='/' className='list-footer bg-negro'>Inicio</Link></li>
                    <li><Link to='/cartelera' className='list-footer bg-negro'>Cartelera</Link></li>
                    <li><Link to='/estrenos' className='list-footer bg-negro'>Próximos Estrenos</Link></li>
                    <li><Link to='/contacto' className='list-footer bg-negro'>Contacto</Link></li>
                </ul>
                <p>© 2023 Bruno A. Gorosito - All Rights Reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;