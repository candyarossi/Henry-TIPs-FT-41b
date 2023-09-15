function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:

  // OPCION 1

  let [hours, mins] = time.split(":").map((e) => Number(e));
  let minutosTotales = hours * 60 + mins + minutesToAdd;
  hours = Math.floor(minutosTotales / 60);
  hours = hours % 12;
  mins = minutosTotales % 60;
  if (hours === 0) hours = 12;
  if (hours < 10) hours = "0" + hours;
  if (mins < 10) mins = "0" + mins;
  return `${hours}:${mins}`;

  // OPCION 2

  let fecha = new Date();
  let [hours, mins] = time.split(":").map((e) => Number(e));
  fecha.setHours(hours);
  //fecha.setMinutes(mins);
  fecha.setMinutes(mins + minutesToAdd);

  //let nuevaFecha = new Date(fecha.getTime() + minutesToAdd * 60000);
  return fecha
    .toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h12",
    })
    .replace("AM", "")
    .replace("PM", "")
    .trimEnd();

  // OPCION 3

  let [hours, mins] = time.split(":").map((e) => Number(e));
  let diferencia = 60 - mins;
  minutesToAdd = Number(minutesToAdd);
  while (minutesToAdd >= diferencia) {
    mins = 0;
    minutesToAdd -= diferencia;
    hours += 1;
    if (hours === 13) hours = 1;
    diferencia = 60;
  }
  mins += minutesToAdd;
  if (mins < 10) mins = "0" + mins;
  if (hours < 10) hours = "0" + hours;
  return hours + ":" + mins;

  // OPCION 4

  let [hours, minutes] = time.split(":").map((element) => Number(element));
  minutesToAdd = Number(minutesToAdd);
  minutes = minutes + minutesToAdd;
  while (minutes >= 60) {
    minutes = minutes - 60;
    hours = hours + 1;
    if (hours === 13) {
      hours = 1;
    }
  }
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;
  return hours + ":" + minutes;
}

module.exports = clockMinuteAdder;
