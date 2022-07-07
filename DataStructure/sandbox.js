/** queue */
const queue = function () {
  const collection = [];

  this.print = function () {
    console.log(collection);
  }

  this.enqueue = function (element) {
    collection.push(element);
  }

  this.dequeue = function (element) {
    return collection.shift();
  }

  // return the first element in the queue
  this.front = function () {
    return collection[0];
  }

  this.size = function () {
    return collection.length;
  }

  this.isEmpty = function () {
    return (collection.length === 0)
  }
}