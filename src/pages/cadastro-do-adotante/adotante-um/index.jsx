import { useState } from "react";
import InputField from "../../../components/InputField";
import Text from "../../../components/Text";
import Button from "../../../components/Button/index.jsx";
import Icon from "../../../assets/images/SetaProx.svg";
import "./styles.scss";
import React from "react";
import Seta from "../../../assets/images/seta.svg";
import { useHistory } from "react-router-dom";

export default function RegisterAdopter1() {
  const [value, setValue] = useState("");
  const history = useHistory();

  function goBack() {
    history.push("/login");
  }

  function handleClick() {
    history.push("/cadastro-do-adotante2");
  }

  return (
    <>
      <div className="cabeça">
        <div className="profile">
          <img goBack={goBack} src={Seta} alt="perfil"></img>
        </div>
        <div className="textcabeça">
          <Text className="titulo" type="titleheader">
            Você quer adotar!
          </Text>
          <Text type="subtitleheader">Vai ser bem rapidinho!</Text>
        </div>
      </div>
      <Text type="titleform">Seus Dados Pessoais</Text>
      <section className="contacte-form">
        <InputField
          idendifier="adotante"
          placeholder="Ex.: Maria José"
          type="text"
          label="Seu Nome Completo"
          onChange={setValue}
        />
        <InputField
          idendifier="adotante"
          placeholder="00/00/0000"
          type="number"
          label="Sua Idade"
          onChange={setValue}
        />
        <InputField
          idendifier="adotante"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={setValue}
        />
        <InputField
          idendifier="adotante"
          placeholder="****"
          type="password"
          label="Crie uma senha"
          onChange={setValue}
        />
        <InputField
          idendifier="adotante"
          placeholder="****"
          type="password"
          label="Confirme sua senha"
          onChange={setValue}
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={!value}
          name="Próximo"
          identifier="purple"
          icon={Icon}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
