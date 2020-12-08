import Header from '../../../components/Header/index';
import Text from '../../../components/Text/index';
import {InputField} from '../../../components/InputField';
import {Select} from '../../../components/select/Index';
import Button from '../../../components/Button';
import Check from '../../../assets/images/Check.svg';
import './Style.scss';
export default function LocationData () {

    return (
        <div>
            <Header title="Você quer doar!" subTitle="Esse é o último!!!!!"/>
            <Text type="titleform">Seus Dados de Localização</Text>

            <div className="contact-form">
                <InputField label="Seu CEP" type="text" placeholder="00000-000"></InputField>
                <Select typeMap="estado" label="Seu Estado"></Select>
                <InputField label="Sua Cidade" type="text"></InputField>
                <InputField label="Seu Endereço" type="text"></InputField>
                <InputField label="Seu Bairro" type="text"></InputField>
            </div>

            <div className="button-skip">
                <Button identifier="green" name="Cadastrar" icon={Check}></Button>
            </div>
        </div>
    )
}