export function formatMinutesToTime(minutes) { //retorna HH:MM

  return pad((minutes / 60).toFixed(0)) + ":" + pad(minutes % 60);
}


function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}




