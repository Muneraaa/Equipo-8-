import React from "react";

class olvidocontraseña extends React.Component {
  enviar() {
    alert("Se ha enviado un código de recuperación de cuenta a su email");
  }
  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row fondoInicio__contenedor">
          <div className="col">
            <form>
              <div class="form-group row emailolvido">
                <label for="colFormLabel">Email</label>

                <div>
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="alguien@example.com"
                  />
                </div>
              </div>
              <div className="btnenviarpassword">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-"
                >
                  <span onClick={this.enviar}>Enviar</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-"
                >
                  <a href="logins">Atrás</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default olvidocontraseña;
