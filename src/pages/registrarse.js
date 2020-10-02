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
              <label for="exampleInputEmail1">Nombre Completo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>
            <form>
              <label for="exampleInputEmail1">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </form>
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

            <div className="btnsRegistrarse">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
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
                    <div class="col">
                      <button
                        type="button"
                        className="btn btn-outline-dark btn-md btn-"
                      >
                        <a href="/">Atras</a>
                      </button>
                    </div>
                    <div class="w-100"></div>
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
