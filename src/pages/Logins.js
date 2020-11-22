import React from "react";
import "../style/style.css";
import axios from "axios";
import Cookies from "universal-cookie";

const baseurl = "http://localhost:3001/resgistro";
const cookies = new Cookies();

let iniciarSesion = async () =>
  await axios
    .get(baseurl, {
      params: {
        usuario: this.state.form.usuario,
        contraseña: this.state.form.contraseña
      }
    })
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      if (response.length > 0) {
        var respuesta = response[0];
        cookies.set("id", respuesta.id, { path: "/" });
        cookies.set("nombre_completo", respuesta.nombre_completo, {
          path: "/"
        });
        cookies.set("usuario", respuesta.usuario, { path: "/" });
        cookies.set("contraseña", respuesta.contraseña, { path: "/" });
        cookies.set("email", respuesta.email, { path: "/" });

        alert(`Bienvenido ${respuesta.usuario}`);
        window.location.href = "./principal";
      } else {
        alert("El usuario o la contraseña no son correctos");
      }
    })
    .catch((error) => {
      console.log(error);
    });
class Logins extends React.Component {
  state = {
    form: {
      usuario: "",
      contraseña: ""
    }
  };
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row center fondoInicio__contenedor">
          <div className="col-sm">
            <h1 className="tituloPrincipal"> INICIO DE SESIÓN</h1>

            <form>
              <label htmlFor="exampleInputEmail1">Usuario</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="usuario"
                onChange={this.handleChange}
              ></input>
            </form>

            <form>
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="contraseña"
                onChange={this.handleChange}
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
                    onClick={() => this.iniciarSesion()}
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
}
export default Logins;
