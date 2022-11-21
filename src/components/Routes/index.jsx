import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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

function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        {/* <Route  path="/filtro" element={Filter} /> */}
        {/* <Route  path="/petCard" element={CardPet} /> */}
        {/* <Route  path="/contatoDoador" element={ContactDonor} /> */}
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/perfilEdit" element={<UserInfo />} />
        {/* <Route  path="/petPerfil/:id" element={PerfilPet} /> */}
        <Route path="/petCadastro" element={<RegisterPet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-tipo-de-pessoa" element={<Decision />} />
        <Route path="/registroAdotante" element={<RegisterAdopter />} />
        <Route path="/registroDoador" element={<RegisterDonor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;
