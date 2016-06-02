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
