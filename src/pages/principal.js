import React from "react";
import "../style/style.css";
/* import brazo from "/images/brazo.jpg";
import brazoPesa from "/images/brazoPesa.jpg";
import abdofacil from "/images/abdofacil.jpg";
import abdodificil from "/images/abdodificil.jpg";
import piernafacil from "/images/piernafacil.jpg";
import piernadificil from "/images/piernadificil.jpg"; */
import data from "./data";

class principal extends React.Component {
  render() {
    return (
      
        <section className="contenedorEjercicios  ">
          <h1>ENTRENATE JMS</h1>
          <div className="contenedorEjercicios__lista">
            {data.infogimnasio.map((elemento, indice) => {
              return (
                <div className="carta">
                  <li
                    key={indice}
                    className="contenedorEjercicios__lista--elemento"
                  >
                    {elemento.nomejercicio}
                  </li>
                  <img src={elemento.imagen} alt="Img"></img>
                  {elemento.ejercicios.map((elemento, indice) => {
                    return (
                      <div>
                        <li key={indice}>{elemento.descripcion}</li>
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    <a href={elemento.ruta}>¿Cómo se hace?</a>{" "}
                  </button>
                </div>
              );
            })}
          </div>
          <button type="button" className="btn btn-dark btn-lg">
            <a href="seleccionar">Atrás</a>
          </button>
        </section>
      
    );
  }
}
export default principal;
