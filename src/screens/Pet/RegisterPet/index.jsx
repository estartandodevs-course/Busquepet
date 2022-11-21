import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PetData, PetData2, PetImage } from "@/screens";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";

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

  async function handleSubmit() {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "pets"), {
      ...form,
    });

    console.log("Document written with ID: ", docRef.id);
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
