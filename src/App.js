//import logo from './logo.svg';
/*Crie um repositório no seu GitHub para o seguinte projeto:
Desenvolva uma aplicação web, client-server, para gerenciar atividades e tempo despendido.
Crie uma página para registrar atividades(nome apenas) e periodo trabalhado, com data/hora início e fim.
Em outra página, crie um relatório de tempo gasto por dia e as atividades envolvidas.
Use as tecnologias nas quais se sentir mais confortável para desenvolver.*/

import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { FormikTeste } from './components/Form/testeFormik';


function App() { //Tela adicionar Tarefas.
  const [id, incrementId] = useState(0);
  const [tarefas, setTarefa] = useState(); //tarefas é o array onde a lista será gravada, set é pra alterar ele.


  const adicionarTarefas = ({ nome_tarefa, data_inicial, data_final, hora_inicial, hora_final }) => {
    incrementId(id + 1);
    setTarefa([...tarefas || [], { nome_tarefa, data_inicial, data_final, hora_inicial, hora_final, id }]);
    //  salvarTarefas(novasTarefas);
  };

  const salvarTarefas = tarefasParaSalvar => {
    localStorage.setItem('tarefas', JSON.stringify(tarefasParaSalvar));
  };

  const carregarTarefas = () => JSON.parse(localStorage.getItem('tarefas'));

  const limparTarefas = () => {
    console.log("entrou");
    setTarefa(null);
    localStorage.clear();
  }

  // cada vez que tarefas for alteradas o useEffect ativa e chama o salvarTarefas que salvar no browser.
  useEffect(() => {
    if (tarefas) {
      salvarTarefas(tarefas);
    }
  }, [tarefas]);

  // na primeira vez que carrega a página ele "recupera" as tarefas salvar no browser;
  useEffect(() => {
    const tarefasCarregadas = carregarTarefas();
    setTarefa(tarefasCarregadas);
    (tarefasCarregadas && incrementId(tarefasCarregadas[tarefasCarregadas.length - 1].id + 1));
  }, []);
  //      
  return (

    <div className="App">
      <Menu tarefas={tarefas} />
      <FormikTeste onSave={adicionarTarefas} onClear={limparTarefas} />
      <div className="btn-linkdin">
        <a href="https://www.linkedin.com/in/junior-carpenedo-2a6b93198/" target="_blank" rel="noreferrer">
          <button type="submit" className="ui linkedin button" >
            <i className="linkedin icon"></i>
            LinkedIn
          </button></a>
      </div>
    </div>
  );
}
export default App;



