
export function Tabela(props) { //obs: de class para esta div q é criada.
  const { tarefas } = props;

  return (
    <table className="conteiner-lista">
      <caption>Tabela de Atividades</caption>
      <thead>
        <tr>
          <th className="nome-tarefa">Nome Tarefa</th>
          <th className="data-inicial">Data Inicial</th>
          <th className="time-inicial">Hora de Início</th>
          <th className="data-final">Data final</th>
          <th className="time-final">Hora final</th>
        </tr>
      </thead>
      <tbody>
        {
          tarefas.map(tarefa => {
            return (
              <tr key={tarefa.id} className="lista-tarefas">
                <td className="nome-tarefa">{tarefa.nome_tarefa}</td>
                <td className="data-inicial">{tarefa.data_inicial}</td>
                <td className="time-inicial">{tarefa.time_inicial}</td>
                <td className="data-final">{tarefa.data_final} </td>
                <td className="time-final">{tarefa.time_final}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}