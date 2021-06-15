
import './styles.css';
//import App from './App';
import { fazCorpoTabela } from '../../utils/fazCorpoTabela.js';

export function Tabela(props) { //obs: de class para esta div q é criada.
  //console(this.props.location.state)
  const tarefas = props.location.state.tarefas;

  return (
    <table className="conteiner-lista">
      <caption>Tabela de Atividades</caption>
      <thead>
        <tr>
          <th className="nome-tarefa">Nome Tarefa</th>
          <th className="data-inicial">Data Inicial</th>
          <th className="data-final">Data final</th>
          <th colSpan="2" className="periodo-trabalho">Período de trabalho</th>
        </tr>
      </thead>
      <tbody>
        {
          fazCorpoTabela(tarefas)
        }
      </tbody>
    </table>
  );


}