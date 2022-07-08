/**  Priority Queue */

const PriorityQueue = function () {
  const collection = []

  this.isEmpty = function () {
    return collection.length === 0;
  }

  this.printCollectiom = function () {
    console.log(collection);
  }

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] > collection[i][1]) { //check priority
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  }

  this.dequeue = function () {
    const value = collection.shift();
  }
}