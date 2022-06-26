import Icon from "@/assets/images/SetaProx.svg";
import { Header, Button, RadioButton, Text } from "@/components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

export default function RegisterPerson() {
  const [person, setPerson] = useState("");

  const history = useHistory();

  function chooseScreen() {
    console.log(person);
    const location = {
      pathname: person === "adotante" ? "/registroAdotante" : "/registrodoador",
      state: {
        person,
      },
    };
    history.push(location);
  }

  return (
    <>
      <Header
        title="Vamos nos cadastar!"
        subTitle="Escolha a forma de cadastro."
      />
      <Text type="titleform">Vamos começar!</Text>
      <section className="contentform">
        <div className="form">
          <div className="textform">
            <Text type="labelform">Deseja se cadastrar como:</Text>
          </div>
          <div className="form-box">
            <RadioButton
              text="Adotante"
              name="typePerson"
              id="adotante"
              onChange={setPerson}
            />
            <RadioButton
              text="Doador"
              name="typePerson"
              id="doador"
              onChange={setPerson}
            />
          </div>
        </div>
      </section>
      <div className="button-skip">
        <Button
          disabled={!person}
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={() => chooseScreen({ person })}
        />
      </div>
    </>
  );
}
