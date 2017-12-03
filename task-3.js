////////////////////////***3***//////////////////////////
function map(fn, array) {
    var arr = [];
	for(var i = 0; i < array.length; i++){
		arr.push(fn(array[i]));
	}
    return arr;
}
