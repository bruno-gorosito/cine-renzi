import React from 'react';


const FormContacto = () => {
    return ( 
        <form
            className='pt-4 form-contacto'
        >
            <h2 className='pt-4'>Contáctenos</h2>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Juan Perez" required />
                        <label htmlFor="floatingInput">Nombre y apellido</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                <label htmlFor="floatingTextarea">Mensaje</label>
            </div>
            <div className="d-grid gap-2 mb-3">
                <button className="btn btn-dark bg-negro" type="submit">Button</button>
            </div>

        </form>
    );
}
 
export default FormContacto;