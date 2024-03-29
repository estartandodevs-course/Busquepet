import React, { useState } from "react";
import { Button, Text, InputField } from "../../../components";
import Icon from "@/assets/images/SetaProx.svg";
import "./styles.scss";
import Seta from "@/assets/images/seta.svg";
import { useNavigate } from "react-router-dom";

export default function RegisterAdopterData(props) {
  const { setValue, onSubmit } = props;
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [adopter, setAdopter] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ageAdopter, setAgeAdopter] = useState("");

  function comeBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="cabeça">
        <div className="profile">
          <img src={Seta} alt="perfil" onClick={comeBack}></img>
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
          id="adotante"
          placeholder="Ex.: Maria José"
          type="text"
          label="Seu Nome Completo"
          onChange={(event) => setAdopter(event) || setValue("Adopter", event)}
        />
        <InputField
          id="adotante"
          placeholder="00/00/0000"
          type="date"
          label="Data de Nascimento"
          onChange={(event) => setAgeAdopter(event) || setValue("Age", event)}
        />
        <InputField
          id="adotante"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={(event) => setEmail(event) || setValue("Email", event)}
        />
        <InputField
          id="adotante"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={(event) =>
            setPassword(event) || setValue("password", event)
          }
        />
        <InputField
          id="adotante"
          placeholder="********"
          type="password"
          label="Confirme sua senha"
          onChange={(event) =>
            setCheckPassword(event) || setValue("password", event)
          }
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={
            !password || !adopter || !checkPassword || !email || !ageAdopter
          }
          name="Próximo"
          className="purple"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
