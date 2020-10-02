import React from "react";
import "../style/style.css";

class Logins extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row center fondoInicio__contenedor">
          <div className="col-sm">
            <h1 className="tituloPrincipal"> INICIO DE SESIÓN</h1>

            <form>
              <label for="exampleInputEmail1">Usuario</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>

            <form>
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              ></input>
            </form>
            <button type="button" className="btn btn-outline-dark btnolvcontra">
              <a href="olvidocontra">¿Olvidaste tu contraseña?</a>
            </button>

            <div class="container">
              <div class="row btnsesion">
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg btn-"
                  >
                    <a href="seleccionar">Iniciar</a>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg btn-"
                  >
                    <a href="/">Atrás</a>
                  </button>
                </div>
                <div class="w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Logins;
