import React, { useEffect } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Contacto from './components/cartelera/Contacto';
import Estrenos from './components/cartelera/Estrenos';
import Principal from './components/cartelera/Cartelera';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import PeliculaState from './context/peliculaState';
import Inicio from './components/cartelera/Inicio';


function App() {

  


  return (
    <PeliculaState>
      <Router basename='/'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/cartelera' element={<Principal/>} />
          <Route exact path='/contacto' element={<Contacto/>} />
          <Route exact path='/estrenos' element={<Estrenos/>} />
        </Routes>
        <Footer />
      </Router>
    </PeliculaState>
  );
}

export default App;
