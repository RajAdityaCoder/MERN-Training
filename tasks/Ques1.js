//Q1. use copy and merge method to define an array
const arr1 = [1, 2, 3, 4, 5];

const copyArr = [...arr1];
console.log(copyArr);

const arr2 = [19, 45, 43, 23];

const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);
