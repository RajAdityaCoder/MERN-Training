//Q3. Create your own callback hell.
function callbackHell(fn) {
  console.log("callback hell");
  function fn(gr) {
    console.log("function");
    function gr(cn) {
      console.log("callback");
      cn();
    }
  }
}
callbackHell();
