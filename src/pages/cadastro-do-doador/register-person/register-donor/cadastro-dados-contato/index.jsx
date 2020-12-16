import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../../../../components/Header";
import InputField from "../../../../../components/InputField";
import Text from "../../../../../components/Text";
import Button from "../../../../../components/Button/index.jsx";
import Icon from "../../../../../assets/images/seta.svg";
import "./styles.scss";

export default function ContactDetails() {
  const [dataPerson, setdataPerson] = useState("");

  const history = useHistory();
  function chooseScreen() {
    const location = {
      pathname: "/cadastro-pessoa-fisica",
      state: {
        dataPerson,
      },
    };
    history.push(location);
  }

  return (
    <>
      <Header
        title="Você quer doar!"
        subTitle="Só mais um pouquinho, certo?!"
      />
      <Text type="titleform">Seus Dados para Contato</Text>
      <section className="contact-form">
        <InputField
          idendifier="doador"
          placeholder="(xx) 9 9999-9999"
          type="number"
          label="Seu WhatsApp"
          onChange={setdataPerson}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={setdataPerson}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Confirmar E-mail"
          onChange={setdataPerson}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={setdataPerson}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Repita a sua senha"
          onChange={setdataPerson}
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={!dataPerson}
          name="Próximo"
          identifier="green"
          icon={Icon}
          onClick={() => chooseScreen({ dataPerson })}
        />
      </div>
    </>
  );
}
