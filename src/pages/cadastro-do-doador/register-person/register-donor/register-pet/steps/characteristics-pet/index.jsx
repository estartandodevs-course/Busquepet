import "./styles.scss";
import Text from "../../../../../../../components/Text";
import RadioButton from "../../../../../../../components/RadioButton";
import Button from "../../../../../../../components/Button/index.jsx";
import Icon from "../../../../../../../assets/images/SetaProx.svg";
import Header from "../../../../../../../components/Header";
import { Select } from "../../../../../../../components/Select";

export default function CharacteristicsPet(props) {
  const { setValue, onSubmit} = props;

  return (
    <>
      <div className="textheader">
        <Header
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
              onChange={(event) => setValue("typePet", event)}
            />
            <RadioButton
              text="Gatinho"
              name="typePet"
              id="gato"
              onChange={(event) => setValue("typePet", event)}
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
              onChange={(event) => setValue("gender", event)}
            />
            <RadioButton
              text="Macho"
              name="gender"
              id="macho"
              onChange={(event) => setValue("gender", event)}
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
              onChange={(event) => setValue("size", event)}
            />
            <RadioButton
              text="Médio"
              name="size"
              id="medio"
              onChange={(event) => setValue("size", event)}
            />
            <RadioButton
              text="Grande"
              name="size"
              id="grande"
              onChange={(event) => setValue("size", event)}
            />
          </div>
        </div>
        <div className="age">
          <Select typeMap="idade" label="Qual a idade do seu bichinho?" onChange={(event => setValue("agePet", event))} />
        </div>
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
