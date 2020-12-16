import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../../../../../components/InputField";
import Text from "../../../../../components/Text";
import Button from "../../../../../components/Button";
import { Select } from "../../../../../components/Select";
import Check from "../../../../../assets/images/Check.svg";
import "./styles.scss";
import Seta from "../../../../../assets/images/seta.svg";

export default function RegisterAdopter2() {
  const [value, setValue] = useState("");
  const history = useHistory();

  function handleClick() {
    history.push("/");
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
          <Text type="subtitleheader">Só mais essa, tá?!</Text>
        </div>
      </div>
      <Text type="titleform">Seus Dados de Localização</Text>

      <section className="container-form">
        <div className="contact-form">
          <InputField
            idendifier="adotante"
            label="Seu CEP"
            type="text"
            placeholder="0000-000"
            onChange={setValue}
          />
          <Select
            identificador="labelRoxo"
            identifier="roxo"
            typeMap="estado"
            label="Seu Estado"
          />
          <InputField
            label="Sua Cidade"
            type="text"
            onChange={setValue}
            idendifier="adotante"
          />
          <InputField
            label="Seu Endereço"
            type="text"
            onChange={setValue}
            idendifier="adotante"
          />
          <InputField
            label="Seu Bairro"
            type="text"
            onChange={setValue}
            idendifier="adotante"
          />
        </div>
      </section>
      <div className="button-skip">
        <Button
          disabled={!value}
          identifier="purple"
          name="Cadastrar"
          icon={Check}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
