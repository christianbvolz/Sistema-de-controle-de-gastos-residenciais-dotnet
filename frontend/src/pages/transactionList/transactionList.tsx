import { useContext } from "react";
import Header from "../../components/header/header";
import "./transactionList.style.css";
import Total from "../../components/total/total";
import Context from "../../context/context";

function TransactionListPage() {
  const { transactions } = useContext(Context);

  return (
    <div>
      <Header />
      {/* Conditional rendering based on transactions length */}
      {transactions.length === 0 ? (
        <h1>Sem transações cadastradas</h1>
      ) : (
        <div className="transaction-list">
          <h2>Lista de Transações</h2>
          <table>
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
               {/* Map through transactions and render each transaction's data */}
              {transactions.map(
                ({ id, description, type, value, user: { name } }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{type}</td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Total />
        </div>
      )}
    </div>
  );
}

export default TransactionListPage;
