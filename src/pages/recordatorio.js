import React from "react";
import "../style/style.css";
import data from "./data";

class seleccionar extends React.Component {
  enviar() {
    alert(
      "Su Recordatorio ha sido enviado a su correo y guardado con exito ¡Animo!"
    );
  }
  render() {
    console.log(data.diasdelasemana);
    return (
      <div className="container-fluid">
        <div className="row containerRecordatorio">
          <div className="col">
            <h1 className="tituloPrincipal recordatorio">ENTRENATE CON JMS</h1>
          </div>

          <div className="w-100">
            <h3 className="tituloEntre">
              Selecciona los días y la hora para tu entrenamiento.
            </h3>

            {data.diasdelasemana.map((elemento) => {
              return (
                <div className="diasyhoras">
                  <div className="form-check btnseleccion">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />

                    <label className="form-check-label" for="defaultCheck1">
                      {elemento}
                    </label>
                  </div>
                  <div>
                    <input type="time" id="appt" name="appt" />
                  </div>
                </div>
              );
            })}
          </div>
          <div class="container">
            <div class="row btnsesion">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-"
                >
                  <span onClick={this.enviar}>Guardar</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-"
                >
                  <a href="seleccionar">Atrás</a>
                </button>
              </div>
              <div class="w-100"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default seleccionar;
