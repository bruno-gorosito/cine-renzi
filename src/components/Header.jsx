import React from 'react';
import logo from '../imgs/logo.jpg'

const Header = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg text-center ubicacion" >
                <div className="container text-center d-flex nav-container">
                    <a className="navbar-brand bg-negro text-center" href="#"><img className='img-nav' src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="material-symbols-outlined">
                        menu</span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item bg-negro">
                            <a className="nav-link bg-negro active" aria-current="page" href="#!">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link bg-negro" href="#!">Cartelera/Programación</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link bg-negro" href="#!">Próximos Estrenos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link bg-negro" href='#!'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;