import Text from "../../../../../../components/Text";
import { InputField } from "../../../../../../components/InputField";
import Header from "../../../../../../components/Header";
import Button from "../../../../../../components/Button";
import Icon from "../../../../../../assets/images/SetaProx.svg";
import "./styles.scss";

export default function DonorPersonData(props) {
    const {setValue, onSubmit} = props;

  return (
    <>
      <div className="header">
        <Header
          title="Você quer doar!"
          subTitle="Vai ser bem rapidinho!"
        />
      </div>

      <section className="contentform">
        <Text type="titleform">Seus Dados Pessoais</Text>

        <InputField
          idendifier="doador"
          label="Seu Nome Completo"
          placeholder="Ex.: Maria José"
          onChange={(event) => setValue("Donor", event)}
        ></InputField>

        <InputField
          idendifier="doador"
          label="Sua idade"
          placeholder="00/00/0000"
          id="date"
          type="date"
          onChange={(event) => setValue("Age", event)}
        ></InputField>
      </section>
      <div className="button-skip">
        <Button
          name="Próximo"
          identifier="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
