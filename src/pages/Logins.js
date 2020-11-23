import React, { useState } from "react";
import "../style/style.css";
import Axios from "axios";

export default function PrimeraPregunta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const R1 = (event) => {
    event.preventDefault();
    Axios.post("https://xhh1k.sse.codesandbox.io/Login", {
      //Axios.post("http://localhost:3001/api/register", {      userEmail: userEmailReg,
      EMAIL: email,
      CONTRASENA: password
    }).then((response) => {
      console.log(response.data);
      if (response.data.message === "Bienvenido") {
      } else {
        console.log("Error");
      }
    });
  };

  return (
    <div className="container-fluid fondoInicio">
      <div className="row center fondoInicio__contenedor">
        <div className="col-sm">
          <h1 className="tituloPrincipal"> INICIO DE SESIÓN</h1>

          <form onSubmit={R1}>
            <label htmlFor="exampleInputEmail1">Usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="usuario"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </form>
          <button type="button" className="btn btn-outline-dark btnolvcontra">
            <a href="olvidocontra">¿Olvidaste tu contraseña?</a>
          </button>

          <div className="container">
            <div className="row btnsesion">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg btn-"
                  onClick={() => this.iniciarSesion ()}
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
              <div className="w-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
