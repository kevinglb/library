Array in JavaScript

/*
	Array.isArray	
    判断一个参数是不是array
*/
//standard
var isArray = function(arg){
	if(Array.isArray){
		return Array.isArray.call(arg);
	}
	return Object.prototype.toString.call(arg) === "[object Array]";
}

//short version
var isArray = Array.isArray || function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
};

/*
	Array.prototype.concat()
	用于合并两个或多个数组，并返回新的数组，对原先的数组不作更改
*/
var arr1 = [1,2,3],
	arr2 = ['a','b','c'];
var arr3 = arr1.concat(arr2); //[1,2,3,'a','b','c']

/*
	Array.prototype.every()
	every() 方法测试数组的所有元素是否都通过了指定函数的测试。
*/
var isOdd = function(num){
	return num % 2 === 1;
}

var isEven = function(num){
	return num % 2 === 0;
}

var arr = [2,4,6,8];
arr.every(isOdd);
arr.every(isEven);

/*
	Array.prototype.fill()
	The fill() 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引

	arr.fill(value) 
	arr.fill(value, start) 
	arr.fill(value, start, end)
*/

[1, 2, 3].fill(4)            // [4, 4, 4]
[1, 2, 3].fill(4, 1)         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)    // [4, 2, 3]

/*
	Array.prototype.filter
	filter() 方法使用指定的函数测试所有元素，并返回一个包含所有通过测试的元素的新数组。
*/
var isOdd = function(num){
	return num % 2 === 1;
}

var isEven = function(num){
	return num % 2 === 0;
}

var arr = [1,2,3,4,5,6];
var oddArr = arr.filter(isOdd); //返回包含所有奇数的新数组
var evenArr = arr.filter(isEven); //返回包含所有偶数的新数组


/*
	Array.prototype.find
	find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
*/
var isOdd = function(num){
	return num % 2 === 1;
}

var isEven = function(num){
	return num % 2 === 0;
}
var arr = [1,2,3,4,5,6];
arr.find(isOdd); // 返回数组中第一个奇数 1
arr.find(isEven); // 返回数组中第一个偶数 2

/*
	Array.prototype.findIndex()
	findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
*/

var arr = [1,2,3,4,5,6];
arr.findIndex(isOdd); // 返回数组中第一个奇数的索引 0
arr.findIndex(isEven); // 返回数组中第一个偶数的索引 1

/*
	Array.prototype.forEach
	forEach() 方法对数组的每个元素执行一次提供的函数。

*/
array.forEach(callback(currentValue, index, array){
    //do something
}, this);

let a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});
// a
// b
// c

/*
	Array.prototype.includes
	includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
*/
var a = [1, 2, 3];
a.includes(2); // true 
a.includes(4); // false

/*
	Array.prototype.indexOf()
	indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。
*/
arr.indexOf(searchElement[, fromIndex = 0])
//fromIndex 是开始查找元素的位置 默认为0 如果超出数组的长度 则返回-1
var a = [2, 9, 9]; 
a.indexOf(2); // 0 
a.indexOf(7); // -1


/*
	Array.prototypejoin()
	join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。
	join不会改变原有的数组 返回的是一个新的字符串对象
*/

str = arr.join()// 默认为 ","

str = arr.join("")// 分隔符 === 空字符串 ""

/*
	Array.prototype.lastIndexOf()
	lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
	与indexOf原理类似 区别是indexOf返回的是第一个指定元素的索引 lastIndexOf返回的是最后一个指定元素的索引
*/
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
//fromIndex是开始逆查找的起始位置 默认为数组的长度-1 如果超出则返回-1
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);


/*
	Array.prototype.map
	map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
	map()方法不会修改原先的数组 返回的也为新数组
*/
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x) {
   return x * 2;
});
//roots = [2,10,20,30]

/*
	Array.prototype.reduce
*/