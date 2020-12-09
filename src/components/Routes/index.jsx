
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../../pages/feed";
import Filter from "../../pages/filtro";
import CardPet from "../../pages/card-pet";
import ProfilePerson from "../../pages/perfil-adotante";
import RegisterPet from "../../pages/cadastro-do-pet";
import RegisterAdopter from "../../pages/cadastro-do-adotante";
import DonorRegister from "../../pages/cadastro-do-doador/cadastro-tipo-de-pessoa";
import RegisterPersonPhysical from "../../pages/cadastro-do-doador/cadastro-pessoa-fisica";
import RegisterLegalPerson from "../../pages/cadastro-do-doador/cadastro-pessoa-juridica";
import ProfilePet from "../../pages/perfil-pet";
import Login from "../../pages/login";
import PersonData from "../../pages/cadastro-do-doador/cadastro-dados-da-pessoa";
import RegisterPet1 from "../../pages/cadastro-do-pet/cadastro-do-pet-info1";

export default function Routes() {
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
        <Route exact path="/perfil-do-pet" component={ProfilePet} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/cadastro-pessoa-fisica"
          component={RegisterPersonPhysical}
        />
        <Route
          exact
          path="/cadastro-pessoa-juridica"
          component={RegisterLegalPerson}
        />
        <Route exact path="/dados-da-pessoa" component={PersonData} />
        <Route exact path="/cadastro-pet-info1" component={RegisterPet1} />
      </Switch>
    </BrowserRouter>
  );
}
