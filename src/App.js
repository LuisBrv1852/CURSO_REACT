import './App.css';
import logoluis from './imagenes/logo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
  const[input,setInput] = useState('');

  const agregarInput = val =>{
    setInput(input+val);
  };

  const calculadoraResultado = () => {
    if(input){
    setInput(evaluate(input));
    }else{
      alert('Pleas input some value');
    }

  }

  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img src={logoluis} className='logo-propio' alt='logo-luis'/>
     </div>
     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>4</Boton>
      <Boton manejarClic={agregarInput}>5</Boton>
      <Boton manejarClic={agregarInput}>6</Boton>
      <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>1</Boton>
      <Boton manejarClic={agregarInput}>2</Boton>
      <Boton manejarClic={agregarInput}>3</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={calculadoraResultado}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>.</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
      <BotonClear manejarClear={()=>setInput('')}>
        Clear
        </BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;