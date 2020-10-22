var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var obj = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "sed", age: 40, active: false },
];
var friends = [
    {
        name: "Alice",
        money: 10
    },
    {
        name: "Bob",
        money: 3
    },
    {
        name: "Clyde",
        money: 8
    },
];
var chunk = function (arr, size) {
    var result = new Array();
    var sub_arr;
    arr.forEach(function (element, index) {
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
console.log(chunk(arr, 3));
console.log(chunk(friends, 2));
function func1(e) {
    return e % 2 == 0;
}
function func2(e) {
    return e.age === 40;
}
var filter = function (arr, func) {
    var result = new Array();
    arr.forEach(function (element) {
        if (func(element)) {
            result.push(element);
        }
    });
    return result;
};
console.log(filter(arr, func1));
console.log(filter(arr, func2));
var sum = function (arr) {
    var sum = 0;
    arr.forEach(function (element) {
        sum += element;
    });
    return sum;
};
console.log(sum(arr));
var find = function (arr, search) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element === search) {
            return search;
        }
    }
    return "Element Not Found.";
};
console.log(find(arr, 4));
var reduce = function (arr, func, start) {
    var ret = func(start, arr[0]);
    for (var i = 1; i < arr.length; i++) {
        ret = func(ret, arr[i]);
    }
    return ret;
};
console.log(reduce(arr, function (a, e) {
    return a + e;
}, 0));
console.log(reduce(friends, function (a, e) {
    return a + e.money;
}, 0));
