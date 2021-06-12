

import './styles.css';

import { Formik, Field } from 'formik';

export function FormikTeste(props) {
  return (
    <Formik
      initialValues={{
        nome_tarefa: 'Exemplo Tarefa',
        data_inicio: Date,
        data_fim: Date
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <div>
            <h1 className="titulo-add-tarefa">Adicionar Tarefas</h1>
          </div>
          <form className="form-tarefa" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="nome_tarefa">Nome Tarefa: </label>
                <Field type="text" className="text-field" name="nome_tarefa" />
              </div >
              <div>
                <label htmlFor="data_inicio">Data de início: </label>
                <Field type="datetime-local" className="date-field" name="data_inicio" value={undefined} />
              </div>
              <div>
                <label htmlFor="data_fim">Data de término: </label>
                <Field type="datetime-local" className="date-field" name="data_fim" value={undefined} />
              </div>
            </div>
            <div className="form-row">
              <div className="btn-salvar">
                <button className="add-tarefas" type="submit" onClick={() => {
                  props.onSave({
                    nome_tarefa: values.nome_tarefa,
                    data_inicial: values.data_inicio,
                    data_final: values.data_fim
                  })
                }}>Salvar</button>
              </div>
            </div>
          </form>
        </>
      )}
    </Formik>
  );
}