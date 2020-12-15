import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { petsMock } from "../../_mock/feed";
import iconPerfil from "../../assets/images/accountCircle.svg";
import CardComponent from "../../components/CardComponent";
// import filterPet from '../../assets/images/Filter-Pet.png';
import HeaderFeed from "../../components/HeaderFeed";
import "./styles.scss";

export default function Feed() {
  const history = useHistory("");
  const [pets, setPets] = useState(petsMock);
  function ClickIcon() {
    history.push("/login");
  }
  
  function filterPetByType(type) {
	  const petsFiltered = petsMock.filter(pet => pet.type === type)
	  setPets(petsFiltered)
  }

  return (
    <>
      <header className="container-header">
        <HeaderFeed title="BUSQUEPET" image={iconPerfil} onClick={ClickIcon} />
      </header>
      <div className="container-filter">
        <div className="content-filter">
          {/* <img src={filterPet}
                        alt="Filtro do pet"/> */}
          <button onClick={() => filterPetByType("cao")}>Cão</button>
          <button onClick={() => filterPetByType("gato")}>Gato</button>
        </div>
      </div>
      <section className="container-main">
        {pets.map(({image, name, age, type, id}) => (
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
