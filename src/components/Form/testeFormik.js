

import './styles.css';

import { Formik, Field } from 'formik';
import { calculaDiffDays } from '../../utils/calculaDiffDays';
import { pad } from '../../utils/formatMinutesToTime';

export function FormikTeste(props) {
  const Data1 = new Date();
  function validate(values) { //sempre retorna os erros ou um objeto vazio, caso retornar vazio o próprio formik ignora.
    const erros = {};
    if (!values.nome_tarefa) {
      erros.nome_tarefa = "Nome é Obrigatório";
    }
    if (values.data_inicio > values.data_fim) {
      erros.data_fim = "A data final não pode ser menor que a inicial";
      console.log("entrou1");
    }
    if (values.time_inicio >= values.time_fim) {
      erros.time_fim = "O horário final deve ser maior que o inicial";
      console.log("entrou1");
    }

    return erros;
  }
  return (
    <Formik
      initialValues={{
        nome_tarefa: 'Exemplo Tarefa',
        data_inicio: Data1.getFullYear().toString() + "-" + (pad(Data1.getMonth() + 1))
          + "-" + Data1.getDate(),
        data_fim: Data1.getFullYear().toString() + "-" + (pad(Data1.getMonth() + 1))
          + "-" + Data1.getDate(),
        time_inicio: (pad(Data1.getHours())) + ":" + (pad(Data1.getMinutes())),
        time_fim: (pad(Data1.getHours())) + ":" + (pad(Data1.getMinutes() + 1)),
      }}
      onSubmit={(values, actions) => {
        /*  setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);*/
      }}
      validate={validate}
      validateOnMount
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <>
          <div>
            <h1 className="titulo-add-tarefa">Adicionar Tarefas</h1>
          </div>
          <form className="form-tarefa" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="nome_tarefa">Nome Tarefa: </label>
                <Field type="text" className="text-field" name="nome_tarefa" />
                {errors.nome_tarefa && (<div><span className="errors">{errors.nome_tarefa}</span></div>)}
              </div >
              <div>
                <label htmlFor="data_inicio">Data de início: </label>
                <Field type="date" className="date-field" name="data_inicio" />
                {errors.data_inicio && (<div><span className="errors">{errors.data_inicio}</span></div>)}
              </div>
              <div>
                <label htmlFor="data_fim">Data de término: </label>
                <Field type="date" className="date-field" name="data_fim" />
                {errors.data_fim && (<div><span className="errors">{errors.data_fim}</span></div>)}
              </div>
              <div>
                <label htmlFor="time_inicio">Horário de início: </label>
                <Field type="time" className="time-field" name="time_inicio" />
                {errors.time_inicio && (<div><span className="errors">{errors.time_inicio}</span></div>)}
              </div>
              <div>
                <label htmlFor="time_fim">Horário de término: </label>
                <Field type="time" className="time-field" name="time_fim" />
                {errors.time_fim && (<div><span className="errors">{errors.time_fim}</span></div>)}
              </div>
            </div>
            <div className="form-row">
              <div className="btn-salvar">
                <button className="add-tarefas" type="submit" onClick={() => {
                  props.onSave({
                    nome_tarefa: values.nome_tarefa,
                    data_inicial: values.data_inicio,
                    data_final: values.data_fim,
                    hora_inicial: values.time_inicio,
                    hora_final: values.time_fim,
                  })
                }}>Salvar</button>
              </div>
            </div>
          </form>
        </>
      )
      }
    </Formik >
  );
}