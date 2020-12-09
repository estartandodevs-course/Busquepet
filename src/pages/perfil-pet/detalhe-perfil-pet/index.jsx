import './Style.scss';
import TextDescription from '../../../components/text-description/index';
import Button from '../../../components/Button/index'
import imageArrow from '../../../assets/images/arrowPurple.svg'
import purpleHeart from '../../../assets/images/purpleHeart.svg'

export default function PetDetail(props){


    const {titleName, dogImage, description} = props;

    return(
        <> 
            <header>
                <img src={imageArrow} alt="seta volta"/>
                <h1>{titleName}</h1>
                <img src={purpleHeart} alt="coracao"/>
            </header>

            <main>
                <img src={dogImage} alt="cachorro imagem"/>

                <div className="dogData">
                    <TextDescription title="Nome" description="Melzinha" />
                    <TextDescription title="Idade" description="1 - 3 meses" />
                    <TextDescription title="Porte" description="Médio" />
                    <TextDescription title="Gênero" description="Fêmea" />
                </div>
                    <TextDescription title="Vacinação" description="Todas as vacinas necessárias" />
                <div className="dogData">
                    <TextDescription title="Localização" description="Localização"/>
                    <span><a href="#">Ver mais...</a></span>
                </div>

                <TextDescription title="Doador" description="Henrique Soares"/>

                <h2>Descrição</h2>
                <p>{description}</p>
            </main>

            <Button identifier="gradient" name="Quero adotar"></Button>
            
        </>
    )
}