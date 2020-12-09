import Icon from '../../assets/images/SetaProx.svg';
import Logo from '../../assets/images/groundimg.png';
import Button from '../../components/Button';
import Text from '../../components/Text';
import './styles.scss';

export default function SucessScream() {
	return (
		<>
			<main id="content-master">
				<Text type="textfinal">Seu perfil foi cadastrado com sucesso!! </Text>
				<img className="image-logo" src={Logo} alt="Logo-pet" />
				<Text type="textfinal2">
					Agora, vamos cadastrar o seu animalzinho?!
				</Text>
			</main>
			<footer id="content-btn">
				<Button name="Vamos" identifier="green" icon={Icon} />
			</footer>
		</>
	);
}
