import React, { Fragment } from 'react';
import lansdcape1 from '../../imgs/landscape1.png';
import lansdcape2 from '../../imgs/landscape2.jpg';
import lansdcape3 from '../../imgs/landscape3.jpg';
import lansdcape4 from '../../imgs/landscape4.jpg';

const Carrusel = () => {
    return ( 
        <Fragment>
            <div className='contenedor-carrusel'>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={lansdcape1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={lansdcape2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={lansdcape3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={lansdcape4} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"  data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

export default Carrusel;