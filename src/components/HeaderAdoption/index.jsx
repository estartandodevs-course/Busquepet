import { useHistory } from "react-router-dom";
import "./Style.scss";

export default function HeaderAdoption(props) {
  const { titleName, imageOne, imageTwo, identification } = props;
  const history = useHistory();
  function comeBack() {
    history.goBack("/feed")
  }
        
  return (
    <>
      <header className={identification}>
        <div className="arrow-back">
          <img onClick={comeBack} src={imageOne} alt="seta volta" />
        </div>
        <div className="title-headeradoption">
          <h1>{titleName}</h1>
        </div>
        {imageTwo && <img src={imageTwo} alt="icon" />}
      </header>
    </>
  );
}
