export function formatMinutesToTime(minutes) { //retorna HH:MM

  return pad((minutes / 60).toString().slice(0, 2)) + ":" + pad(minutes % 60);
}


export function pad(d) {
  return (d < 10) ? ('0' + d.toString()).slice(0, 2) : d.toString(); // d < 10 ? se sim preenche com 0.
}




