import React, { useState } from 'react'
import Feed from '../../../../feed';
import RegisterAdopterData from './register-adopter-data'
import RegistratLocation from './registrat-location'

export default function RegisterAdopter() {
    const [form, setForm] = useState({});
    const [step, setStep] = useState(0);

    function handleChange(name, value) {
        setForm({
          ...form,
          [name]: value,
        });
        console.log(form)
      }
    return (
        <>
        {(step === 0 && <RegisterAdopterData setValue={handleChange} onSubmit={() => setStep(1)} />)}
        {(step === 1 && <RegistratLocation setValue={handleChange} onSubmit={() => setStep(2)}/>)} 
        {(step === 2 && <Feed/>)} 
        </>
    )
}
