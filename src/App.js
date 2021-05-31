//import logo from './logo.svg';
//Ter problemas no código é o que faz você aprender.
/*Crie um repositório no seu GitHub para o seguinte projeto:
Desenvolva uma aplicação web, client-server, para gerenciar atividades e tempo despendido.
Crie uma página para registrar atividades(nome apenas) e periodo trabalhado, com data/hora início e fim.
Em outra página, crie um relatório de tempo gasto por dia e as atividades envolvidas.
Use as tecnologias nas quais se sentir mais confortável para desenvolver.*/
import { useState } from 'react';
import './App.css';

function App() {
  const [id, incrementId] = useState(0);
  const [tarefas, setTarefa] = useState([]); //tarefas é o array onde a lista será gravada, set é pra alterar ele.


  const adicionarTarefas = ({ nome_tarefa, data_inicial, time_inicial, data_final, time_final }) => {
    incrementId(id + 1);
    setTarefa([...tarefas, { nome_tarefa, data_inicial, time_inicial, data_final, time_final, id }]);
  };

  return (
    <div className="App">
      <Form onSave={adicionarTarefas} />
      <List tarefas={tarefas} />
    </div>
  );
}

export function Form(props) {
  //const outraForma = props.onSave;
  const [nome_tarefa, setText] = useState("");
  const [data_inicio, setDate] = useState("");//  detalhe q transformei essa data em string ao usar aspas.
  const [data_fim, setDateFim] = useState("");

  return (
    <div>
      <input type="text" onChange={e => setText(e.currentTarget.value)} />
      <input type="datetime-local" onChange={e => setDate(e.currentTarget.value)} />
      <input type="datetime-local" onChange={e => setDateFim(e.currentTarget.value)} />
      <button onClick={() => props.onSave({
        nome_tarefa: nome_tarefa,
        data_inicial: data_inicio.slice(0, 10),
        time_inicial: data_inicio.slice(11, data_inicio.length),
        data_final: data_fim.slice(0, 10),
        time_final: data_fim.slice(11, data_fim.length)
        //id: Math.floor(Math.random() * 10000)
      })}>Salvar</button>
    </div>
  );
}

export function List(props) { //obs: de class para esta div q é criada.
  const { tarefas } = props;

  return (
    <div>
      {
        tarefas.map(tarefa => {
          return (
            <div key={tarefa.id} >
              <li>{tarefa.id + " " + tarefa.nome_tarefa + " " + tarefa.data_inicial + " " + tarefa.time_inicial + " " + tarefa.data_final + " " + tarefa.time_final}</li>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
