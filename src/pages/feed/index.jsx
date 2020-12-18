import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { petsMock } from "../../_mock/feed";
import iconPerfil from "../../assets/images/accountCircle.svg";
import CardComponent from "../../components/CardComponent";
import HeaderFeed from "../../components/HeaderFeed";
import "./styles.scss";

export default function Feed() {
  const history = useHistory("");
  const [pets, setPets] = useState(petsMock);
  function ClickIcon() {
    history.push("/");
  }

  function filterPetByType(type) {
    const petsFiltered = petsMock.filter((pet) => pet.type === type);
    setPets(petsFiltered);
  }


  return (
    <>
      <header className="container-header">
        <HeaderFeed title="BUSQUEPET" image={iconPerfil} onClick={ClickIcon} />
      </header>
      <div className="container-filter">
        <div className="content-filter">
          <button className="buttonCao" onClick={() => filterPetByType("cao")}>
          </button>
          <button className="buttonGato" onClick={() => filterPetByType("gato")}>
          </button>
        </div>
      </div>
      <section className="container-main">
        {pets.map(({ image, name, age, type, id }) => (
          <CardComponent
            key={id}
            image={image}
            name={name}
            age={age}
            type={type}
          />
        ))}
      </section>
    </>
  );
}
