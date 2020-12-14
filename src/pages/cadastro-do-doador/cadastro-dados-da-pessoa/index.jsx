import "./styles.scss";
import Text from "../../../components/Text";
import { InputField } from "../../../components/InputField";
import Header from "../../../components/Header";
import Button from "../../../components/Button";
import Icon from "../../../assets/images/SetaProx.svg";
// import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DonorRegister() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <div className="header">
        <Header
          goBack={goBack}
          title="Você quer doar!"
          subTitle="Vai ser bem rapidinho!"
        ></Header>
      </div>

      <section className="contentform">
        <Text type="titleform">Seus Dados Pessoais</Text>

        <InputField
          idendifier="doador"
          label="Seu Nome Completo"
          placeholder="Ex.: Maria José"
          // onChange={setInput}
        ></InputField>

        <InputField
          idendifier="doador"
          label="Sua idade"
          placeholder="00/00/0000"
          id="date"
          type="date"

          // onChange={setInput}
        ></InputField>
      </section>
      <div className="button-skip">
        <Button
          name="Próximo"
          identifier="green"
          icon={Icon}
          onClick={handleClick}
        ></Button>
      </div>
    </>
  );
}
