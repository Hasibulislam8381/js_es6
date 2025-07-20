const numbers = [4, 12, 43, 6, 7, 1, 45];

const res = numbers.filter((num, index, arr) => {
  console.log(index);
  console.log(arr);

  return num > 10;
});

console.log(res);
