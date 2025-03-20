import { useContext, useState } from "react";
import { validateUserAge, validateUserName } from "../../validations/validations";
import "./userForm.style.css";
import { createUser } from "../../api/requests";
import Context from "../../context/context";

type formProps = {
  handleModal: () => void;
};

function UserForm({ handleModal }: formProps) {
  const { refreshUsers } = useContext(Context);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      
      // Call the API to create a new user
      await createUser(name, +age);

      alert("Usuário cadastrado com sucesso!");

      await refreshUsers()

      handleModal()
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <> 
      <form className='user-form' onSubmit={handleSubmit}>
      <h1>Cadastro de Usuários</h1>
        <label>
          Nome:
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label >
          Idade:
          <input value={age} onChange={({ target }) => setAge(target.value)} />
        </label>
        <button 
          className="form-btn"
          disabled={!(validateUserName(name) && validateUserAge(+age))}>
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default UserForm;
