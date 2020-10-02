import React from "react";
import "../style/style.css";

class Inicio extends React.Component {
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
                <a href="Logins">Inicio de Sesion</a>{" "}
              </button>

              <button type="button" className="btn btn-dark btn-lg btn-block">
                <a href="Registrarse">Registrarme</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
