import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { addPet } from "../../../../../services/pets.service";
import CharacteristicsPet from "./steps/characteristics-pet";
import DataPet from "./steps/data-pet";
import ImagePet from "./steps/image-pet";

export default function RegisterPet() {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);
  const history = useHistory();

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form)
  }

  function handleSubmit() {
    addPet(form);
    history.push("/feed");
  }

  return (
    <>
      {step === 0 && (
        <CharacteristicsPet
          setValue={handleChange}
          onSubmit={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <DataPet setValue={handleChange} onSubmit={() => setStep(2)} />
      )}
      {step === 2 && (
        <ImagePet setValue={handleChange} onSubmit={handleSubmit} />
      )}
    </>
  );
}
