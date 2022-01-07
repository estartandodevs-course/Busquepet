import React, { useState } from "react";

import { AdopterLocation, AdopterData, Feed } from "screens";

export default function RegisterAdopter() {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <>
      {step === 0 && (
        <AdopterData setValue={handleChange} onSubmit={() => setStep(1)} />
      )}
      {step === 1 && (
        <AdopterLocation setValue={handleChange} onSubmit={() => setStep(2)} />
      )}
      {step === 2 && <Feed />}
    </>
  );
}
