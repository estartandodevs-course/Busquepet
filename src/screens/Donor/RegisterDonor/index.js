import React, { useState } from "react";
import { Sucess, DonorLocation, DonorContact, DonorData } from "screens";

export default function RegisterDonor() {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }
  return (
    <>
      {step === 0 && (
        <DonorData setValue={handleChange} onSubmit={() => setStep(1)} />
      )}
      {step === 1 && (
        <DonorContact setValue={handleChange} onSubmit={() => setStep(2)} />
      )}
      {step === 2 && (
        <DonorLocation setValue={handleChange} onSubmit={() => setStep(3)} />
      )}
      {step === 3 && <Sucess />}
    </>
  );
}
