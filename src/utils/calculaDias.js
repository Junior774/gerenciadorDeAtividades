import { calculaDiffDays } from './calculaDiffDays';

export function calculaDias(data_inicial, data_final, diasRegistrados) { // retorna os dias entre uma data e outra, mas apenas os dias ainda não mapeados.

  if ((diasRegistrados[diasRegistrados.length - 1]) >= data_final) { //se outra tarefa já teve uma data final maior ou igual, significa que esses dias já foram mapeados, a lista vem ordenada por ordem de data inicial.

    return diasRegistrados;
  }
  var dia_atual = new Date(data_inicial.slice(5, 7) + "/" + data_inicial.slice(8, 10) + "/" + data_inicial.slice(0, 4));//precisei usar um Date para poder interar datas com precisão

  //let teste = Array;
  //teste = diasRegistrados;
  for (let index = 0; index <= calculaDiffDays(data_inicial, data_final); index++) { // não quero datas repetidas no retorno, então eu eu só irei armazenar os dias seguintes após o último dia registrado.
    if (data_inicial <= diasRegistrados[diasRegistrados.length - 1]) {
      data_inicial = data_inicial.slice(0, 8) + (Number.parseInt(data_inicial.slice(-2)) + 1);
      dia_atual.setDate(dia_atual.getDate() + 1);
    } else {
      break;
    }
  }
  //console.log(dia_atual.toISOString().slice(0, 10));

  for (let index = 0; index <= calculaDiffDays(data_inicial, data_final); index++) { // aqui já entra com a data inicial já 1 dia a frente do último dia registrado anteriormente.

    diasRegistrados.push(dia_atual.toISOString().slice(0, 10)); // então já começamos armazenando

    dia_atual.setDate(dia_atual.getDate() + 1); // iteramos o dia dessa forma ele respeita meses e anos.
  }

  return diasRegistrados;
}