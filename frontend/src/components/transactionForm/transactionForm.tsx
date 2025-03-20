import { useContext, useState } from "react";
import "./transactionForm.style.css";
import { createTransaction } from "../../api/requests";
import {
  validateTransactionDescription,
  validateTransactionType,
  validateTransactionValue,
  validateUserId,
} from "../../validations/validations";
import Context from "../../context/context";

type formProps = {
  handleModal: () => void;
};

function TransactionForm({ handleModal }: formProps) {
  const { userList, refreshTransactions, refreshUsers } = useContext(Context);

  const [userId, setUserId] = useState(userList[0].id);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState<"despesa" | "receita">("despesa");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      // Call the API to create a new user
      await createTransaction(description, +value, type, +userId);

      alert("Transação cadastrada com sucesso!");

      await refreshTransactions();
      await refreshUsers();

      handleModal();
    } catch (e: unknown) {
      alert("Precisa ser maior de 18 anos para cadastrar um receita!");
      console.log(e);
    }
  };

  return (
    <>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <h1>Cadastro de Transações</h1>
        <label>
          Descrição:
          <textarea
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            min="0"
            step=".01"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </label>
        <label>
          Tipo de transação:
          <select
            onChange={({ target }) =>
              setType(target.value as "receita" | "despesa")
            }
          >
            <option value={"despesa"}>Despesa</option>
            <option value={"receita"}>Receita</option>
          </select>
        </label>
        <label>
          Pessoa:
          <select
            onChange={({ target }) =>
              setUserId(target.value as unknown as number)
            }
          >
            {userList.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>

        <button
          className="form-btn"
          disabled={
            !(
              validateTransactionDescription(description) &&
              validateTransactionValue(+value) &&
              validateTransactionType(type) &&
              validateUserId(+userId)
            )
          }
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
