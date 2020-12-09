import React from 'react';
// import DonorRegister from './pages/cadastro-do-doador/cadastro-tipo-de-pessoa';
import './app.scss';
// import Loading from './pages/tela-de-load';
// import { useState } from 'react';
// import { Select } from './components/select/Index';
// import Icone from './assets/images/Coracao.svg';
import Routes from './components/Routes';
// import LocationData from './pages/cadastro-do-doador/cadastro-dados-localizacao';
// const { Button } = require('./components/button/Index');

function App() {
	// const [person, setPerson] = useState("")

	return (
		<div className="App">
			{/* <Loading /> */}
			{/* <DonorRegister /> */}
			{/* <LocationData/> */}
			<Routes />
			{/* <Button name="Vamos" icon={Icone} class="purple"></Button>
			<Select type="estado" /> */}
		</div>
	);
}

export default App;
