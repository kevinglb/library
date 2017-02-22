Object in JavaScript


//detect object
//判断一个参数是不是对象 (这里的对象包含function 和 object)
function isObject(obj){
	var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
//clone objects

//1.A vanilla Javascript method for cloning objects

function cloneObject(obj){
	var copy;
	// recursive function to clone an object. If a non object parameter is passed in, that parameter is returned and no recursion occurs.
	if(obj == null || typeof obj == "Object" ){
		return obj;
	}
	// give temp the original obj's constructor
	copy = obj.constructor;
	for(var key in obj){
		copy[key] = cloneObject(obj[key]);
	}

	return copy

}

//2.A clever exploit of the JSON library to deep-clone objects
var objCopy = (JSON.parse(JSON.stringify(obj)));

//这种情况下只能clone 原来obj中的非函数的key 
//所以得到的objCopy的key中不包含原来obj中的函数 其余key依旧可以被clone


//3. Object.toString() & Object.valueOf()
To convert an object to a string, JavaScript takes these steps:

- If the object has a toString() method, JavaScript calls it. If it returns a primitive value, JavaScript converts that value to a string (if it is not already a string) and returns the result of that conversion. Note that primitive-to-string conversions are all well-defined in Table 3-2.
- If the object has no toString() method, or if that method does not return a primitive value, then JavaScript looks for a valueOf() method. If the method exists, Java- Script calls it. If the return value is a primitive, JavaScript converts that value to a string (if it is not already) and returns the converted value.
- Otherwise, JavaScript cannot obtain a primitive value from either toString() or valueOf(), so it throws a TypeError.

To convert an object to a number, JavaScript does the same thing, but it tries the valueOf() method first:
- If the object has a valueOf() method that returns a primitive value, JavaScript con- verts (if necessary) that primitive value to a number and returns the result.
- Otherwise, if the object has a toString() method that returns a primitive value, JavaScript converts and returns the value.
- Otherwise, JavaScript throws a TypeError.