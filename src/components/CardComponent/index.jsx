import './styles.scss';
import Text from '../Text';
import imageCao from '../../assets/images/Foto-do-Pet.svg';
import gener from '../../assets/images/Fêmea.svg';
import locationX from '../../assets/images/Local-do-Pet-List.svg';
import petSize from '../../assets/images/Dog-M.svg';
export default function CardComponent(props) {
	// const { image, gener, location, location, id } = props;
	return (
		<>
			<section className="container-card">
				<div className="container-img">
					<img src={imageCao} alt="#" />
				</div>
				<div className="content-card">
					<Text type="titlecardpet">Melzinha</Text>
					<Text type="agecardpet">1 - 3 meses</Text>
					<img src={petSize} alt="#" />
				</div>
				<div className="container-genre">
					<img className="content-image" src={gener} alt="#" />
				</div>
				<footer className="container-location">
					<img className="x" src={locationX} alt="#" />
				</footer>
			</section>
		</>
	);
}
