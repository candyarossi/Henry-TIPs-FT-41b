// input: "{ [ ] ( ) }" output: true
// input: "{ [ ( ] ) }" output: false

function HasBalancedBrackets(string) {
  // Your code here:

  // OPCION 1

  if (string.length % 2 != 0) return false;

  let arrOpenBrackets = [];
  let openBrackets = ["[", "{", "("];
  let closeBrackets = ["]", "}", ")"];
  let i = 0;
  let flag = true;

  while (i < string.length && flag) {
    let char = string[i];
    if (openBrackets.includes(char)) {
      arrOpenBrackets.push(char);
    } else {
      // char = closeBracket
      // arr = {, [     char = ]

      let ultimoAbierto = arrOpenBrackets.pop();
      // arr = {    char = ]    ultimoabierto = [
      let openIndex = openBrackets.indexOf(ultimoAbierto);
      let closeIndex = closeBrackets.indexOf(char);

      if (openIndex !== closeIndex) {
        flag = false;
      }
    }
    i++;
  }

  if (arrOpenBrackets.length !== 0) {
    flag = false;
  }
  return flag;

  // OPCION 2

  let arrOpenBrackets = [];
  let openBrackets = ["[", "{", "("];
  let closeBrackets = ["]", "}", ")"];

  for (let i = 0; i < string.length; i++) {
    if (openBrackets.includes(string[i])) {
      arrOpenBrackets.push(string[i]);
    } else {
      if (
        openBrackets.indexOf(arrOpenBrackets.pop()) !==
        closeBrackets.indexOf(string[i])
      ) {
        return false;
      }
    }
  }

  if (arrOpenBrackets.length !== 0) {
    return false;
  }
  return true;

  // OPCION 3

  const stack = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };

  // input: "{ [ ] ( ) }"
  for (const char of string)
    if (brackets[char]) stack.push(char);
    else if (brackets[stack.pop()] !== char) return false;

  return stack.length === 0;
}

module.exports = HasBalancedBrackets;
