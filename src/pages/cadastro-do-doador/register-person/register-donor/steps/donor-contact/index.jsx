import Header from "../../../../../../components/Header";
import InputField from "../../../../../../components/InputField";
import Text from "../../../../../../components/Text";
import Button from "../../../../../../components/Button/index.jsx";
import Icon from "../../../../../../assets/images/SetaProx.svg";
import "./styles.scss";

export default function DonorContact(props) {
    const {setValue, onSubmit} = props;

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
          onChange={(event) => setValue("number", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Seu E-mail"
          onChange={(event) => setValue("Email", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="exemplo@email.com"
          type="email"
          label="Confirmar E-mail"
          onChange={(event) => setValue("Email", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Crie uma senha"
          onChange={(event) => setValue("Password", event)}
        />
        <InputField
          idendifier="doador"
          placeholder="********"
          type="password"
          label="Confirme a sua senha"
          onChange={(event) => setValue("Password", event)}
        />
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
