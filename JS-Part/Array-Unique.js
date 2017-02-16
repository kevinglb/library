/*
	数组去重
*/

/*
	一般的遍历法
	时间复杂度O(n^2)
*/
function uniqueArray(arr){
	var a = [];//一个新的临时数组
	var i = 0,
		l = arr.length;
	for(i;i<l;i++){
		if(a.indexOf(arr[i]) === -1){
			a.push(arr[i]);
		}
		// (a.indexOf(arr[i]) === -1) && a.push(arr[i]);
	}

	return a;
}

//使用filter
function uniqueArray(arr){
	var a = arr.fliter(function(item,index,arr){
		return array.indexOf(item) === index;
	});

	return a;
}

//逆向遍历
function uniqueArray(arr){
	var a = [];
	var i = 0,
		l = arr.length;
	for(i;i<l;i++){
		for(var j = i+1;j<l;j++){
			if(a[i] === a[j]){
				j = += i;
			}
		}
		a.push(a[i]);
	}
	return a;
}

/*
	这个方法中 ‘1’和1会当作相同的并去重
*/
function uniqueArray(arr){
	return arr.concat().sort().filter(function(item,index,array){
		return !index || item != array[index -1];
	})
}


//利用Object作为hash表
function uniqueArray(arr) {
  var seen = {};

  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}
//上个方法中String和Number依旧无法分别 可以稍微改进一下
function uniqueArray(arr){
	var hash = {},
		res = [];
	for(var i =0,l = arr.length;i<l;i++){
		var item = arr[i];
		var key = JSON.stringify(item);//每一个键值都转化为JSON字符串形式 是唯一的
		if(hash[key] !== 1){
			res.push(item);
			hash[key] = 1;
		}
	}
	return res; 
}

//ES6 Array.from
function uniqueArray(arr){
	return Array.from(new Set(arr));
}
