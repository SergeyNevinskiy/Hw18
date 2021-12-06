function mainFunction(callback) {
  const a = +prompt("Enter 1 number");
  const b = +prompt("Enter 2 number ");
  return callback(a, b);
}

function exponentiation(a, b) {
  const result = a ** b;
  alert(result);
  return result;
}

function multiplay(a, b) {
  const result = a * b;
  alert(result);
  return result;
}

function division(a, b) {
  const result = a / b;
  alert(result);
  return result;
}

function modulo(a, b) {
  const result = a % b;
  alert(result);
  return result;
}

console.log(mainFunction(exponentiation));
console.log(mainFunction(multiplay));
console.log(mainFunction(division));
console.log(mainFunction(modulo));
