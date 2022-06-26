import { useState } from "react";
import { Button, Text, InputField, Header } from "@/components";
import Icon from "@/assets/images/SetaProx.svg";
import "./styles.scss";

export default function DonorContact(props) {
  const { setValue, onSubmit } = props;

  const [number, setNumberDonor] = useState("");
  const [emailDonor, setEmailDonor] = useState("");
  const [checkEmailDonor, setCheckEmailDonor] = useState("");
  const [passwordDonor, setPasswordDonor] = useState("");
  const [CheckPasswordDonor, setCheckPasswordDonor] = useState("");

  return (
    <>
      <Header
        title="Você quer doar!"
        subTitle="Só mais um pouquinho, certo?!"
      />
      <div className="title-form">
        <Text type="titleform">Seus Dados para Contato</Text>
      </div>
      <section className="contact-form">
        <InputField
          id="doador"
          placeholder="(xx) 9 9999-9999"
          type="number"
          label="Seu WhatsApp"
          onChange={(event) =>
            setNumberDonor(event) || setValue("number", event)
          }
        />
        <InputField
          id="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={(event) => setEmailDonor(event) || setValue("Email", event)}
        />
        <InputField
          id="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Confirmar E-mail"
          onChange={(event) =>
            setCheckEmailDonor(event) || setValue("Email", event)
          }
        />
        <InputField
          id="doador"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={(event) =>
            setPasswordDonor(event) || setValue("Password", event)
          }
        />
        <InputField
          id="doador"
          placeholder="********"
          type="password"
          label="Confirme a sua senha"
          onChange={(event) =>
            setCheckPasswordDonor(event) || setValue("Password", event)
          }
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={
            !number ||
            !emailDonor ||
            !checkEmailDonor ||
            !passwordDonor ||
            !CheckPasswordDonor
          }
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
