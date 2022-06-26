import { useState } from "react";
import Icon from "@/assets/images/SetaProx.svg";
import { Header, Button, RadioButton, Text, Select } from "@/components";
import "./styles.scss";

export default function CharacteristicsPet(props) {
  const { setValue, onSubmit } = props;

  const [typePet, setTypePet] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [agePet, setAgepet] = useState("");

  return (
    <>
      <div className="textheader">
        <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!" />
      </div>
      <section className="contentform">
        <div className="form">
          <div className="textform">
            <Text type="labelform">Seu pet é um:</Text>
          </div>
          <div className="form-box">
            <RadioButton
              text="Cachorrinho"
              name="typePet"
              id="cao"
              onChange={(event) =>
                setTypePet(event) || setValue("typePet", event)
              }
            />
            <RadioButton
              text="Gatinho"
              name="typePet"
              id="gato"
              onChange={(event) =>
                setTypePet(event) || setValue("typePet", event)
              }
            />
          </div>
        </div>

        <div className="form">
          <div className="textform">
            <Text type="labelform">O gênero do seu bicho é:</Text>
          </div>
          <div className="form-box">
            <RadioButton
              text="Fêmea"
              name="gender"
              id="femea"
              onChange={(event) =>
                setGender(event) || setValue("gender", event)
              }
            />
            <RadioButton
              text="Macho"
              name="gender"
              id="macho"
              onChange={(event) =>
                setGender(event) || setValue("gender", event)
              }
            />
          </div>
        </div>

        <div className="form">
          <div className="textform">
            <Text type="labelform">Qual o porte do bichinho?</Text>
          </div>
          <div className="form-boxes">
            <RadioButton
              text="Pequeno"
              name="size"
              id="pequeno"
              onChange={(event) => setSize(event) || setValue("size", event)}
            />
            <RadioButton
              text="Médio"
              name="size"
              id="medio"
              onChange={(event) => setSize(event) || setValue("size", event)}
            />
            <RadioButton
              text="Grande"
              name="size"
              id="grande"
              onChange={(event) => setSize(event) || setValue("size", event)}
            />
          </div>
        </div>
        <div className="age">
          <Select
            typeMap="idade"
            label="Qual a idade do seu bichinho?"
            onChange={(event) => setAgepet(event) || setValue("agePet", event)}
          />
        </div>
      </section>

      <div className="button-skip">
        <Button
          disabled={!typePet || !gender || !size || !agePet}
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
