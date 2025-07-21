// var arr = [1, 2, 3, 4, 5];

// var arr2 = [...arr];
// arr.push(3);
// console.log(arr);
// console.log(arr2);

// var a = [1, 2, 3, 4];
// var b = [5, 6];

// var add = [...a, ...b];

// console.log(add);

var obj = {
  name: "HImel",
  age: 24,
};
var obj2 = {
  Class: 10,
  Color: "Dark",
};
var res = {
  ...obj,
  ...obj2,
};

console.log(res);
