import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Feed from '../../pages/feed'
import Filter from '../../pages/filtro'
import CardPet from '../../pages/card-pet'
import ProfilePerson from '../../pages/perfil-adotante'
import RegisterPet from '../../pages/cadastro-do-pet'
import RegisterAdopter from '../../pages/cadastro-do-doador'
import DonorRegister from '../../pages/cadastro-do-doador/cadastro-tipo-de-pessoa'
import RegisterPet1 from "../../pages/cadastro-do-pet/cadastro-do-pet-info1";
import RegisterPet2 from '../../pages/cadastro-do-pet/cadastro-do-pet-info2'
import ContactDetails from '../../pages/cadastro-do-doador/cadastro-dados-contato'
import ProfilePet from '../../pages/perfil-pet/detalhe-perfil-pet'
import Login from '../../pages/login'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Feed} />
                <Route exact path="/filtro" component={Filter} />
                <Route exact path="/card-do-Pet" component={CardPet} />
                <Route exact path="/perfil-do-adotante" component={ProfilePerson} />
                <Route exact path="/cadastro-do-adotante" component={RegisterAdopter} />
                <Route exact path="/cadastro-do-pet" component={RegisterPet} />
                <Route exact path="/cadastro-do-doador" component={DonorRegister} />
                <Route exact path="/cadastro-do-pet-info1" component={RegisterPet1} />
                <Route exact path="/cadastro-do-pet-info2" component={RegisterPet2} />
                <Route exact path="/dados-do-contato" component={ContactDetails} />
                <Route exact path="/perfil-do-pet" component={ProfilePet} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
