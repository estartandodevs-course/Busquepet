import "./Style.scss";
import {useHistory} from 'react-router-dom'
export default function HeaderAdoption(props) {
  const { titleName, imageOne, imageTwo, identification } = props;
  const history = useHistory();
  function comeBack() {
    history.goBack()
  }
  return (
    <>
      <header className={identification}>
        <div className="arrow-back">
          <img onClick={comeBack} src={imageOne} alt="seta volta" />
        </div>
          <h1>{titleName}</h1>
        <img src={imageTwo} alt="icon"/>
      </header>
    </>
  );
}
