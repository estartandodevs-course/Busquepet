import RadioButton from './components/RadioButton/RadioButton'
import { useState } from 'react';

function App() {
  
  const [person, setPerson] = useState()

  return (
    <>
    <RadioButton text="Pessoa Física" name="typePerson" id="juridico" onChange={setPerson}/>
    <RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="fisico" onChange={setPerson} />
    <button onClick={() => console.log(person)}>Proximo</button>
    </>
  );
}

export default App;
