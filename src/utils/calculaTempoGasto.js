export function calculaTempoGasto(data_inicial, data_final) { // retorna em minutos.
  //Obs creio que essa solução não funciona direito em alguns horários de verão e não sei quanto a ano bissexto, achei outra solução usando moment.js(provavelmente melhor) porém isso traria muitas depencias 
  var dia_de_inicio = new Date(data_inicial.slice(5, 7) + "/" + data_inicial.slice(8, 10) + "/" + data_inicial.slice(0, 4)); // e nesse caso prefiro polpar vocês de instalar isso pra testar.
  var dia_final = new Date(data_final.slice(5, 7) + "/" + data_final.slice(8, 10) + "/" + data_final.slice(0, 4));
  const diffTime = Math.abs(dia_de_inicio - dia_final);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  data_inicial = data_inicial.slice(11, 16);
  data_final = data_final.slice(11, 16);
  console.log(diffDays + " dias");
  if (diffDays > 0) {
    data_final = "23:59";
  }

  data_inicial = Number.parseInt(data_inicial.slice(0, 2)) * 60 + Number.parseInt(data_inicial.slice(3, 5));
  data_final = Number.parseInt(data_final.slice(0, 2)) * 60 + Number.parseInt(data_final.slice(3, 5));



  return data_final - data_inicial;
}