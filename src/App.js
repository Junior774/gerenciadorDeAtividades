//import logo from './logo.svg';
//Ter problemas no código é o que faz você aprender.

import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Menu } from './components/Menu';


function App() {
  const [id, incrementId] = useState(0);
  const [tarefas, setTarefa] = useState([]); //tarefas é o array onde a lista será gravada, set é pra alterar ele.


  const adicionarTarefas = ({ nome_tarefa, data_inicial, time_inicial, data_final, time_final }) => {
    incrementId(id + 1);
    setTarefa([...tarefas, { nome_tarefa, data_inicial, time_inicial, data_final, time_final, id }]);
  };

  //      <Tabela tarefas={tarefas} />
  return (
    <div className="App">
      <Menu tarefas={tarefas} />
      <Form onSave={adicionarTarefas} />
    </div>
  );
}



export default App;



/*
 }*/


/*
    <div className="conteiner-lista">
      {
        tarefas.map(tarefa => {
          return (
            <ul key={tarefa.id} className="lista-tarefas">
              <li className="tarefa-id">{tarefa.id}</li>
              <li className="nome-tarefa">{tarefa.nome_tarefa}</li>
              <li className="data-inicial">{tarefa.data_inicial}</li>
              <li className="time-inicial">{tarefa.time_inicial}</li>
              <li className="data-final">{tarefa.data_final} </li>
              <li className="time-final">{tarefa.time_final}</li>
            </ul>
          );
        })
      }
    </div>*/


/* const organizarListByData = () => {
let novalista = tarefas;
tarefas.map(function (tarefa, index) {
 const data1: Date = tarefa.data_inicial;
 var c = tarefa;
 console.log("Teste1");
 console.log(index + 1);
 console.log(tarefas.length);
 if (index + 1 < tarefas.length) {
   console.log("entrou");
   const data2: Date = tarefas[index + 1].data_inicial;
   if (data1 > data2) {
     novalista[index] = tarefas[index + 1];
     //console.log([tarefas[index], tarefas[index + 1]]);
     novalista[index + 1] = c; //talvez usar uma lista de tarefas novas e setTarefa([tarefas]); pode ser melhor
   }
 }

})
console.log(tarefas)
setTarefa([tarefas, { novalista }]);
}*/
