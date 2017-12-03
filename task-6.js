function partialAny() {
       var arr = [];
   var fn = arguments[0];
   for(var i = 1; i < arguments.length; i++){
       arr.push(arguments[i]);
}
    return function (){
      var arr2 =arr.slice();
      var k = 0;
      for(var i = 0; i < arr2.length; i++){
          if(arr2[i]===undefined){
            arr2[i]=arguments[k];
            k++;            
}
}
        for(;k<arguments.length;k++){
             arr2.push(arguments[k]);
}
	return fn.apply(null,arr2.slice());
}