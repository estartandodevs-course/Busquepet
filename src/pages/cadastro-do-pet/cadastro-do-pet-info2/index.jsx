import Header from "../../../components/Header";
import InputField from "../../../components/InputField";
import TextArea from "../../../components/TextArea";
import RadioButton from "../../../components/RadioButton";
import Text from "../../../components/Text";
import Icon from '../../../assets/images/SetaProx.svg'
import Button from "../../../components/Button";
import "./styles.scss";



export default function RegisterPet2() {
  return (
    <>
      <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!"/>


      <div className="pet-name">
        <InputField
          placeholder="Nome do Bichinho"
          type="text"
          label="Qual o nome do bichinho?"
        />
        <span className="subtitle-info">
          Se não tiver nome, pode criar uma para ao cadastro
        </span>
      </div>

      <section className="contentform">
        <div className="form">
          <div className="textform">
            <Text type="labelform">
              O seu animalzinho já tem todas as vacinas?
            </Text>
          </div>
          <div className="form-box">
            <RadioButton
              text="Sim, todas as vacinas necessárias"
              name="typePerson"
            />
            <RadioButton
              text="Não, não tomou as vacinas"
              name="typePerson"
            />
            <RadioButton
              text="Apenas algumas vacinas"
              name="typePerson"
            />
            <RadioButton text="Não sei" name="typePerson" />
          </div>
        </div>
      </section>

      <div className="pet-history">
        <TextArea
          placeholder="Conta pra gente a história do seu bichinho, por que você quer doar, ou como o encontrou, como o pet é no dia a dia. Deixa o coração falar..."
          label="Conta um pouco sobre o Animalzinho"
        />
        <span className="subtitle-info">
          Esta mensagem ficará na descrição sobre o pet.<br></br>
          Você poderá editá-la depois.
        </span>
      </div>

      <div className="button-skip-info">
        <Button
          name="Próximo"
          identifier="green"
          icon={Icon}
        />
      </div>
    </>
  );
}
