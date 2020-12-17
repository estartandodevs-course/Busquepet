import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../../pages/feed";
import Filter from "../../pages/filtro";
import CardPet from "../../pages/card-pet";
import ProfilePerson from "../../pages/perfil-adotante";
import RegisterPet from "../../pages/cadastro-do-doador/register-person/register-donor/register-pet";
import RegisterPerson from "../../pages/cadastro-do-doador/register-person/index";
import ProfilePet from "../../pages/perfil-pet";
import Login from "../../pages/login";
import RegisterAdopter from "../../pages/cadastro-do-doador/register-person/adopter-registration/steps";
import RegisterDonor from "../../pages/cadastro-do-doador/register-person/register-donor/steps";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/filtro" component={Filter} />
        <Route exact path="/card-do-Pet" component={CardPet} />
        <Route exact path="/perfil-do-adotante" component={ProfilePerson} />
        <Route exact path="/registro-adotante" component={RegisterAdopter} />
        <Route exact path="/registro-doador" component={RegisterDonor} />
        <Route
          exact
          path="/cadastro-tipo-de-pessoa"
          component={RegisterPerson}
        />
        <Route exact path="/cadastro-do-pet" component={RegisterPet} />
        <Route exact path="/perfil-do-pet" component={ProfilePet} />
      </Switch>
    </BrowserRouter>
  );
}
