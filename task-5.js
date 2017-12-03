///////////////////////////***5***//////////////////////////////
function partial() {
   var arr = [];
   var fn =arguments[0];
   for(var i = 1; i < arguments.length; i++){
       arr.push(arguments[i]);
}
    return function (){
      var arr2 =arr.slice();
      for(var i = 0; i < arguments.length; i++){
          arr2.push(arguments[i]);
}
	return fn.apply(null,arr2.slice());
}
}