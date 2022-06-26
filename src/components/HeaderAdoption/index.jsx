import { useNavigate } from "react-router-dom";
import "./styles.scss";

const HeaderAdoption = ({ titleName, imageOne, imageTwo, id }) => {
  const navigate = useNavigate();

  function Back() {
    navigate(-1);
  }

  return (
    <>
      <header className={id}>
        <div className="arrow-back">
          <img onClick={Back} src={imageOne} alt="arrow back" />
        </div>
        <div className="title-headeradoption">
          <h1>{titleName}</h1>
        </div>
        {imageTwo && <img src={imageTwo} alt="icon" />}
      </header>
    </>
  );
};

export default HeaderAdoption;
