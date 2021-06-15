
export function calculaTempoGasto(hora_inicial, hora_final) { // retorna em minutos.

  hora_inicial = Number.parseInt(hora_inicial.slice(0, 2)) * 60 + Number.parseInt(hora_inicial.slice(3, 5));
  hora_final = Number.parseInt(hora_final.slice(0, 2)) * 60 + Number.parseInt(hora_final.slice(3, 5));

  return hora_final - hora_inicial;
}