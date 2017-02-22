1.已知有字符串foo="get-element-by-id",写一个function将其转化成驼峰表示法"getElementById"

function getFirstUpperCase(str){
  return str.toLowerCase().replace(/^\S/,function(s){ //先将字符串全部小写化 再对第一个字母大写化
    return s.toUpperCase();
  })
}



var tF = function(str,tag){ //str为需要转化的原始字符串 tag为字符串中的连接符号
  if(str.indexOf(tag) === -1){ //如果字符串中没有指定的连接符 则返回
     return str;
  }
  
  var arr = str.split(tag)；
  var newStr = arr.reduce(function(rec,val,array){ //使用reduce是因为本问题中不需要考虑对第一个单词进行大写
    	return rec + getFirstUpperCase(val); 
 	 });
  return newStr;
  
}

console.log(tF('get-element-by-id','-'));

2.已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”

function getStr(arr){
	return arr.join('');
}

