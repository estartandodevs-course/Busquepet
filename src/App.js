
import React from "react";
import Routes from "./components/Routes";
import "./app.scss";
import "./config/firebase.config";
import "./global.scss";
import PerfilPet from "./pages/perfil-pet/detalhe-perfil-pet"


function App() {
	return (
		<div className="App">
			<PerfilPet /> 
		</div>
	);
}

export default App;
