let num1 = 2;
let num2 = 1;

function calculation(a, b) {
  console.log(arguments);
  a = 10;
  const result = num1 + num2;
  return result;
}
console.log(num1);
const finalResult = calculation(num1, num2, 10, 23);
console.log("your final result is ", num1);

// Non-primitive are passed by references

const obj1 = { name: "rubel", age: 30, year: 2026 };
const obj2 = { name: "rasel", age: 24, year: 2000 };

function objTime(name1, model2) {
  name1.name = "fahid";
  model2.name = "sumaiya";
  const film = name1.name + model2.name;
  return film;
}
console.log(obj1.name, obj2.name);
const novel = objTime(obj1, obj2);
console.log(obj1.name);
