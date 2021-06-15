

import './styles.css';

import { calculaTempoGasto } from '../../utils/calculaTempoGasto';
import { formatMinutesToTime } from '../../utils/formatMinutesToTime';
import { retornaNomeDia } from '../../utils/retornaNomeDia';
import { calculaDias } from '../../utils/calculaDias';
import { calculaTempoGastodia } from '../../utils/calculaTempoGastoDia';




export function Relatorio(props) {

  const tarefas = props.location.state.tarefas;
  let mes, mesAnterior;
  if (Array.isArray(tarefas) && tarefas.length) {

    orgalizaTarefas(tarefas); //organaliza as tarefas pela data em ordem crescente. 
    let relatorio = fazRelatorio(mapearDias(tarefas), tarefas); // mapear dias retorna um array com todos os dias
    console.log(relatorio);                                     // em que há pelo menos uma atividade,
    return (                                                    // então é criado o relatório.
      <div className="div-relatorio">
        <h1>Tempo Gasto Total: {relatorio.tempoGastoTotal}h</h1>
        {
          relatorio.dias.map(function (dia) {
            mes = "";
            if (mesAnterior !== dia.day.slice(0, 7)) { // sim está parte é uma grande gambiarra e precisa ser refatorado o jeito que eu mostro o mês e ano;
              mesAnterior = dia.day.slice(0, 7);
              mes = dia.day.slice(0, 7);
            }
            return (
              <div key={dia.day} className="div-dia">
                <h2 className="mes">{mes}</h2>
                <h2 className="dia">Dia {dia.day.slice(-2)}</h2>
                <h2 >{retornaNomeDia(dia.tarefas[0].data_inicial)}</h2>
                <h3 >Tempo Gasto Total: {dia.tempo_gasto_dia}h</h3>
                <h3 >Atividades Envolvidas / Tempo Gasto Parcial{(dia.tarefas).map(tarefa => {
                  return (
                    <div key={tarefa.id}>
                      <h4 key={tarefa.id}> {tarefa.nome_tarefa} / {(formatMinutesToTime(calculaTempoGasto(tarefa.hora_inicial, tarefa.hora_final)))}h </h4>
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

function mapearDias(tarefas) { // passar tarefas já ordenada, a função retorna em ordem todos os dias em que há pelo menos 1 tarefa.
  let dia = [];

  tarefas.map(function (tarefa, index) {

    dia = calculaDias(tarefa.data_inicial, tarefa.data_final, dia);
  })
  return dia;
}


function fazRelatorio(diasMapeados, tarefas) { // passar tarefas já ordenada, a função retorna o tempo gasto total,
  let atividades = [];                         // e para cada dia ela retorna o tempo gasto diário,e uma lista com as tarefas envolvidas.
  let relatorio = { tempoGastoTotal: 0, dias: [] };
  diasMapeados.map(function (dia_atual, index) {
    atividades = tarefas.filter(function (tarefa, index) {
      return tarefa.data_inicial <= dia_atual && tarefa.data_final >= dia_atual;
    })
    console.log(atividades);
    relatorio.tempoGastoTotal += calculaTempoGastodia(atividades);
    relatorio.dias.push({ day: dia_atual, tarefas: atividades, tempo_gasto_dia: formatMinutesToTime(calculaTempoGastodia(atividades)) })
  })
  relatorio.tempoGastoTotal = formatMinutesToTime(relatorio.tempoGastoTotal);
  return relatorio;
}



