// const student = {
//   name: "adi",
//   greet() {
//     console.log("hello world");
//   },
// };
// student.greet();

// const demoObject = {
//   name: "adi",
//   age: 25,
//   city: "delhi",
// };
// console.log(Object.entries(demoObject));

// const demoObject = {
//   name: "adi",
//   age: 25,
//   city: "delhi",
// };
// Object.freeze(demoObject);
// demoObject.age = 30;
// console.log(demoObject);

// const obj1 = {
//   a: 1,
// };
// const obj2 = {
//   b: 2,
// };
// const result = Object.assign({}, obj1, obj2);
// console.log(result);

const obj = {
  name: "adi",
};
Object.seal(obj);
obj.name = "raj";
console.log(obj);
obj.age = 25;
console.log(obj);
