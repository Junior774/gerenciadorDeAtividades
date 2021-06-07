
export function fazCorpoTabela(tarefas) {
  return ((tarefas && tarefas.map(tarefa => { //em JS sempre que você tiver algo true && + alguma expressão ele valida o primeiro item e se for true executa expressão, caso contrário ignora.

    var data_inicial = new Date(tarefa.data_inicial);

    var time_inicial = data_inicial.toLocaleTimeString().slice(0, 5);
    data_inicial = data_inicial.toLocaleDateString("PT-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    var data_final = new Date(tarefa.data_final);
    var time_final = data_final.toLocaleTimeString().slice(0, 5);
    data_final = data_final.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return (
      <tr key={tarefa.id} className="lista-tarefas">
        <td className="nome-tarefa">{tarefa.nome_tarefa}</td>
        <td className="data-inicial">{data_inicial}</td>
        <td className="time-inicial">{time_inicial}</td>
        <td className="data-final">{data_final}</td>
        <td className="time-final">{time_final}</td>
      </tr>
    );
  })))
}