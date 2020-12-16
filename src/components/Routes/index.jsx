import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from '../../pages/feed';
import Filter from '../../pages/filtro';
import CardPet from '../../pages/card-pet';
import ProfilePerson from '../../pages/perfil-adotante';
import RegisterPet from '../../pages/register-pet';
import RegisterAdopter from '../../pages/cadastro-do-doador/cadastro-tipo-de-pessoa';
import DonorRegister from '../../pages/cadastro-do-doador/cadastro-tipo-de-pessoa';
import ContactDetails from '../../pages/cadastro-do-doador/cadastro-dados-contato';
import ProfilePet from '../../pages/perfil-pet';
import Login from '../../pages/login';
import FlowProfile01_2 from '../../pages/perfil-doador/perfil-doador00/perfil-doador01.2';
import FlowProfile00 from '../../pages/perfil-doador/perfil-doador00';
import InfoProfile from '../../pages/perfil-doador/info-do-doador';
import InfoProfileEdit from '../../pages/perfil-doador/info-do-doador-edit';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/filtro" component={Filter} />
				<Route exact path="/card-do-Pet" component={CardPet} />
				<Route exact path="/perfil-do-adotante" component={ProfilePerson} />
				<Route
					exact
					path="/cadastro-tipo-de-pessoa"
					component={RegisterAdopter}
				/>
				<Route exact path="/cadastro-do-pet" component={RegisterPet} />
				<Route exact path="/cadastro-do-doador" component={DonorRegister} />
				<Route exact path="/dados-do-contato" component={ContactDetails} />
				<Route exact path="/perfil-do-pet" component={ProfilePet} />
				<Route exact path="/info-do-doador" component={InfoProfile} />
				<Route exact path="/info-edit-do-doador" component={InfoProfileEdit} />
				<Route exact path="/perfil-do-doador00" component={FlowProfile00} />
				<Route exact path="/perfil-do-doador01" component={FlowProfile01_2} />
			</Switch>
		</BrowserRouter>
	);
}
