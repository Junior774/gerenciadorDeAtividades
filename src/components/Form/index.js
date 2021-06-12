/*

import { useState } from 'react';
import './styles.css';
export function Form(props) {

  const [nome_tarefa, setText] = useState("");
  const [data_inicio, setDate] = useState(Date);
  const [data_fim, setDateFim] = useState(Date);

  return (
    <div>
      <div>
        <h1 className="titulo-add-tarefa">Adicionar Tarefas</h1>
      </div>
      <form className="form-tarefa" action="#" onSubmit={(e) => {
        e.preventDefault();
        //e.stopPropagation();
      }}>
        <div className="form-row">
          <div>
            <label>Nome Tarefa: </label>
            <input type="text" className="text-field" onChange={e => setText(e.currentTarget.value)} />
          </div >
          <div>
            <label>Data de início: </label>
            <input type="datetime-local" className="date-field" onChange={e => setDate(e.currentTarget.value)} />
          </div>
          <div>
            <label>Data de término: </label>
            <input type="datetime-local" className="date-field" onChange={e => setDateFim(e.currentTarget.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="btn-salvar">
            <button className="add-tarefas" onClick={() => {
              props.onSave({
                nome_tarefa: nome_tarefa,
                data_inicial: data_inicio,
                data_final: data_fim
              })
            }}>Salvar</button>
          </div>
        </div>
      </form>

    </div>
  );
}*/