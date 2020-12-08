import "./styles.scss";
import Text from "../../../components/Text";
import { InputField } from "../../../components/InputField/InputField";
import Header from "../../../components/Header";
import Button from "../../../components/button/Index";
import Icon from "../../../assets/images/SetaProx.svg";
// import { useState } from "react";

export default function DonorRegister() {
  // const [input, setInput] = (useState = "");
  return (
    <>
      <div className="header">
        <Header
          title="Você quer doar!"
          subTitle="Vai ser bem rapidinho!"
        ></Header>
      </div>

      <section className="contentform">
        <Text type="titleform">Seus Dados Pessoais</Text>

        <InputField
          label="Seu Nome Completo"
          placeholder="Ex.: Maria José"
          // onChange={setInput}
        ></InputField>

        <InputField
          label="Sua idade"
          placeholder="00/00/0000"
          id="date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          // onChange={setInput}
        ></InputField>
      </section>
      <div className="button-skip">
        <Button
          // disable={!input}
          name="Próximo"
          identifier="green"
          icon={Icon}
          // onClick={() => console.log(input)}
        ></Button>
      </div>
    </>
  );
}
