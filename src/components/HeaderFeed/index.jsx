import './styles.scss';
import Text from '../Text';
export default function HeaderFeed(props) {
	const { image, title } = props;

	return (
		<>
			<header className="header-feed">
				<div className="content-header-feed">
					<Text className="titulo" type="titleheader">
						{title}
					</Text>
					<img className="image-icon" src={image} alt="#" />
				</div>
			</header>
		</>
	);
}
