const user = {
  name: "Himel",
  age: 24,
  degree: {
    name: "BSC",
    cgpa: 3.57,
  },
};

const {
  degree: { cgpa: result },
} = user;
console.log(result);
