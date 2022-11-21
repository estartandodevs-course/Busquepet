import { useState } from "react";
import { Text, InputField, Header, Button } from "@/components";
import Icon from "@/assets/images/SetaProx.svg";
import "./styles.scss";

export default function DonorPersonData(props) {
  const { setValue, onSubmit } = props;
  const [nameDonor, setNameDonor] = useState("");
  const [dateBirth, setDateBirth] = useState("");

  return (
    <>
      <div className="header">
        <Header title="Você quer doar!" subTitle="Vai ser bem rapidinho!" />
      </div>

      <section className="contentform">
        <Text type="titleform">Seus Dados Pessoais</Text>
        <InputField
          id="doador"
          label="Seu Nome Completo"
          placeholder="Ex.: Maria José"
          onChange={(event) => setNameDonor(event) || setValue("Donor", event)}
        />
        <InputField
          id="doador"
          label="Data de Nascimento"
          placeholder="00/00/0000"
          type="date"
          onChange={(event) => setDateBirth(event) || setValue("Age", event)}
        />
      </section>
      <div className="button-skip">
        <Button
          disabled={!nameDonor || !dateBirth}
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
