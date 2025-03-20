import { useContext  } from "react";
import Header from "../../components/header/header";
import Total from "../../components/total/total";
import trashIcon from "../../assets/trash.svg";
import { deleteUser } from "../../api/requests";
import "./userList.style.css";
import Context from "../../context/context";

function UserListPage() {
  const { userList, refreshUsers, refreshTransactions } = useContext(Context);

  return (
    <div>
      <Header />
      {/* Conditional rendering based on userList length */}
      {userList.length === 0 ? (
        <h1>Nenhuma pessoa cadastrada</h1>
      ) : (
      <div className="user-list">
        <h2>Lista de Usuários</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Receita</th>
              <th>Despesa</th>
              <th>Total</th>
              <th>Deletar Pessoa</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through userList and render each user's data */}
            {userList.map(
              ({ id, name, age, receita, despesa, total }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{receita}</td>
                  <td>{despesa}</td>
                  <td>{total}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={async () => {
                        // Call deleteUser API and reload the page
                        await deleteUser(id);
                        
                        await refreshUsers();
                        await refreshTransactions();
                      }}
                    >
                      <img src={trashIcon} alt="test" />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Total />
      </div>)}
    </div>
  );
}

export default UserListPage;
