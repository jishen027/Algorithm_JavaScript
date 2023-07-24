/**
 * @param {Fcuntion} fn
 * @returns {Function}
 */

const once = function (fn) {
  let called = false;
  return function (...args) {
    if(!called){
      called = true;
      return fn(...args)
    }else{
      return undefined;
    }
  }
}

const sayhello = function sayHello(){
  console.log("Hello");
}

const onceFn = once(sayhello);

onceFn();
onceFn();

