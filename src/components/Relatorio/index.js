//import { useState } from 'react';



export function Relatorio(props) {
  //const [dias, setDias] = useState([]);

  const tarefas = props.location.state.tarefas;
  console.log(tarefas);
  function fazRelatorio(tarefas) {
    /*console.log(tarefas[0].data_inicial);
    console.log(Number.parseInt(tarefas[0].data_inicial.split("-")));
    const teste = tarefas.filter((tarefa) => Number.parseInt(tarefa.data_inicial.split("-")) > 2020);
    console.log(teste);*/
  }
  fazRelatorio(tarefas);
  return (
    <div>oi</div>
  )
}