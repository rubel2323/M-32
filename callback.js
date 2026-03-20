function callBack(name, call, enjoy) {
  console.log("hello" + " " + name);
  call();
  enjoy();
}
function greet() {
  console.log("congratulation");
}
function joy() {
  console.log("congratulation for your success");
}

callBack("sakib", greet, joy);
//

function calculate(a, b, operation) {
  // call operation() here and print the result
  console.log("you number is", operation(a, b));
}

function add(a, b) {
  // your code
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

calculate(6, 2, add);
calculate(6, 2, subtraction);
