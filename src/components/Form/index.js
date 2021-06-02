
import { useState } from 'react';
import './index.css';
export function Form(props) {
  //const outraForma = props.onSave;
  const [nome_tarefa, setText] = useState("");
  const [data_inicio, setDate] = useState("");//  detalhe q transformei essa data em string ao usar aspas.
  const [data_fim, setDateFim] = useState("");

  return (
    <>
      <div>
        <h1 className="titulo-add-tarefa">Adicionar Tarefas</h1>
      </div>
      <div className="form-tarefa">
        <div>
          <label>Nome Tarefa:</label>
          <input type="text" className="text-field" onChange={e => setText(e.currentTarget.value)} />
        </div >
        <div>
          <label>Data de início:</label>
          <input type="datetime-local" className="date-field" onChange={e => setDate(e.currentTarget.value)} />
        </div>
        <div>
          <label>Data de término:</label>
          <input type="datetime-local" className="date-field" onChange={e => setDateFim(e.currentTarget.value)} />
        </div>
      </div>
      <div>
        <button className="add-tarefas" onClick={() => props.onSave({
          nome_tarefa: nome_tarefa,
          data_inicial: data_inicio.slice(0, 10),
          time_inicial: data_inicio.slice(11, data_inicio.length),
          data_final: data_fim.slice(0, 10),
          time_final: data_fim.slice(11, data_fim.length)
          //id: Math.floor(Math.random() * 10000)
        })}>Salvar</button>
      </div>
    </>
  );
}