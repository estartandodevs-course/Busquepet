import React from 'react';
import RadioButton from './components/RadioButton'
import { useState } from 'react';
// import { Select } from './components/select/Index';
// import Icone from './assets/images/Coracao.svg';
import Routes from './components/Routes';
// const { Button } = require('./components/button/Index');

function App() {
	const [person, setPerson] = useState("")

	return (
		<div className="App">

			<Routes />
			{/* <Button name="Vamos" icon={Icone} class="purple"></Button>
			<Select type="estado" /> */}
			{/* <RadioButton text="Pessoa Física" name="typePerson" id="Pessoa Física" onChange={setPerson} />
			<RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="Pessoa Jurídica (ONG)" onChange={setPerson} /> */}
			
			{/* <button onClick={() => console.log(person)}>Proximo</button> */}
		</div>
	);
}

export default App;
