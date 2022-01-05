import Button from "components/Button";
import "styles.scss";

const ModalPerfil = () => {
  return (
    <div className="modalperfil-container">
      <div className="modal-perfil">
        <h4 className="title-modalperfil">Tem certeza?</h4>
        <div className="container-textperfil">
          <p className="text-modalperfil">
            Ao apagar o perfil do pet, não terá como reverter essa ação!
          </p>
        </div>
        <div className="button-modalperfil">
          <Button className="whiteOrange" name="Não" />
          <Button className="purple" name="Sim, excluir" />
        </div>
      </div>
    </div>
  );
};

export default ModalPerfil;
