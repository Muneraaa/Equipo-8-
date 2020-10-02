import React from "react";
import "../style/style.css";

class seleccionar extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row fondoInicio__contenedor">
          <div className="col">
            <h1 className="tituloPrincipal">ENTRENATE CON JMS</h1>
          </div>

          <div className="w-100"></div>

          <div className="col">
            <div className="btnInicio">
              <button type="button" className="btn btn-dark btn-lg btn-block">
                <a href="inicia">Seleccionar Rutina</a>{" "}
              </button>

              <button type="button" className="btn btn-dark btn-lg btn-block">
                <a href="recordatorio">Seleccionar o Crear Recordatorio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default seleccionar;
