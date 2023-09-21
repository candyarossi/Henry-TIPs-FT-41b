/*
Tenés que saber cuantos argumentos la función que estas 'curring' toma.
La función anterior tenía 4 parámetros
La función que devuelvas del "curring" tiene acumuladas los argumentos anteriores.
La función debe determinar si los argumentos acumulados son iguales al numero de parámetros que la función original requiere, y devolver lo que la función original devolvería con los argumentos acumulados.
*/

function curry(fn) {
  // Your code here:

  // OPCION 1

  let numArgs = fn.length;
  const params = [];
  let calledTimes = 0;
  let returnedValues;

  function curryDo(...args) {
    params.push(args[0]);
    if (params.length === numArgs) {
      returnedValues = fn(...params);
      return returnedValues;
    }
    calledTimes++;
    return curryDo;
  }
  return curryDo;

  // OPCION 2

  let numArgs = fn.length;
  const params = [];

  return function curryDo(arg) {
    params.push(arg);
    if (params.length === numArgs) return fn(...params);
    return curryDo;
  };

  // OPCION 3

  let numArgs = fn.length;
  const params = [];

  return function curryDo(arg) {
    return params.push(arg) === numArgs ? fn(...params) : curryDo;
  };
}

module.exports = curry;
