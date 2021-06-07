export function retornaNomeDia(data) {  //format "2021-06-13T07:08"
  let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'];

  return dias[new Date(data).getDay()];
}