
import { useState } from 'react';

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