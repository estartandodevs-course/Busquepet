import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPet } from "@/services/pets.service";
import { PetData, PetData2, PetImage } from "@/screens";

export default function RegisterPet() {
  const [form, setForm] = useState({ id: randomNumberId() });
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  function randomNumberId() {
    const randomNumber = Math.floor(Math.random() * 1000);
    return randomNumber.toString();
  }

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit() {
    addPet(form);
    navigate("/feed");
  }

  return (
    <>
      {step === 0 && (
        <PetData setValue={handleChange} onSubmit={() => setStep(1)} />
      )}
      {step === 1 && (
        <PetData2 setValue={handleChange} onSubmit={() => setStep(2)} />
      )}
      {step === 2 && (
        <PetImage setValue={handleChange} onSubmit={handleSubmit} />
      )}
    </>
  );
}
