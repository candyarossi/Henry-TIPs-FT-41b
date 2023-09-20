/*

* Toma una función como parámetro
* Devuelve una función spy que toma cualquier numero de argumentos
* spy llama a la función y devuelve lo que ella devuelve
* spy tiene los siguientes métodos:
    -.getCallCount(): Devuelve la cantidad de veces que el spy fue llamado
    - .wasCalledWith(val): devuelve true si la función fue alguna vez llamada con ese valor, else false
    - .returned(val): devuelve true si alguna vez devolvió ese valor.


function adder(n1, n2) { return n1 + n2; }
const adderSpy = spyOn(adder);
adderSpy(2, 4); // returns 6
adderSpy.getCallCount(); // 1
adderSpy.wasCalledWith(2); // true
adderSpy.returned(6); // true
*/

function spyOn(fn) {
  // Your code here:

  // OPCION 1

  let count = 0;
  let values = [];
  let results = [];

  const spy = (...args) => {
    count++;
    values.push(...args);
    let result = fn(...args);
    results.push(result);
    return result;
  };

  spy.getCallCount = () => count;
  spy.wasCalledWith = (value) => values.includes(value);
  spy.returned = (value) => results.includes(value);

  return spy;

  // OPCION 2

  let count = 0;
  let values = {};
  let results = {};

  const spy = (...args) => {
    count++;
    for (const v of args) values[v] = true;
    let result = fn(...args);
    results[result] = true;
    return result;
  };

  spy.getCallCount = () => count;
  spy.wasCalledWith = (value) => !!values[value];
  spy.returned = (value) => !!results[value];

  return spy;
}

module.exports = spyOn;
