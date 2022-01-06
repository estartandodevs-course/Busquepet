import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import iconPerfil from "assets/images/accountCircle.svg";
import { FeedHeader, CardComponent } from "components";
import "./styles.scss";
// import { getPets } from "services/pets.service";

export default function Feed() {
  const history = useHistory("");
  const [pets, setPets] = useState([]);

  //   function ClickIcon() {
  //     history.push("/perfil");
  //   }

  //   function filterPetByType(type) {
  //     const petsResponse = getPets();
  //     const petsFiltered = petsResponse.filter((pet) => pet.typePet === type);
  //     setPets(petsFiltered);
  //   }

  //   function redirectToPetProfile(id) {
  //     history.push(`/perfil-do-pet/${id}`);
  //   }

  //   useEffect(() => {
  //     const petsResponse = getPets();
  //     setPets(petsResponse);
  //   }, []);
  //   console.log(pets);

  return (
    <>
      <header className="container-header">
        <FeedHeader
          title="BUSQUEPET"
          image={iconPerfil}
          onClick={console.log("a")}
        />
      </header>
      <div className="container-filter">
        <div className="content-filter">
          <button className="buttonCao" onClick={() => console.log("a")} />
          <button className="buttonGato" onClick={() => console.log("a")} />
        </div>
      </div>
      <section className="container-main">
        {/* {pets.map(({ imagePet, namePet, agePet, typePet, id }, index) => (
          <CardComponent
            key={index}
            image={imagePet}
            name={namePet}
            age={agePet}
            type={typePet}
            onClick={() => redirectToPetProfile(id)}
          />
        ))} */}
      </section>
    </>
  );
}
