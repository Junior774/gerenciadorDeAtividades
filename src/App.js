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

  /*const organizarListByData = (tarefas: Array) => {
    tarefas.map((tarefa, index) => {
      const data1: Date = tarefa.data_inicial;
      var c = tarefa;
      if (index + 1 > tarefas.length) {
        const data2: Date = tarefas[index + 1].data_inicial;
        if (data1 > data2) {
          setTarefa([tarefas[index], tarefas[index + 1]]);
          setTarefa([tarefas[index + 1], c]); //talvez usar uma lista de tarefas novas e setTarefa([tarefas]); pode ser melhor
        }
      } else
        return (0);
    })
  }*/

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
    <div className="form-tarefa">
      <input type="text" className="text-field" onChange={e => setText(e.currentTarget.value)} />
      <input type="datetime-local" className="date-field" onChange={e => setDate(e.currentTarget.value)} />
      <input type="datetime-local" className="date-field" onChange={e => setDateFim(e.currentTarget.value)} />
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
    <table className="conteiner-lista">
      <caption>Tabela de Atividades</caption>
      <thead>
        <th className="nome-tarefa">Nome Tarefa</th>
        <th className="data-inicial">Data Inicial</th>
        <th className="time-inicial">Hora de Início</th>
        <th className="data-final">Data final</th>
        <th className="time-final">Hora final</th>
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

export default App;
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
