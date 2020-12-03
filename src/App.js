import React from 'react';
import {Select} from './components/select/Index';
import Icone from './assets/images/Coracao.svg';
import Routes from './components/Routes';
const { Button } = require('./components/button/Index');

function App() {
	return (
		<div className="App">
			<Routes />
			<Button name="Vamos" icon={Icone} class="purple"></Button>
      <Select type="estado"/>
		</div>
	);
}

export default App;
