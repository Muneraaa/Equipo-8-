import React from "react";
import "../style/style.css";

class registrarse extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row fondoInicio__contenedor">
          <div className="col-sm">
            <h1 class="tituloPrincipal"> REGISTRARSE </h1>

            <form>
              <label htmlFor="exampleInputEmail1">Nombre Completo</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>
            <form>
              <label htmFor="exampleInputEmail1">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>
            <form>
              <label htmFor="exampleInputEmail1">Usuario</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>
            <form>
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              ></input>
            </form>

            <div className="btnsRegistrarse">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <button
                        class="Boton2"
                        type="button"
                        className="btn btn-outline-dark btn-md"
                      >
                        <a href="logins">Iniciar sesión</a>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-outline-dark btn-md btn-"
                      >
                        <a href="/">Atras</a>
                      </button>
                    </div>
                    <div className="w-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default registrarse;
