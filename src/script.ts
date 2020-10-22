let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let obj = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "sed", age: 40, active: false },
];
var friends = [
  {
    name: "Alice",
    money: 10,
  },
  {
    name: "Bob",
    money: 3,
  },
  {
    name: "Clyde",
    money: 8,
  },
];

const chunk = (arr, size) => {
  let result = new Array();
  let sub_arr;
  arr.forEach((element, index) => {
    if (index % size === 0) {
      sub_arr = new Array();
    }
    sub_arr.push(element);
    if ((index + 1) % size === 0 || index + 1 === arr.length) {
      result.push(sub_arr);
    }
  });
  return result;
};

console.log("Chunk example 1 - " + chunk(arr, 3));
console.log("Chunk example 2 - " + chunk(friends, 2));

function func1(e) {
  return e % 2 == 0;
}

function func2(e) {
  return e.age === 40;
}

const filter = (arr, func) => {
  let result = new Array();
  arr.forEach((element) => {
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
};

console.log("Filter example 1 - " + filter(arr, func1));
console.log("Filter example 2 - " + filter(arr, func2));

const sum = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log("Sum example - " + sum(arr));

const find = (arr, search) => {
  for (let element of arr) {
    if (element === search) {
      return search;
    }
  }
  return "Element Not Found.";
};

console.log("Find example - " + find(arr, 4));

const reduce = (arr, func, start) => {
  let ret = func(start, arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ret = func(ret, arr[i]);
  }
  return ret;
};

console.log(
  "Reduce example 1 - " +
    reduce(
      arr,
      function (a, e) {
        return a + e;
      },
      0
    )
);
console.log(
  "Reduce example 2 - " +
    reduce(
      friends,
      function (a, e) {
        return a + e.money;
      },
      0
    )
);
