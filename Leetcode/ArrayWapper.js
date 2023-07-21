// create a class ArrayWapper to wrap the array

// when two instances of the class are add using computer operator '+', return the sum of the two arrays
// when using string() method, return the string of the array

var ArrayWapper = function(arr) {
  this.arr = arr;
}

ArrayWapper.prototype.toString = function() {
  return "[" + this.arr.toString() + "]";
}

// when using valueOf() method, return the sum of the array
ArrayWapper.prototype.valueOf = function() {
  return this.arr.reduce((a, b) => a + b, 0);
}

// sum a array
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];

const arrayWapper = new ArrayWapper(array1);

const arrayWapper2 = new ArrayWapper(array2);

const sum = arrayWapper + arrayWapper2;

console.log(sum);

console.log(String(arrayWapper));