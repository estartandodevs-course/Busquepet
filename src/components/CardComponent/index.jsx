import './styles.scss';
import Text from '../Text';
import img from '../../assets/images/groundimg.png';
import seta from '../../assets/images/Fêmea.svg';
import locationX from '../../assets/images/Local-do-Pet-List.svg';
import cao from '../../assets/images/Dog-M.svg';
export default function CardComponent(props) {
	const { image, icon, location } = props;
	return (
		<>
			<section className="container-card">
				<div className="container-img">
					<img src={img} alt="#" />
				</div>
				<div className="content-card">
					<Text type="titlecardpet">Melzinha</Text>
					<Text type="agecardpet">1 - 3 meses</Text>
					<img src={cao} alt="#" />
				</div>
				<div className="container-genre">
					<img className="content-image" src={seta} alt="#" />
				</div>
				<footer className="container-location">
					<img className="x" src={locationX} alt="#" />
				</footer>
			</section>
		</>
	);
}
