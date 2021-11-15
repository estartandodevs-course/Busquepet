import Header from "../../../../../../components/Header";
import InputField from "../../../../../../components/InputField";
import Text from "../../../../../../components/Text";
import Button from "../../../../../../components/Button/index.jsx";
import Icon from "../../../../../../assets/images/SetaProx.svg";
import "./styles.scss";
import { useState } from "react";

export default function DonorContact(props) {
    const {setValue, onSubmit} = props;

    const [number, setNumberDonor] = useState("")
    const [emailDonor, setEmailDonor] = useState("")
    const [checkEmailDonor, setCheckEmailDonor] = useState("")
    const [passwordDonor, setPasswordDonor] = useState("")
    const [CheckPasswordDonor, setCheckPasswordDonor] = useState("")

  return (
    <>
      <Header
        title="Você quer doar!"
        subTitle="Só mais um pouquinho, certo?!"
      />
      <Text type="titleform">Seus Dados para Contato</Text>
      <section className="contact-form">
        <InputField
          idendifier="doador"
          placeholder="(xx) 9 9999-9999"
          type="number"
          label="Seu WhatsApp"
          onChange={(event) => setNumberDonor(event) || setValue("number", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={(event) => setEmailDonor(event) || setValue("Email", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Confirmar E-mail"
          onChange={(event) => setCheckEmailDonor(event) || setValue("Email", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={(event) => setPasswordDonor(event) || setValue("Password", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Confirme a sua senha"
          onChange={(event) => setCheckPasswordDonor(event) || setValue("Password", event)}
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={!number || !emailDonor || !checkEmailDonor || !passwordDonor || !CheckPasswordDonor}
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
