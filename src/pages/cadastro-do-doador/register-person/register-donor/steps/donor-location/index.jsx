import Header from "../../../../../../components/Header/index";
import Text from "../../../../../../components/Text/index";
import { InputField } from "../../../../../../components/InputField";
import { Select } from "../../../../../../components/Select";
import Button from "../../../../../../components/Button";
import Check from "../../../../../../assets/images/Check.svg";
import "./Style.scss";
export default function DonorLocation(props) {
  const {setValue, onSubmit} = props;
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
          onChange={(event) => setValue("Cep", event)}
        />

        <Select
          identifier="verde"
          identificador="labelVerde"
          typeMap="estado"
          label="Seu Estado"
          onChange={(event) => setValue("State", event)}
        />

        <InputField
          label="Sua Cidade"
          type="text"
          onChange={(event) => setValue("City", event)}
          idendifier="doador"
        />
        <InputField
          label="Seu Endereço"
          type="text"
          onChange={(event) => setValue("Address", event)}
          idendifier="doador"
        />
        <InputField
          label="Seu Bairro"
          type="text"
          onChange={(event) => setValue("district", event)}
          idendifier="doador"
        />
      </div>
      <div className="button-skip">
        <Button
          identifier="green"
          name="Cadastrar"
          icon={Check}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
