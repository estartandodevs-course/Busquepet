import Text from "../Text";
import "./styles.scss";

const HeaderFeed = ({ image, title, onClick }) => (
  <header className="header-feed">
    <div className="content-header-feed">
      <Text className="titulo" type="titleheader">
        {title}
      </Text>
    </div>
    <div className="container-icon">
      <img className="image-icon" onClick={onClick} src={image} alt="#" />
    </div>
  </header>
);

export default HeaderFeed;
