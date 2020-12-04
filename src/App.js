import React from 'react';
import RegisterAdopter from './pages/cadastro-do-adotante/cadastro-tipo-de-pessoa';
// import { useState } from 'react';
// import { Select } from './components/select/Index';
// import Icone from './assets/images/Coracao.svg';
// import Routes from './components/Routes';
// const { Button } = require('./components/button/Index');


function App() {
	// const [person, setPerson] = useState("")

	return (
		<div className="App">
			<RegisterAdopter />
			{/* <Routes />
			<Button name="Vamos" icon={Icone} class="purple"></Button>
			<Select type="estado" />
			 */}
		</div>
	);
}

export default App;
