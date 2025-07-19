var arr = [5, 6, 7, 9, 3];

const result = arr.find(function (number, index, arr) {
  return arr[index] > 7;
});
console.log(result);

class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(name + " " + age);
  }
  test() {
    console.log("Hello");
  }
  exampleFuntion() {
    let arr = [2, 4, 6, 23];
    arr.find(() => this.test());
  }
}

const obj = new Hero("Himel", 25);
obj.exampleFuntion();
