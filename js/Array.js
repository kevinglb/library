Array in JavaScript

//detect Array
//判断一个参数是不是array
var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};