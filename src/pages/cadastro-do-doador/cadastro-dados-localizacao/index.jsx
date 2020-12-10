import Header from "../../../components/Header/index";
import Text from "../../../components/Text/index";
import { InputField } from "../../../components/InputField";
import { Select } from "../../../components/Select";
import Button from "../../../components/Button";
import Check from "../../../assets/images/Check.svg";
import "./Style.scss";
import { useState } from "react";
export default function LocationData() {
  const [value, setValue] = useState("");
  return (
    <>
      <Header title="Você quer doar!" subTitle="Esse é o último!!!!!" />
      <Text type="titleform">Seus Dados de Localização</Text>

      <div className="contact-form">
        <InputField
          idendifier="doador"
          label="Seu CEP"
          type="text"
          placeholder="0000-000"
          onChange={setValue}
        />

        <Select
          identifier="verde"
          identificador="labelVerde"
          typeMap="estado"
          label="Seu Estado"
        />

        <InputField
          label="Sua Cidade"
          type="text"
          onChange={setValue}
          idendifier="doador"
        />
        <InputField
          label="Seu Endereço"
          type="text"
          onChange={setValue}
          idendifier="doador"
        />
        <InputField
          label="Seu Bairro"
          type="text"
          onChange={setValue}
          idendifier="doador"
        />
      </div>
      <div className="button-skip">
        <Button
          disabled={!value}
          identifier="green"
          name="Cadastrar"
          icon={Check}
        />
      </div>
    </>
  );
}
