import "./styles.scss";
import Text from "../../../components/Text";
import RadioButton from "../../../components/RadioButton";
import Button from "../../../components/Button/index.jsx";
import Icon from "../../../assets/images/SetaProx.svg";
import Header from "../../../components/Header";
import { Select } from "../../../components/Select";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function RegisterPet1() {
  const history = useHistory();

  const [typePet, setTypePet] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  function handleClick() {
    history.push({
      pathname: "/",
      state: { typePet, gender, size },
    });
  }

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <div className="textheader">
        <Header
          goBack={goBack}
          title="Vamos ajudar o bichinho a encontrar um lar de amor?!"
        />
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
              id="cachorro"
              onChange={setTypePet}
            />
            <RadioButton
              text="Gatinho"
              name="typePet"
              id="gato"
              onChange={setTypePet}
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
              onChange={setGender}
            />
            <RadioButton
              text="Macho"
              name="gender"
              id="macho"
              onChange={setGender}
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
              onChange={setSize}
            />
            <RadioButton
              text="Médio"
              name="size"
              id="medio"
              onChange={setSize}
            />
            <RadioButton
              text="Grande"
              name="size"
              id="grande"
              onChange={setSize}
            />
          </div>
        </div>
        <div className="age">
          <Select typeMap="idade" label="Qual a idade do seu bichinho?" />
        </div>
      </section>

      <div className="button-skip">
        <Button
          name="Próximo"
          identifier="green"
          icon={Icon}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
