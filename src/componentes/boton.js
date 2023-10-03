import React from "react";
import '../stylesheets/boton.css';

function boton(props){
 const esOperador = valor =>{
  return isNaN(valor) && (valor !== '.') && (valor !== '=' );
 };
  return(
    <div
    className={`boton-contenedor ${esOperador(props.children)? 'operador' : null}`}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
};

export default boton;