import { useState } from "react";
import Header from "../../../../../../../components/Header";
import InputField from "../../../../../../../components/InputField";
import TextArea from "../../../../../../../components/TextArea";
import RadioButton from "../../../../../../../components/RadioButton";
import Text from "../../../../../../../components/Text";
import Icon from "../../../../../../../assets/images/SetaProx.svg";
import Button from "../../../../../../../components/Button";
import "./styles.scss";

export default function DataPet(props) {
    const {setValue, onSubmit} = props;

    const [namePet, setNamePet] = useState("");
    const [infovaccine, setInfovaccine] = useState("");
    const [descriptionPet, setDescriptionPet] = useState("");

    return (
        <>
            <div>
                <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!"/>
            </div>
            <div className="pet-name">
                <InputField placeholder="Nome do Bichinho" type="text" label="Qual o nome do bichinho?" name="pet" idendifier="doador"
                    onChange={
                        (event) => setNamePet(event) && setValue("namePet", event)
                    }/>
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
                        <RadioButton text="Sim, todas as vacinas necessárias" name="infovaccine" id="Tomou todas as vacinas!"
                            onChange={
                                (event) => setInfovaccine(event) && setValue("infovaccine", event)
                            }/>
                        <RadioButton text="Não, não tomou as vacinas" name="infovaccine" id="Não tomou todas!"
                            onChange={
                                (event) => setInfovaccine(event) && setValue("infovaccine", event)
                            }/>
                        <RadioButton text="Apenas algumas vacinas" name="infovaccine" id="Tomou algumas vacinas!"
                            onChange={
                                (event) => setInfovaccine(event) && setValue("infovaccine", event)
                            }/>
                        <RadioButton text="Não sei" name="infovaccine" id="Não sei!"
                            onChange={
                                (event) => setInfovaccine(event) && setValue("infovaccine", event)
                            }/>
                    </div>
                </div>
            </section>

            <div className="pet-history">
                <TextArea placeholder={
                        `Conta pra gente a história do seu bichinho, por que você quer doar, ou como o encontrou, como o pet é no dia a dia. ${"\n"}Deixa o coração falar...`
                    }
                    label="Conta um pouco sobre o Animalzinho" name="description" onChange={(event) => setDescriptionPet(event) && setValue("description", event)}/>
                <span className="subtitle-info">
                    Esta mensagem ficará na descrição sobre o pet.<br></br>
                    Você poderá editá-la depois.
                </span>

            </div>

            <div className="form-button-skip">
                <Button disabled={!namePet || !infovaccine || !descriptionPet} name="Próximo" identifier="green"
                    icon={Icon} onClick={onSubmit}/>
            </div>
        </>
    );
}
