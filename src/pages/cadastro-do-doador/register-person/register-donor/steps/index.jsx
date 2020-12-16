import React, { useState } from 'react'
import DonorPersonData from '../steps/donor-person-data'
import DonorContact from '../steps/donor-contact'
import DonorLocation from '../steps/donor-location'
import SucessScreen from './sucess-screen';

export default function RegisterDonor() {
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
        {(step === 0 && <DonorPersonData setValue={handleChange} onSubmit={() => setStep(1)} />)}
         {(step === 1 && <DonorContact setValue={handleChange} onSubmit={() => setStep(2)}/>)} 
         {(step === 2 && <DonorLocation setValue={handleChange} onSubmit={() => setStep(3)}/>)}
         {(step === 3 && <SucessScreen />)}

         

        </>
    )
} 
