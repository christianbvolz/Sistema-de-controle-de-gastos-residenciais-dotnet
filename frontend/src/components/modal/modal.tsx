import "./modal.style.css";
import UserForm from "../userForm/userForm";
import TransactionForm from "../transactionForm/transactionForm";

type modalProps = {
  handleModal: () => void;
  formType: string;
};

function Modal({ formType, handleModal }: modalProps) {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-btn" onClick={handleModal}>
          Voltar
        </button>
        {formType === "user" && <UserForm handleModal={handleModal} />}
        {formType === "transaction" && (
          <TransactionForm handleModal={handleModal} />
        )}
      </div>
    </div>
  );
}

export default Modal;
