import Header from "../../../../../../components/Header/index";
import Text from "../../../../../../components/Text/index";
import { InputField } from "../../../../../../components/InputField";
import { Select } from "../../../../../../components/Select";
import Button from "../../../../../../components/Button";
import Check from "../../../../../../assets/images/Check.svg";
import "./Style.scss";
import { useState } from "react";
export default function DonorLocation(props) {
  const {setValue, onSubmit} = props;

  const [cepDonor, setCepDonor] = useState("");
  const [stateDonor, setStateDonor] = useState("");
  const [cityDonor, setCityDonor] = useState("");
  const [addressDonor, setAddressDonor] = useState("");
  const [districtDonor, setDistrictDonor] = useState("");

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
          onChange={(event) => setCepDonor(event) && setValue("Cep", event)}
        />

        <Select
          identifier="verde"
          identificador="labelVerde"
          typeMap="estado"
          label="Seu Estado"
          onChange={(event) => setStateDonor(event) && setValue("State", event)}
        />

        <InputField
          label="Sua Cidade"
          type="text"
          onChange={(event) => setCityDonor(event) && setValue("City", event)}
          idendifier="doador"
        />
        <InputField
          label="Seu Endereço"
          type="text"
          onChange={(event) => setAddressDonor(event) && setValue("Address", event)}
          idendifier="doador"
        />
        <InputField
          label="Seu Bairro"
          type="text"
          onChange={(event) => setDistrictDonor(event) && setValue("district", event)}
          idendifier="doador"
        />
      </div>
      <div className="button-skip">
        <Button
          disabled={!stateDonor || !cityDonor || !addressDonor || !districtDonor || !cepDonor}
          identifier="green"
          name="Cadastrar"
          icon={Check}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
