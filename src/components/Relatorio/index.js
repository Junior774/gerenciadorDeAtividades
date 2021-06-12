

import './styles.css';

import { calculaTempoGasto } from '../../utils/calculaTempoGasto';
import { formatMinutesToTime } from '../../utils/formatMinutesToTime';
import { retornaNomeDia } from '../../utils/retornaNomeDia';




export function Relatorio(props) {

  const tarefas = props.location.state.tarefas;

  if (Array.isArray(tarefas) && tarefas.length) {
    function orgalizaTarefas(tarefas) { //Organiza tarefas em ordem de data crescente.

      tarefas.sort(function (a, b) {
        if (a.data_inicial > b.data_inicial) {
          return 1;
        }
        if (a.data_inicial < b.data_inicial) {
          return -1;
        }
        return 0;
      });

    }
    function tempoGastoDia(tarefas) { // passar tarefas já ordenada, a função retorna
      let tempo_gasto_minutos = 0;
      let atividades = [];
      let dia = [];
      let dia_atual = tarefas[0].data_inicial.slice(0, 10);
      tarefas.map(function (tarefa, index) { //Refatorar, esse map pode ser bem melhorado.

        if (dia_atual !== tarefa.data_inicial.slice(0, 10)) {
          dia.push({ day: dia_atual.slice(0, 10), tarefas: atividades, tempo_gasto: tempo_gasto_minutos });
          dia_atual = tarefa.data_inicial.slice(0, 10);
          atividades = [];
          tempo_gasto_minutos = 0;
        }
        tempo_gasto_minutos += calculaTempoGasto(tarefa.data_inicial, tarefa.data_final);

        atividades.push(tarefa);
      })
      dia.push({ day: dia_atual.slice(0, 10), tarefas: atividades, tempo_gasto: tempo_gasto_minutos });
      return dia;
    }
    orgalizaTarefas(tarefas);
    let teste = tempoGastoDia(tarefas);
    console.log(teste);
    return (
      // fazCorpoTabela(dia.tarefas)
      <div className="div-relatorio">
        {
          teste.map(function (dia) {

            return (
              <div key={dia.day} className="div-dia">
                <h2 >Data: {dia.day.slice(0, 7)}</h2>
                <h2 className="relatorio dia">Dia {dia.day.slice(-2)}</h2>
                <h2 >{retornaNomeDia(dia.tarefas[0].data_inicial)}</h2>
                <h3 >Tempo Gasto Total: {formatMinutesToTime(dia.tempo_gasto)}h</h3>
                <h3 >Atividades Envolvidas / Tempo Gasto Parcial{(dia.tarefas).map(tarefa => {
                  return (
                    <div key={tarefa.id}>
                      <h4 key={tarefa.id}> {tarefa.nome_tarefa} / {(formatMinutesToTime(calculaTempoGasto(tarefa.data_inicial, tarefa.data_final)))}h </h4>
                    </div>
                  );
                })}</h3>
              </div>
            )
          })
        }
      </div>

    );
  }
  return <span>Nenhuma Tarefa!</span>;

}