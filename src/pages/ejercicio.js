import React from "react";
import { useParams } from "react-router-dom";
import infogimnasio from "./data";

const Ejercicio = (props) => {
  let { ejercicio } = useParams();
  const hhh = hola(ejercicio);
  return (
    <section className="contenedorEjercicios">
      <h1>EJERCICIOS</h1>
      <ul className="contenedorEjercicios__lista">
        {hhh.ejercicios.map((elemento, indice) => {
          return (
            <div className="carta">
              <li
                key={indice}
                className="contenedorEjercicios__lista--elemento"
              >
                <p>{elemento.descripcion}</p>
              </li>
              <img src={elemento.imagen} alt="Img"></img>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

const hola = (ejercicio) => {
  let data = {};
  for (let index = 0; index < infogimnasio.length; index++) {
    if (infogimnasio[index].ruta === ejercicio) {
      data = infogimnasio[index];
    }
  }
  return data;
};

export default Ejercicio;
