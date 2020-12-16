
import React from "react";
import Routes from "./components/Routes";
import "./app.scss";
import "./config/firebase.config";
import "./global.scss";
// import RegisterAdopter1 from "./pages/cadastro-do-doador/cadastro-tipo-de-pessoa/adopter-registration/register-adopter-data";


function App() {
  return (
    <div className="App">
      <Routes />
      {/* <RegisterAdopter1 /> */}
    </div>
  );
}

export default App;
