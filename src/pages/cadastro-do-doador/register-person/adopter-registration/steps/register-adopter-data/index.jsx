import React from "react";
import InputField from "../../../../../../components/InputField";
import Text from "../../../../../../components/Text";
import Button from "../../../../../../components/Button/index.jsx";
import Icon from "../../../../../../assets/images/SetaProx.svg";
import "./styles.scss";
import Seta from "../../../../../../assets/images/seta.svg";
import { useHistory } from "react-router-dom";

export default function RegisterAdopterData(props) {
  const { setValue, onSubmit } = props;
  const history = useHistory();

  function comeBack() {
    history.goBack();
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
          idendifier="adotante"
          placeholder="Ex.: Maria José"
          type="text"
          label="Seu Nome Completo"
          onChange={(event) => setValue("Adopter", event)}
        />
        <InputField
          idendifier="adotante"
          placeholder="00/00/0000"
          type="date"
          label="Data de Nascimento"
          onChange={(event) => setValue("Age", event)}
        />
        <InputField
          idendifier="adotante"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={(event) => setValue("Email", event)}
        />
        <InputField
          idendifier="adotante"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={(event) => setValue("password", event)}
        />
        <InputField
          idendifier="adotante"
          placeholder="********"
          type="password"
          label="Confirme sua senha"
          onChange={(event) => setValue("password", event)}
        />
      </section>
      <div className="button-skip">
        <Button
          name="Próximo"
          identifier="purple"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
