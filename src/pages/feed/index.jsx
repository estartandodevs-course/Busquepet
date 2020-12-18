import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import iconPerfil from "../../assets/images/accountCircle.svg";
import CardComponent from "../../components/CardComponent";
import HeaderFeed from "../../components/HeaderFeed";
import "./styles.scss";
import { getPets } from "../../services/pets.service";

export default function Feed() {
  const history = useHistory("");
  const [pets, setPets] = useState([]);

  function ClickIcon() {
    history.push("/");
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
          ></button>
          <button
            className="buttonGato"
            onClick={() => filterPetByType("gato")}
          ></button>
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
    </>
  );
}
