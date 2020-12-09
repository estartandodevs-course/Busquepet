import React from 'react';
// import DonorRegister from './pages/cadastro-do-doador/cadastro-tipo-de-pessoa';
import './app.scss'
// import { useState } from 'react';
// import { Select } from './components/select/Index';
// import Icone from './assets/images/Coracao.svg';
// import Routes from './components/Routes';
// import LocationData from './pages/cadastro-do-doador/cadastro-dados-localizacao';
import PetDetail from './pages/perfil-pet/detalhe-perfil-pet/index';
import Melzinha from './assets/images/Melzinha.png'
// const { Button } = require('./components/button/Index');


function App() {
	// const [person, setPerson] = useState("")

	return (
		<div className="App">
			{/* <DonorRegister /> */}
			{/* <LocationData/> */}
			<PetDetail titleName="Melzinha" dogImage={Melzinha} description="A Melzinha foi encontrada próximo à minha casa, porém não tenho condinções de cuidar dela, já tenho animais em casa. Ela é muito dócil e se adapta muito rápido ao ambiente."></PetDetail>
			{/* <Routes /> */}
			{/* <Button name="Vamos" icon={Icone} class="purple"></Button>
			<Select type="estado" /> */}
			
		</div>
	);
}

export default App;
