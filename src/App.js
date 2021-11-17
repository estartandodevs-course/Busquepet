import React from "react";
import Routes from "./components/Routes";
import "./config/firebase.config";
import GlobalStyles from './styles/GlobalStyles'
import * as S from './StyledApp.js'

function App() {
	return (
		<S.App>
			<GlobalStyles />
			<Routes /> 
		</S.App>
	);
}

export default App;
