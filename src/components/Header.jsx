import React from 'react';
import logo from '../imgs/logo.jpg'

const Header = () => {
    return ( 
        <header>
            <nav className='navbar container'>
                <img src={logo} alt='logo'/>
                <ul className='ul-100'>
                    <li className='navbar-item'>Inicio</li>
                    <li className='navbar-item'>Cartelera/Programación</li>
                    <li className='navbar-item'>Próximos Estrenos</li>
                    <li className='navbar-item'>Contacto</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;