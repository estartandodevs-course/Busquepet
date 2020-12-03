import RadioButton from './components/RadioButton'
import { useState } from 'react';

function App() {
  
  const [person, setPerson] = useState()

  return (
    <>
    <RadioButton text="Pessoa Física" name="typePerson" id="Pessoa Física" onChange={setPerson}/>
    <RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="Pessoa Jurídica (ONG)" onChange={setPerson} />
    <button onClick={() => console.log(person)}>Proximo</button>
    </>
  );
}

export default App;
