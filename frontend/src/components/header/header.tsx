import { useContext, useState } from "react";
import Modal from "../modal/modal";
import { NavLink } from "react-router-dom";
import "./header.style.css";
import Context from "../../context/context";

function Header() {
  const { userList } = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <header>
      {modalOpen && <Modal formType={formType} handleModal={handleModal} />}

      <h1>Sistema de Controle de Gastos</h1>
      <nav>
        <NavLink to="/">Lista de Usuários</NavLink>
        <NavLink to="/transactions">Lista de Transações</NavLink>
      </nav>
      <div>
        <button
          className="open-modal-form"
          onClick={() => {
            handleModal();
            setFormType("user");
          }}
        >
          Cadastrar pessoa
        </button>
        <button
          disabled={userList.length === 0}
          className="open-modal-form"
          onClick={() => {
            handleModal();
            setFormType("transaction");
          }}
        >
          Cadastrar transação
        </button>
      </div>
    </header>
  );
}

export default Header;
