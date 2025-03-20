import { useContext } from "react";
import Context from "../../context/context";
import "./total.style.css"
import { toFloat } from "../../utils";

function Total() {
  const { userList } = useContext(Context);

  const [totalReceita, totalDespesa, saldoFinal] = userList.reduce(
    (acc, { receita, despesa }) => {
      const totalReceita = acc[0] + receita;
      const totalDespesa = acc[1] + despesa;
      const saldoFinal = acc[2] + (receita - despesa);

      return [totalReceita, totalDespesa, saldoFinal];
    },
    [0, 0, 0]
  );

  return (
    <>
      <div className="total-receita-despesa">
        <h2>Consulta de totais:</h2>
        <h3>Total Receitas: {toFloat(totalReceita)}</h3>
        <h3>Total Despesas: {toFloat(totalDespesa)}</h3>
        <h3>Saldo Final: {toFloat(saldoFinal)}</h3>
      </div>
    </>
  );
}

export default Total;
