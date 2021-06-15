import { calculaTempoGasto } from './calculaTempoGasto';

export function calculaTempoGastodia(tarefas) { //recebe as tarefas envolvidadas naquele dia e retorna o tempo gasto do dia.
  let tempo_gasto_dia = 0;
  tarefas.map(function (tarefa) {
    tempo_gasto_dia += calculaTempoGasto(tarefa.hora_inicial, tarefa.hora_final);
  })
  return tempo_gasto_dia;
}