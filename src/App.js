//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [tarefas, setTarefa] = useState([]); //tarefas é o array onde a lista será gravada, set é pra alterar ele.
  //tarefas.push("oi");

  const adicionarTarefas = (value) => {
    setTarefa([...tarefas, value]);
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
  return (
    <div>
      <input type="text" onChange={e => setText(e.currentTarget.value)} />
      <button onClick={() => props.onSave(nome_tarefa)}>Salvar</button>
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
            <div>
              <span>{tarefa}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
