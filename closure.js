function data() {
  let count = 0;
  return function elements() {
    count++;
    return count;
  };
}
const payment = data();
console.log(payment());
console.log(payment());
console.log(payment());
