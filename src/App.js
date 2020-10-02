import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Logins from "../pages/Logins";
import principal from "../pages/principal";
import registrarse from "../pages/registrarse";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/logins" component={Logins} />
        <Route exact path="/registrarse" component={registrarse} />
        {/* <Route exact path="/Siguiente" component={Logins} /> */}
        {/* <Route exact path="/logins" component={principal} /> */}
        <Route exact path="/inicia" component={principal} />
        {/*<Route exact path="/ btnAtrasInii" component={Logins} />
        <Route exact path="/ atraspri" component={principal} /> */}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
