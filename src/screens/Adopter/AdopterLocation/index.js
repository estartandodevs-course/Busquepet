import React, { useState } from "react";
import { Select, Button, Text, InputField } from "components";
import Check from "assets/images/Check.svg";
import Seta from "assets/images/seta.svg";
import "./styles.scss";

export default function RegistratLocation(props) {
  const { setValue, onSubmit } = props;

  const [cepAdopter, setCepAdopter] = useState("");
  const [stateAdopter, setStateAdopter] = useState("");
  const [city, setCity] = useState("");
  const [addressAdopter, setAddress] = useState("");
  const [district, setDistrict] = useState("");

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
            id="adotante"
            label="Seu CEP"
            type="text"
            placeholder="0000-000"
            onChange={(event) => setCepAdopter(event) || setValue("Cep", event)}
          />
          <Select
            id="labelRoxo"
            identifier="roxo"
            typeMap="estado"
            label="Seu Estado"
            onChange={(event) =>
              setStateAdopter(event) || setValue("State", event)
            }
          />
          <InputField
            label="Sua Cidade"
            type="text"
            id="adotante"
            onChange={(event) => setCity(event) || setValue("City", event)}
          />
          <InputField
            label="Seu Endereço"
            type="text"
            id="adotante"
            onChange={(event) =>
              setAddress(event) || setValue("Address", event)
            }
          />
          <InputField
            label="Seu Bairro"
            type="text"
            id="adotante"
            onChange={(event) =>
              setDistrict(event) || setValue("District", event)
            }
          />
        </div>
      </section>
      <div className="button-skip">
        <Button
          disabled={
            !cepAdopter ||
            !stateAdopter ||
            !city ||
            !addressAdopter ||
            !district
          }
          className="purple"
          name="Cadastrar"
          icon={Check}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
