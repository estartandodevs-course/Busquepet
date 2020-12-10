import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../../../components/InputField";
import Text from "../../../components/Text";
import Button from "../../../components/Button/index.jsx";
import Icon from "../../../assets/images/SetaProx.svg";
import "./styles.scss";
import React from "react";
import Seta from "../../../assets/images/seta.svg";

export default function RegisterAdopter() {
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
      <div className="cabeça">
        <div className="profile">
          <img src={Seta} alt="perfil"></img>
        </div>
        <div className="textcabeça">
          <Text className="titulo" type="titleheader">
            Você quer adotar!
          </Text>
          <Text type="subtitleheader">Vai ser bem rapidinho!</Text>
        </div>
      </div>
      {/* <Text type="titleform">Seus Dados para Contato</Text> */}
      <section className="contact-form">
        <InputField
          placeholder="Place Holder"
          type="number"
          label="Seu Nome Completo"
          onChange={setdataPerson}
        />
        <InputField
          placeholder="00/00/0000"
          type="email"
          label="Sua Idade"
          onChange={setdataPerson}
        />
        <InputField
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={setdataPerson}
        />
        <InputField
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={setdataPerson}
        />
        <InputField
          placeholder="********"
          type="password"
          label="Confirme sua senha"
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
