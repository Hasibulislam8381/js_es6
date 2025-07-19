arr = [3, 4, 7, 1, 8, 20];
const res = arr.findIndex((currentNumber, indexedDB, arr) => {
  return currentNumber % 5 == 0;
});
console.log(res);
