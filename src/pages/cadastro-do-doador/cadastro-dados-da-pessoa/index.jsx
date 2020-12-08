import "./styles.scss";
import Text from "../../../components/Text";
import { InputField } from "../../../components/InputField/InputField";
import Header from "../../../components/Header";
import Button from "../../../components/button/Index";
import Icon from "../../../assets/images/SetaProx.svg";

export default function DonorRegister() {
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
        ></InputField>

        <InputField label="Sua idade" placeholder="00/00/0000"></InputField>
        <text className="redText">É necessário ter mais de 16 anos.</text>
      </section>
      <div className="button-skip">
        <Button name="Próximo" identifier="green" icon={Icon}></Button>
      </div>
    </>
  );
}
