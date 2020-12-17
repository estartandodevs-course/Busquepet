import React from "react";
import InputField from "../../../../../../components/InputField";
import Text from "../../../../../../components/Text";
import Button from "../../../../../../components/Button";
import { Select } from "../../../../../../components/Select";
import Check from "../../../../../../assets/images/Check.svg";
import Seta from "../../../../../../assets/images/seta.svg";
import "./styles.scss";

export default function RegistratLocation(props) {
  const {setValue, onSubmit} = props;

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

      <section className="container-form-location">
        <div className="contact-form">
          <InputField
            idendifier="adotante"
            label="Seu CEP"
            type="text"
            placeholder="0000-000"
            onChange={(event) => setValue("Cep", event)}
            />
          <Select
            identificador="labelRoxo"
            identifier="roxo"
            typeMap="estado"
            label="Seu Estado"
            onChange={(event) => setValue("State", event)}
          />
          <InputField
            label="Sua Cidade"
            type="text"
            idendifier="adotante"
            onChange={(event) => setValue("City", event)}
          />
          <InputField
            label="Seu Endereço"
            type="text"
            idendifier="adotante"
            onChange={(event) => setValue("Address", event)}
          />
          <InputField
            label="Seu Bairro"
            type="text"
            idendifier="adotante"
            onChange={(event) => setValue("District", event)}
          />
        </div>
      </section>
      <div className="button-skip">
        <Button
          identifier="purple"
          name="Cadastrar"
          icon={Check}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
