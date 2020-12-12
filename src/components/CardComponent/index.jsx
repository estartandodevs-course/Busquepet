import './styles.scss';
import Text from '../Text';
import gener from '../../assets/images/Fêmea.svg';
import locationX from '../../assets/images/Local-do-Pet-List.svg';
import petSize from '../../assets/images/Dog-M.svg';
export default function CardComponent(props) {
	const { image, name, age } = props;
	return (
		<>
			<section className="container-card">
				<div className="container-img">
					<img src={image} alt="#" />
				</div>
				<div className="content-card">
					<Text type="titlecardpet">{name}</Text>
					<Text type="agecardpet">{age}</Text>
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
