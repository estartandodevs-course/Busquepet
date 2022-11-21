import { useState } from "react";
import Icon from "@/assets/images/SetaProx.svg";
import {
  Button,
  Text,
  RadioButton,
  TextArea,
  InputField,
  Header,
} from "@/components";
import "./styles.scss";

export default function DataPet(props) {
  const { setValue, onSubmit } = props;

  const [namePet, setNamePet] = useState("");
  const [infovaccine, setInfovaccine] = useState("");
  const [descriptionPet, setDescriptionPet] = useState("");

  function numberVaccine(event) {
    if (event === "Tomou todas as vacinas!") return 3;
    else if (event === "Tomou algumas vacinas!") return 2;
    else if (event === "Não tomou todas!") return 1;
    else if (event === "Não sei!") return 0;
  }

  return (
    <>
      <div>
        <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!" />
      </div>
      <div className="pet-name">
        <InputField
          id="doador"
          placeholder="Nome do Bichinho"
          type="text"
          label="Qual o nome do bichinho?"
          name="pet"
          onChange={(event) => setNamePet(event) || setValue("name", event)}
        />
        <span className="subtitle-info">
          Se não tiver nome, pode criar uma para ao cadastro
        </span>
      </div>

      <section className="contentform">
        <div className="form">
          <div className="data-textform">
            <Text type="labelform">
              O seu animalzinho já tem todas as vacinas?
            </Text>
          </div>
          <div className="form-box-info">
            <RadioButton
              text="Sim, todas as vacinas necessárias"
              name="infovaccine"
              id="Tomou todas as vacinas!"
              onChange={(event) =>
                setInfovaccine(event) ||
                setValue("vaccine", numberVaccine(event))
              }
            />
            <RadioButton
              text="Não, não tomou as vacinas"
              name="infovaccine"
              id="Não tomou todas!"
              onChange={(event) =>
                setInfovaccine(event) ||
                setValue("vaccine", numberVaccine(event))
              }
            />
            <RadioButton
              text="Apenas algumas vacinas"
              name="infovaccine"
              id="Tomou algumas vacinas!"
              onChange={(event) =>
                setInfovaccine(event) ||
                setValue("vaccine", numberVaccine(event))
              }
            />
            <RadioButton
              text="Não sei"
              name="infovaccine"
              id="Não sei!"
              onChange={(event) =>
                setInfovaccine(event) ||
                setValue("vaccine", numberVaccine(event))
              }
            />
          </div>
        </div>
      </section>

      <div className="pet-history">
        <TextArea
          placeholder={`Conta pra gente a história do seu bichinho, por que você quer doar, ou como o encontrou, como o pet é no dia a dia. ${"\n"}Deixa o coração falar...`}
          label="Conta um pouco sobre o Animalzinho"
          name="description"
          onChange={(event) =>
            setDescriptionPet(event) || setValue("about", event)
          }
        />
        <span className="subtitle-info">
          Esta mensagem ficará na descrição sobre o pet.<br></br>
          Você poderá editá-la depois.
        </span>
      </div>

      <div className="form-button-skip">
        <Button
          disabled={!namePet || !infovaccine || !descriptionPet}
          name="Próximo"
          className="green"
          icon={Icon}
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
