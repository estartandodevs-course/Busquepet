import React from "react";
import "./styles.scss";
import ErrorModal from "assets/images/sucess-icon.svg";
import Button from "components/Button/index";
import closeButton from "assets/images/close-button.svg";

const ModalEdit = ({ close }) => (
  <div className="modal-container">
    <div className="modal">
      <div className="close-button-modal" onClick={close}>
        <img src={closeButton} alt="" className="close-button" />
      </div>

      <img src={ErrorModal} alt=""></img>

      <h4 className="title">Uhuuul</h4>

      <p className="text">Suas alterações foram realizadas com sucesso!!</p>
      <div className="button-container-edit">
        <Button className="whiteOrange" name="Entendido!" />
      </div>
    </div>
  </div>
);

export default ModalEdit;
