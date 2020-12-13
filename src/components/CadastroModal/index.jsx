import React from "react";
import "./CadastroModal.scss";
import ErrorModal from "../../assets/images/ErrorModal.svg";
import Button from '../../components/Button/index'
import closeButton from '../../assets/images/close-button.svg'
// import { useHistory } from "react-router-dom";

const CadastroModal = (props) => {
  const { close } = props;
  // const history = useHistory();

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-button-modal" onClick={close}>
          <img src={closeButton} alt="" className="close-button"/>
        </div>

        <img src={ErrorModal} alt=""></img>

        <h4 className="title">Ooops</h4>

        <p className="text">
          Para você poder salvar o perfil desse pet, é necessário fazer um
          cadastro.
        </p>

        <span>Vem, vai ser bem rapidinho! 😸😻</span>

        <Button identifier="whiteOrange" name="Fazer o Cadastro" />
      </div>
    </div>
  );
};

export default CadastroModal;
