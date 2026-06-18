function add(a, b, callback) {
  let result = a + b;
  console.log("Addition:", result);
  callback(result);
}

function multiply(sum, callback) {
  let result = sum * 3;
  console.log("Multiplication:", result);
  callback(result);
}

function subtract(product, callback) {
  let result = product - 3;
  console.log("Subtraction:", result);
  callback(result);
}

function divide(diff, callback) {
  let result = diff / 3;
  console.log("Division:", result);
  callback(result);
}

add(5, 10, function (sum) {
  multiply(sum, function (product) {
    subtract(product, function (diff) {
      divide(diff, function (finalResult) {
        console.log("Final Result:", finalResult);
      });
    });
  });
});
