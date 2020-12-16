import './styles.scss'
import Text from '../../../components/Text'
import RadioButton from '../../../components/RadioButton'
import Button from '../../../components/Button/index.jsx'
import Icon from '../../../assets/images/SetaProx.svg'
import Header from '../../../components/Header'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function RegisterAdopter() {

    const [person, setPerson] = useState("")

    
    const history = useHistory()

    function chooseScreen() {
        console.log(person);
        const location = {
            pathname: person === "juridica" ? "/cadastro-pessoa-juridica" : "/cadastro-pessoa-fisica",
            state: {
                person
            }
        }
        history.push(location)
    }


    return (
        <>
            <Header title="Você quer doar!" subTitle="Vamos lá!" />
            <Text type="titleform">Vamos começar!</Text>
            <section className="contentform">
                <div className="form">
                    <div className="textform">
                        <Text type="labelform">Você é:</Text>
                    </div>
                    <div className="form-box">
                        <RadioButton text="Pessoa Física" name="typePerson" id="fisica" onChange={setPerson} />
			            <RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="juridica" onChange={setPerson} />
                    </div>
                </div>
            </section>
                <div className="button-skip" >
                    <Button disabled={!person} name="Próximo" identifier="green" icon={Icon} onClick={ () => chooseScreen({person})} />
                </div>
        </>
    )
}
