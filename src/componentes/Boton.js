import React from 'react';
import '../hoja-de-estilos/estilos.css';
  
function Boton({texto,esBotonDeClic,manejarClic}){
    return (
        <button
        className={esBotonDeClic ? 'boton-Clic' : 'boton-Delet' }
        onClick={manejarClic}>
         {texto}
        </button>
    )
}

export default Boton;