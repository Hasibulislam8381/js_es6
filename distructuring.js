const user = {
  name: "Himel",
  age: 24,
  degree: {
    name: "BSC",
    cgpa: 3.57,
  },
};

const { degree: { cgpa: result } = {} } = user;
console.log(result);

const number = [3, 4, 5, [123, 14, 56], 12, 34];

const [, , , [, a], b] = number;

console.log(a, b);

var z = 45;
var y = 78;

[y, z] = [z, y];
