Array in JavaScript

Array.isArray()	
/*
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

Array.prototype.concat()
/*
	用于合并两个或多个数组，并返回新的数组，对原先的数组不作更改
*/

var arr1 = [1,2,3],
	arr2 = ['a','b','c'];
var arr3 = arr1.concat(arr2); //[1,2,3,'a','b','c']


Array.prototype.every()
/*
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


["1", "2", "3"].map(parseInt);
//结果为[1,NaN,NaN] 因为parseInt需要两个参数(val, radix) 但是map传递了3个参数(val,index,array)
/*
	Array.prototype.reduce
	reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值
	一个空数组上应用reduce会抛初始化错误的异常 TypeError
*/
//forEach实现求和
var arr = [1,2,3,4],
sum = 0;
arr.forEach(function(e){sum += e;}); // sum = 10  just for demo
//map实现求和
arr.map(function(obj){sum += obj});//return undefined array. sum = 10  just for demo
//reduce实现求和
arr.reduce(function(pre,cur){return pre + cur}); // return 10
//reduce实现把数组元素提出来组成唯一数组(元素不再含有数组)
const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

Array.prototype.reduceRight()
/*
	reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
*/

Array.prototype.reverse()
/*
	reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。
*/

Array.prototype.shift()
/*
	shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
	该方法和pop()相对应 都会改变原数组
*/	


Array.prototype.slice()
/*
	slice() 方法将数组的一部分浅拷贝, 返回到从开始到结束（不包括结束）选择的新数组对象。原始数组不会被修改。
*/
arr.slice(begin,end)
/*
	begin是起始位置的因索引 默认为0
  	end是结束位置的索引 默认为原数组末尾 如果end 大于数组长度 slice会提取到原数组末尾
*/
var a = [1,2,3,4]
a.slice()//[1,2,3,4]
a.slice(1)//[2,3,4]
a.slice(1,2)//[2,3]
a.slice(1,4)//[2,3,4]

Array.prototype.some()
/*
	some() 方法测试数组中的某些元素是否通过了指定函数的测试。

	some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。
	callback 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。
	some不会改变原数组

*/

Array.prototype.sort()
/*
	sort() 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
*/


Array.prototype.splice()
/*
	splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。

*/
array.splice(start)
array.splice(start, deleteCount) 
array.splice(start, deleteCount, item1, item2, ...)


Array.prototype.toString()
/*
	toString() 返回一个字符串，表示指定的数组及其元素。
*/

Array.prototype.unshift()
/*
	unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
*/

