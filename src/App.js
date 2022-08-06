
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const contarClick = () =>{
    setNumClicks(numClicks+1);
  }
  const reiniciarContador = () =>{
   setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='freeCodeCampLogoContenedor'>
        <img 
          className='freeCodeCampLogo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedorDelContador'>
        <Contador numClicks= {numClicks} />
        <Boton 
          texto= 'Click'
          esBotonDeClick = {true}
          manejarClick={contarClick} />
        <Boton 
          texto= 'Reinciar'
          esBotonDeClick = {false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
