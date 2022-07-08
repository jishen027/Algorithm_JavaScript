# Stack 

- first in first out

- function : push, pop, peek, length.(peek for display top element of stack)

- In javascript we can use array as stack

### An example of using array as stack:
```javascript
const letters = []
const word = "pop"
let rword = ""

// push letter of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// pop off the stack in recerse order, can not use letter here because after pop, the length of stack will -1.
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if (rword === word) {
  console.log(word, "is a palindrome")
} else {
  console.log(word, "is not a palindrome")
}
console.log(letters, letters.length)
```

### Implement a stack

```javascript
const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function () {
    //Stack equels 0
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result
  }

  this.size = function () {
    return this.count;
  }

  this.peek = function () {
    return this.storage[this.count - 1]
  }
}
```

 # Set

 - every element in the set is unique

 ```javascript
 /** Sets */
 const mySet = function () {
  this.collection = [];

  // this function will check for the presence of an element and return true or false
  this.has = function (element) {
    return this.collection.indexOf(element) !== -1;
  }

  // this function will reutnr all the values in the set
  this.value = function () {
    return this.collection;
  }

  // this function will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // this function will remove the element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false
  }

  // this function will return the length of the set
  this.size = function () {
    return this.collection.length;
  }

  // this function will return the union of two set
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.value();
    const secondSet = otherSet.value();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));

    return unionSet;
  }

  // this function will return the intersection of two set
  this.intersection = function (otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.value();
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet;
  }

  // this function will return the difference of two set
  this.difference = function (otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.value();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  }

  // this function will test if the set is a subset of a different set
  // every for test if every element in the array pass the test implement by the provide function;
  this.subSet = function (otherSet) {
    const firstSet = this.value();
    return firstSet.every((e) => {
      return otherSet.has(e)
    })
  }
}
 ```

 # Queue

- fist in last out

 ```javascript
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
 ```

 - Priority Queue

```javascript
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
```



 