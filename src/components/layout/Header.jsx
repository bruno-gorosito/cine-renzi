import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';


const Header = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg text-center ubicacion" >
                <div className="container text-center d-flex nav-container">
                    <Link to='/' className="navbar-brand bg-negro text-center" ><img className='img-nav' src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="material-symbols-outlined">
                        menu</span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item bg-negro">
                            <Link to='/' className='nav-link bg-negro active'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/cartelera' className="nav-link bg-negro">Cartelera</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/estrenos' className="nav-link bg-negro" >Próximos Estrenos</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/contacto' className="nav-link bg-negro" >Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;