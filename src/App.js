import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import nuevolog from './imagenes/Mi-proyecto.png'

function App() {

const [estado, setEstado] = useState(0)

  const manejarClic=()=>{
      setEstado(estado+1);
  }
  
  const reiniciarcontador =()=>{
    setEstado(0);
  }

  return (
    <div className="App">
      <div className='contendor-del-logo'>
         <img className='logodelog' src={nuevolog} alt='esto es un log' />
      </div>
      <div className='contenedor-boton' >
        <Contador numClics={estado} />
         <Boton
          texto='Clics'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
         <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarcontador}/>
      </div>
         
      
    </div>
         );
}

export default App;
