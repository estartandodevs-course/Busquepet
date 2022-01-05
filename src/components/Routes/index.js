import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "pages/feed";
import Filter from "pages/filtro";
import CardPet from "pages/card-pet";
import RegisterPet from "pages/cadastro-do-doador/register-person/register-donor/register-pet";
import RegisterPerson from "pages/cadastro-do-doador/register-person/index";
import PerfilPet from "pages/perfil-pet";
import Login from "pages/login";
import Profile from "pages/perfil-doador/perfil-doador00";
import ProfileEdit from "pages/perfil-doador/info-do-doador";
import RegisterAdopter from "pages/cadastro-do-doador/register-person/adopter-registration/steps";
import ContactDonor from "pages/contato-doador-cadastro";
import RegisterDonor from "pages/cadastro-do-doador/register-person/register-donor/steps";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/filtro" component={Filter} />
          <Route exact path="/petCard" component={CardPet} />
          <Route exact path="/contatoDoador" component={ContactDonor} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/perfilEdit" component={ProfileEdit} />
          <Route exact path="/petPerfil/:id" component={PerfilPet} />
          <Route exact path="/petCadastro" component={RegisterPet} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/cadastro-tipo-de-pessoa"
            component={RegisterPerson}
          />
          <Route exact path="/registroAdotante" component={RegisterAdopter} />
          <Route exact path="/registroDoador" component={RegisterDonor} />
        </>
      </Switch>
    </BrowserRouter>
  );
}
