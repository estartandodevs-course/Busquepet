import Icone from './assets/images/Coracao.svg';
import React from 'react';
import Routes from './components/Routes';
const { Button } = require('./components/button/Index');

function App() {
	return (
		<div className="App">
			<Routes />
			<Button name="Vamos" icon={Icone} class="purple"></Button>
		</div>
	);
}

export default App;
