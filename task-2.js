////////////////////////***2***//////////////////////////
function take(fn, count) {
    var arr = [];
	for(var i = 0; i < count; i++){
		arr.push(fn());
	}
    return arr;
}
