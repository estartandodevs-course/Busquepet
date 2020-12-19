import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import iconPerfil from "../../assets/images/accountCircle.svg";
import CardComponent from "../../components/CardComponent";
import HeaderFeed from "../../components/HeaderFeed";
import CadastroModal from "../../components/CadastroModal";
import "./styles.scss";
import { onAuthStateChange } from "../../services/auth.service";
import { getPets } from "../../services/pets.service";

export default function Feed() {
  const history = useHistory("");
  const [pets, setPets] = useState([]);
  const [isItAble, setIsItAble] = useState(false);

  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => unsubscribe();
  }, []);

  function closeSemCadastro() {
    setIsItAble(false);
  }

  function ClickIcon() {
    if (user.loggedIn) {
      history.push("/perfil");
    } else {
      setIsItAble(true);
    }
  }

  function filterPetByType(type) {
    const petsResponse = getPets();
    const petsFiltered = petsResponse.filter((pet) => pet.typePet === type);
    setPets(petsFiltered);
  }

  useEffect(() => {
    const petsResponse = getPets();
    setPets(petsResponse);
  }, []);

  return (
    <>
      <header className="container-header">
        <HeaderFeed title="BUSQUEPET" image={iconPerfil} onClick={ClickIcon} />
      </header>
      <div className="container-filter">
        <div className="content-filter">
          <button
            className="buttonCao"
            onClick={() => filterPetByType("cao")}
          />
          <button
            className="buttonGato"
            onClick={() => filterPetByType("gato")}
          />
        </div>
      </div>
      <section className="container-main">
        {pets.map(({ imagePet, namePet, agePet, typePet, id }, index) => (
          <CardComponent
            key={index}
            image={imagePet}
            name={namePet}
            age={agePet}
            type={typePet}
          />
        ))}
      </section>
      {isItAble && (
        <CadastroModal
          close={closeSemCadastro}
          text="Para você conseguir acessar o perfil é necessario fazer um cadastro."
        />
      )}
    </>
  );
}
