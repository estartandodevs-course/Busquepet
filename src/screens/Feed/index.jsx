import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconPerfil from "@/assets/images/accountCircle.svg";
import { FeedHeader, CardComponent } from "@/components";
import "./styles.scss";
import { getPets } from "@/services/pets.service";

export default function Feed() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  function ClickIcon() {
    navigate("/perfil");
  }

  async function resultPets() {
    const result = await getPets();
    setPets(result);
  }

  useEffect(() => {
    resultPets();
  }, []);

  //   function filterPetByType(type) {
  //     const petsResponse = getPets();
  //     const petsFiltered = petsResponse.filter((pet) => pet.typePet === type);
  //     setPets(petsFiltered);
  //   }

  function redirectToPetProfile(id) {
    navigate(`/perfil-do-pet/${id}`);
  }

  //   useEffect(() => {
  //     const petsResponse = getPets();
  //     setPets(petsResponse);
  //   }, []);
  //   console.log(pets);

  return (
    <>
      <header className="container-header">
        <FeedHeader title="BUSQUEPET" image={iconPerfil} onClick={ClickIcon} />
      </header>
      <div className="container-filter">
        <div className="content-filter">
          <button className="buttonCao" onClick={() => console.log("a")} />
          <button className="buttonGato" onClick={() => console.log("a")} />
        </div>
      </div>
      <section className="container-main">
        {pets.map(({ image, name, age, type, id }, index) => (
          <CardComponent
            key={index}
            image={image}
            name={name}
            age={age}
            type={type}
            onClick={() => redirectToPetProfile(id)}
          />
        ))}
      </section>
    </>
  );
}
