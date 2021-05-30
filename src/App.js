//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [id, incrementId] = useState(0);
  const [tarefas, setTarefa] = useState([]); //tarefas é o array onde a lista será gravada, set é pra alterar ele.
  //tarefas.push("oi");

  const adicionarTarefas = ({ nome_tarefa, data_inicial }) => {
    incrementId(id + 1);
    setTarefa([...tarefas, { nome_tarefa, data_inicial, id }]);
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
  const [data_inicio, setDate] = useState();

  return (
    <div>
      <input type="text" onChange={e => setText(e.currentTarget.value)} />
      <input type="date" onChange={e => setDate(e.currentTarget.value)} />
      <button onClick={() => props.onSave({
        nome_tarefa: nome_tarefa,
        data_inicial: data_inicio,
        id: Math.floor(Math.random() * 10000)
      })}>Salvar</button>
    </div>
  );
}

export function List(props) { //obs: de class a essa div q é criada.
  const { tarefas } = props;
  return (
    <div>
      {
        tarefas.map(tarefa => {
          return (
            <div key={tarefa.id} >
              <li>{tarefa.id + " " + tarefa.nome_tarefa + " " + tarefa.data_inicial}</li>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
