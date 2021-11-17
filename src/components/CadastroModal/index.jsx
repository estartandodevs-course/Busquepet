import { useHistory } from "react-router-dom";
import ErrorModal from "../../assets/images/ErrorModal.svg";
import Button from "../../components/ButtonLegacy/index";
import closeButton from "../../assets/images/close-button.svg";
import "./CadastroModal.scss";

const CadastroModal = ({ close, text }) => {
  const { push } = useHistory();

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-button-modal" onClick={close}>
          <img src={closeButton} alt="" className="close-button" />
        </div>

        <img src={ErrorModal} alt=""></img>

        <h4 className="title">Ooops</h4>

        <p className="text">{text}</p>

        <span>Vem, vai ser bem rapidinho! 😸😻</span>

        <Button
          className="whiteOrange"
          name="Fazer o Cadastro"
          onClick={() => push("/cadastro-tipo-de-pessoa")}
        />
      </div>
    </div>
  );
};

export default CadastroModal;
