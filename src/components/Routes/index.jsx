import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  RegisterPet,
  Decision,
  Feed,
  Login,
  RegisterDonor,
  RegisterAdopter,
  UserProfile,
  UserInfo,
} from "@/screens";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/feed" component={Feed} />
          {/* <Route exact path="/filtro" component={Filter} /> */}
          {/* <Route exact path="/petCard" component={CardPet} /> */}
          {/* <Route exact path="/contatoDoador" component={ContactDonor} /> */}
          <Route exact path="/perfil" component={UserProfile} />
          <Route exact path="/perfilEdit" component={UserInfo} />
          {/* <Route exact path="/petPerfil/:id" component={PerfilPet} /> */}
          <Route exact path="/petCadastro" component={RegisterPet} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro-tipo-de-pessoa" component={Decision} />
          <Route exact path="/registroAdotante" component={RegisterAdopter} />
          <Route exact path="/registroDoador" component={RegisterDonor} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
