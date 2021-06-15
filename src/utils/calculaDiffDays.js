export function calculaDiffDays(data_inicial, data_final) {
  //Obs creio que essa solução não funciona direito em alguns horários de verão e não sei quanto a ano bissexto, achei outra solução usando moment.js(provavelmente melhor) porém isso traria muitas depencias 
  var dia_de_inicio = new Date(data_inicial.slice(5, 7) + "/" + data_inicial.slice(8, 10) + "/" + data_inicial.slice(0, 4)); // e nesse caso prefiro polpar vocês de instalar isso pra testar.
  var dia_final = new Date(data_final.slice(5, 7) + "/" + data_final.slice(8, 10) + "/" + data_final.slice(0, 4));

  const diffTime = Math.abs(dia_de_inicio - dia_final);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffDays);
  return diffDays;
}