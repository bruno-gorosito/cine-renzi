import React from 'react';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Principal from './components/Principal';
import PeliculaState from './context/peliculaState';


function App() {
  return (
    <PeliculaState>
      <Header />      
      <Carrusel />
      <Principal />
      <Footer />
    </PeliculaState>
  );
}

export default App;